import Book from "./book.model";

export const getAllBooksFromDB = async (genre, publisher) => {
  let query = {};
  if (genre && !publisher) {
    query = {
      genre: genre,
    };
  }
  if (genre && publisher) {
    query = {
      genre: genre,
      "publisher.name": publisher,
    };
  }
  const books = Book.find(query);
  return books;
};

export const getAllFeaturedBooksFromDB = async () => {
  const featuredBook = Book.aggregate([
    { $match: { rating: { $gte: 4 } } },
    {
      $addFields: {
        featured: {
          $cond: {
            if: { $gte: ["$rating", 4.5] },
            then: "BestSeller",
            else: "Popular",
          },
        },
      },
    },
  ]);
  return featuredBook;
};

export const createBookToDB = async (payload) => {
  const book = new Book(payload);
  await book.save();
  return book;
};
export const updateBooksPriceToIntegerToDB = async () => {
  const books = await Book.updateMany(
    { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
    [{ $set: { price: { $toInt: "$price" } } }]
  );
  console.log(books);
  return books;
};
