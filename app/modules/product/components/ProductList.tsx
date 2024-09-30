"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { formatCurrency } from "@/lib/utils";
import { useQuery } from "convex/react";

export default function ProductList() {
  const products = useQuery(api.products.getProducts);
  console.log(products);
  return (
    <div className="grid grid-cols-auto-fill-minmax gap-4 px-8">
      {products?.map((product) => {
        return (
          <div key={product._id} className="flex flex-col gap-4 py-4">
            <header className="flex justify-between items-center">
              <h2 className="font-bold text-xl">{product.name}</h2>
              <p>{formatCurrency(product.price)}</p>
            </header>
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg"
              />
            </figure>
            <Button>Add to car</Button>
            <Button variant={"destructive"}>Delete product</Button>
          </div>
        );
      })}
    </div>
  );
}
