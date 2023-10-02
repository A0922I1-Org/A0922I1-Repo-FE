import {Category} from "./category";
import {Brand} from "./brand";

export interface Product {
  productName: string;
  cost: number;
  screenSize: string;
  frontCamera: string;
  backCamera: string;
  productCpu: string;
  imageUrl: string;
  productStorage: string;
  description: string;
  category: Category;
  brand: Brand;
}
