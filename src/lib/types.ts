export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  imageHint: string;
  category: string;
  color: string;
  fabric: string;
  rating: number;
  reviewCount: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'Pending' | 'Shipped' | 'Delivered';
};
