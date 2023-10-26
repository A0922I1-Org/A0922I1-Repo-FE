import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ReportService} from '../../../service/report.service';
import {Router} from '@angular/router';
import * as Chart from 'chart.js';
import {DatePipe} from '@angular/common';
function dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const selectedDate = new Date(control.value);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    return null;
  }
  return { invalidDate: true};
}
@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.css']
})
export class ReportCreateComponent implements OnInit {
  private chart: Chart;
  result: any;
  reportForm: FormGroup = new FormGroup({
    fromDate: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-\d{2}\-\d{2}$/), dateValidator]),
    toDate: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-\d{2}\-\d{2}$/), dateValidator]),
    reportType: new FormControl('', ),
    productId: new FormControl( '', [Validators.required, Validators.pattern(/^\d+$/)]),
  });

  constructor(private reportService: ReportService, private router: Router) {
  }

  ngOnInit(): void {

  }

  submit() {
    if (this.reportForm.valid) {
      const data = this.reportForm.value;
      this.reportService.sendReportData(data).subscribe(
        (response) => {
          this.result = response;
          this.createChart(response);
        },
        (error => {
          console.error('Error', error);
        })
      );
    } else {

    }
  }

  onReportTypeChange() {
    const reportTypeControl = this.reportForm.get('reportType');
    const productIdControl = this.reportForm.get('productId');

    if (reportTypeControl.value === 'All') {
      productIdControl.disable();
    } else {
      productIdControl.enable();
    }
  }

  private createChart(result: any) {
    const chartData = {
      labels: ['Doanh thu'], // Các nhãn của biểu đồ
      datasets: [{
        label: 'Số đơn hàng',
        data: [result.totalInvoice], // Dữ liệu của biểu đồ
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Màu nền cột
        borderColor: 'rgba(75, 192, 192, 1)', // Màu viền cột
        borderWidth: 1 // Độ dày viền
      },
        {
          label: 'Lợi nhuận',
          data: [result.totalRevenue], // Dữ liệu của biểu đồ
          backgroundColor: 'rgba(252,147,65,0.5)', // Màu nền cột
          borderColor: 'rgba(75, 192, 192, 1)', // Màu viền cột
          borderWidth: 1 // Độ dày viền
        }
      ],
    };

    const chartConfig = {
      type: 'bar', // Loại biểu đồ
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    // Tạo biểu đồ trên canvas có id là 'myChart'
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    this.chart = new Chart(canvas, chartConfig);
  }
}
