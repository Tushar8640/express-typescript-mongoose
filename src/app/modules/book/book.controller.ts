import { Request, Response } from "express";
import {
  createBookToDB,
  getAllBooksFromDB,
  getAllFeaturedBooksFromDB,
  updateBooksPriceToIntegerToDB,
} from "./book.service";
import { IUser } from "../user/user.interface";

export const createBook = async (req: Request, res: Response) => {
  const data: IUser = req?.body;
  console.log(data);
  const book = await createBookToDB(data);

  res.status(200).json({
    status: "success",
    data: book,
  });
};

export const getBooks = async (req: Request, res: Response) => {
  const { genre, publisher } = req.query;

  const books = await getAllBooksFromDB(genre, publisher);
  res.status(200).json({
    status: "success",
    data: books,
  });
};

export const getFeaturedBooks = async (req: Request, res: Response) => {
  const featuredBooks = await getAllFeaturedBooksFromDB();
  res.status(200).json({
    status: "success",
    data: featuredBooks,
  });
};
export const updateBooksPriceToInteger = async (
  req: Request,
  res: Response
) => {
  const books = await updateBooksPriceToIntegerToDB();
  res.status(200).json({
    status: "success",
    data: books,
  });
};
