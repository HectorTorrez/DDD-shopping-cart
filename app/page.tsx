import { ProductForm } from "./modules/product/components/ProductForm";
import ProductList from "./modules/product/components/ProductList";
import { ShoppingCart } from "./modules/product/components/ShoppingCart";

export default function Home() {
  return (
    <div className="flex  gap-4">
      <ProductForm />
      <section className="w-full flex flex-col gap-4 mt-4 px-8">
        <section className="flex w-full justify-end">
          <ShoppingCart />
        </section>
        <ProductList />
      </section>
    </div>
  );
}
