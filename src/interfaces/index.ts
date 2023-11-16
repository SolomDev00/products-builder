import { TProductNameSchema } from "../types";

export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInputs {
  id: string;
  type: string;
  name: TProductNameSchema;
  label: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}
