import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {catchError, switchMap} from "rxjs/operators";
import {Employee} from "../module/employee";
import {User} from "../module/user";
import {Role} from "../module/role";
import {throwError} from "rxjs";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formSignUp: FormGroup;
  employee: Employee = new Employee();
  user: User = new User();
  role: Role = new Role();


  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }


  ngOnInit(): void {
    // Khởi tạo FormGroup và FormControl
    this.formSignUp = this.formBuilder.group({
      nameEmployee: ['', [Validators.required, this.lengthValidator(5, 35)]],
      birthdayEmployee: ['', [Validators.required, this.validateBirthdayValidator]],
      addressEmployee: ['', [Validators.required, this.lengthValidator(5, 35)]],
      numberPhoneEmployee: ['', [Validators.required, this.lengthValidator(5, 35)]],
      username: ['', [Validators.required, this.lengthValidator(5, 35)]],
      role: ['', [Validators.required, this.lengthValidator(5, 35)]],
      email: ['', [Validators.required, this.customEmailValidator]],
      password: ['', [Validators.required, this.lengthValidator(5, 35)]],
      confirmPassword: ['', [Validators.required, this.lengthValidator(5, 35)]],
    }, {
      validators: this.matchPasswords
    });
  }
  lengthValidator(min: number, max: number) {
    return (control: AbstractControl) => {
      const value = control.value;
      if (value && (value.length < min || value.length > max)) {
        return { 'lengthInvalid': true };
      }
      return null;
    };
  }

  validateBirthdayValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const birthday = new Date(control.value);
    const currentDate = new Date();
    if (birthday > currentDate) {
      return {'invalidBirthday': true};
    }
    return null;
  }

  matchPasswords(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password').value;
    console.log(password)
    const confirmPassword = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      return {'passwordMismatch': true};
    }
    return null;
  }

  customEmailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!pattern.test(email)) {
      return {'invalidEmail': true};
    }
    return null;
  }

  onSubmit() {
    if (this.formSignUp.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi...',
        text: 'Vui lòng điền đầy đủ thông tin đăng nhập.',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const username = this.formSignUp.get('username').value;
    const email = this.formSignUp.get('email').value;

    this.userService.checkExistingUsername(username).pipe(
      switchMap((usernameExists) => {
        if (usernameExists) {
          return throwError('Tài khoản đã tồn tại!');
        } else {
          return this.userService.checkExistingEmail(email);
        }
      }),
      switchMap((emailExists) => {
        if (emailExists) {
          return throwError('Email đã tồn tại!');
        } else {
          const employee = this.createEmployee();
          return this.userService.addEmployee(employee);
        }
      }),
      catchError((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Lỗi...',
          text: error,
        });
        console.log('Error:', error);
        return throwError(error);
      })
    ).subscribe(
      (data) => {
        localStorage.setItem('tempAccount', JSON.stringify(data));
        this.formSignUp.reset();
        this.router.navigateByUrl('/home');

        Swal.fire({
          icon: 'success',
          title: 'Đăng ký thành công!',
          text: 'Tài khoản của bạn đã được tạo thành công.',
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Lỗi...',
          text: error,
        });
      }
    );
  }



  createEmployee() {
    return {
      nameEmployee: this.formSignUp.get('nameEmployee').value,
      birthdayEmployee: this.formSignUp.get('birthdayEmployee').value,
      addressEmployee: this.formSignUp.get('addressEmployee').value,
      numberPhoneEmployee: this.formSignUp.get('numberPhoneEmployee').value,
      positionEmployee: this.formSignUp.get('role').value,
      user: {
        username: this.formSignUp.get('username').value,
        password: this.formSignUp.get('confirmPassword').value,
        email: this.formSignUp.get('email').value,
        avatar: null
      },
      role: [this.formSignUp.get('role').value]
    };
  }

}
