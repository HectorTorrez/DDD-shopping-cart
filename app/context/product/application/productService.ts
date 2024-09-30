"use server";
import { createProduct } from "../domain/Product";
// this will be like server actions
export async function addNewProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const convertPriceToNumber = Number(price);

  const createdProduct = createProduct(name, convertPriceToNumber);

  return createdProduct;
}
