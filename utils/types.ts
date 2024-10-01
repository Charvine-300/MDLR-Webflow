interface ProductsInterface {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[]; // An array of image URLs
    creationAt: string; // ISO date string
    updatedAt: string;  // ISO date string
}

interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string; // ISO date string
    updatedAt: string;  // ISO date string
  }
  
  interface ProductDetailsInterface {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];  // An array of image URLs
    category: Category;
    creationAt: string; // ISO date string
    updatedAt: string;  // ISO date string
    count?: number;
  }
  

export type { ProductsInterface, ProductDetailsInterface }