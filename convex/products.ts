import { mutation, query } from "./_generated/server";

import { v } from "convex/values";
export const createProduct = mutation({
  args: {
    name: v.string(),
    price: v.number(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("Products", {
      name: args.name,
      price: args.price,
      image: args.imageUrl,
    });
  },
});

export const getProducts = query({
  handler: async (ctx) => {
    return ctx.db.query("Products").collect();
  },
});
