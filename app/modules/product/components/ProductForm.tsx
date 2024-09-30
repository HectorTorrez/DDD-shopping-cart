"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { addNewProduct } from "@/app/context/product/application/productService";

export function ProductForm() {
  const createProduct = useMutation(api.products.createProduct);
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-4"
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target as HTMLFormElement);
            const validName = formData.get("name")?.toString().trim();
            const validPrice = formData.get("price")?.toString().trim();
            if (!validName || !validPrice) {
              return;
            }
            const response = await addNewProduct(formData);
            if (response) {
              const { imageUrl, name, price } = response;
              createProduct({ imageUrl, name, price });
              (event.target as HTMLFormElement)
                .querySelectorAll<HTMLInputElement>("input")
                .forEach((input) => (input.value = ""));
            }
          }}
        >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Name of your product" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Price</Label>

              <Input id="price" name="price" placeholder="Price" />
            </div>
          </div>
          <Button type="submit">Create</Button>
        </form>
      </CardContent>
    </Card>
  );
}
