export const createProduct = (name: string, price: number) => {
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }
  return {
    id: crypto.randomUUID(),
    name,
    price,
    imageUrl: `https://picsum.photos/seed/${name}/200/300`,
  };
};
