export interface Category {
  _id: string;
  code: string;
  name: string;
  img: string;
}

export interface UserInfo {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePic: string;
  cart: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  photo: string;
  old_price: number;
  price: number;
  location: string;
  star: number;
  review: number;
  sold: number;
  category: Category;
}

export interface Cart {
  _id: string;
  user: string;
  product: Product;
  productId: string;
  quantity: number;
}
