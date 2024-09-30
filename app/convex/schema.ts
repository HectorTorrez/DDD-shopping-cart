import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Products: defineTable({
    id: v.string(),
    name: v.string(),
    price: v.number(),
    imageUrl: v.string(),
  }),
});
