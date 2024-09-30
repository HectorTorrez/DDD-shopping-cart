import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Products: defineTable({
    name: v.string(),
    price: v.number(),
    image: v.string(),
  }),
});
