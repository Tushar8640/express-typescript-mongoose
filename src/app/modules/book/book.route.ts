import {
  createBook,
  getBooks,
  getFeaturedBooks,
  updateBooksPriceToInteger,
} from "./book.controller";
import express from "express";

const router = express.Router();

router.get("/", getBooks);
router.get("/featuredbook", getFeaturedBooks);
router.put("/updatebooksprice", updateBooksPriceToInteger);
router.post("/", createBook);

export default router;
