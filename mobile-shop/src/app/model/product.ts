import {Category} from './category';
import {Brand} from './brand';

export interface Product {
  productId: number;
  productName: string;
  cost: number;
  screenSize: string;
  frontCamera: string;
  backCamera: string;
  productCpu: string;
  imageUrl: string;
  productStorage: string;
  description: string;
  sellingPrice: number;
  quantity: number;
  category: Category;
  brand: Brand;
}
