

### 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

**Ans:**  The purpose of creating a model with an interface and schema in MongoDB is to define the structure of a collection. The interface defines the properties that a document in the collection must have, and the schema defines the types of data that each property can contain. This helps to ensure that the data in the collection is consistent and that it can be easily manipulated.

Here are some of the benefits of using a model with an interface and schema in MongoDB

- Consistency: The interface and schema ensure that the data in the collection is consistent. This is important because it makes it easier to work with the data and to avoid errors.
- Efficiency: The interface and schema can help to improve the efficiency of queries and other operations on the data. This is because the database can use the information in the interface and schema to optimize the queries.
- Reusability: The model and schema can be reused in other applications. This can save time and effort, and it can also help to ensure that the data is consistent across applications.

Overall, using a model with an interface and schema in MongoDB is a good practice that can help to improve the quality and efficiency of your applications.

### 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

**Ans:**  Field filtering is a way to specify which fields to include or exclude in the returned documents when querying a MongoDB collection. This can be useful for a variety of reasons, such as:
- To reduce the amount of data that needs to be transferred over the network.
- To improve the performance of queries by limiting the number of documents that need to be processed.
- To protect sensitive data by excluding fields that contain confidential information.
##### There are two main ways to specify field filtering in MongoDB:

1. Using the $project aggregation operator.
2. Using the filter method   on  the Collection class.

#### The **$project** aggregation operator allows you to specify a projection document that defines which fields to include or exclude in the output. The projection document can be used to specify the following:
- The fields to include in the output.
- The fields to exclude from the output.
- The fields to rename.
- The fields to calculate.

```typescript
db.books.aggregate([
  {
    $project: {
      title: 1,
      author: 1
    }
  }
]);
```
The following example shows how to use the $project aggregation operator to include only the title and author fields in the output:

#### The **filter** method on the Collection class allows you to specify a filter document that defines which documents to include in the output. The filter document can be used to specify the following:

- The conditions that documents must meet to be included in the output.
- The fields to include in the output.
- The fields to exclude from the output.

```typescript
const result = await db.collection('books').find({}).filter({ field1: 1, field2: 1 }).toArray();
```

In this example, the **filter** method is used to include field1 and field2 in the query result. Other fields will be excluded.

### 3. What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.
**Ans:**  The logical operators "$and," "$or," "$not," and "$nor" are used to combine multiple conditions in a MongoDB query.
- ** $and** returns documents that match all of the specified conditions.For example, the following query will return all documents where the genre field is equal to "Fantasy" and the author field is equal to "J.K. Rowling"

**Instance** methods are methods that are defined on a specific instance of a MongoDB model. They can be used to perform actions on the data in the model, or to interact with the database.

**For example:** we define a custom instance method called **getBookDetails()** on the bookSchema. This method returns a formatted string containing the title, author, and published year of a book document.
```typescript
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
  // Other book fields...
});

// Define an instance method on the bookSchema
bookSchema.methods.getBookDetails = function() {
  return `Title: ${this.title}, Author: ${this.author}, Published Year: ${this.publishedYear}`;
};

const Book = mongoose.model('Book', bookSchema);

// Create a book instance
const book = new Book({
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925
});

// Use the custom instance method
console.log(book.getBookDetails()); // Output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published Year: 1925


```

Custom instance methods in MongoDB models allow you to define document-specific behavior and encapsulate related logic within the model itself. They provide a clean and organized way to add functionality to individual documents and enhance the capabilities of your application.



### 4. How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.
**Ans:**  In MongoDB queries, comparison operators such as "$ne" (not equal), "$gt" (greater than), "$lt" (less than), "$gte" (greater than or equal to), and "$lte" (less than or equal to) are used to compare field values and perform conditional operations. These operators allow you to retrieve documents that meet specific criteria based on field values.

Here are examples that illustrate the usage of these comparison operators:

1.** "$ne" (not equal):**
```typescript
// Find books that are not published by "John Doe"
db.books.find({ author: { $ne: "John Doe" } });

```
2.** "$gt" (greater than):**
```typescript
// Find books with a price greater than 10
db.books.find({ price: { $gt: 10 } });

```

3.** "$lt" (less than):**
```typescript
// Find books with a rating less than 4.5
db.books.find({ rating: { $lt: 4.5 } });

```

4.**"$gte" (greater than or equal to):**
```typescript
// Find books with a published year greater than or equal to 2020
db.books.find({ publishedYear: { $gte: 2020 } });
```

5.**"$lte" (less than or equal to):**
```typescript
// Find books with a price less than or equal to 20
db.books.find({ price: { $lte: 20 } });

```

These comparison operators can be used in various MongoDB query methods, such as find(), findOne(), aggregate(), etc., to filter documents based on specific conditions. The operators are used within an object where the field to compare is specified as the key and the comparison operator and value are provided as the value.

By using these comparison operators, you can retrieve documents that match specific criteria and perform complex queries based on field values in your MongoDB collections.





### 5. What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?
**Ans:** In MongoDB, the **"$in"** and **"$nin"** operators are used to match or exclude values against an array of values, respectively. They are useful for querying documents where a field value matches or does not match any value in a given array.

Here's an explanation of each operator and how you can use them:
1. **"$in" Operator:** The "$in" operator selects documents where the value of a field matches any value in the specified array.
```typescript
// Find books with the genre either "Fantasy" or "Science Fiction"
db.books.find({ genre: { $in: ["Fantasy", "Science Fiction"] } });
```
In this example, the query will return books that have the genre field value equal to either "Fantasy" or "Science Fiction".

2. **"$nin" Operator:** The "$nin" operator selects documents where the value of a field does not match any value in the specified array.

```typescript
// Find books with a genre other than "Fantasy" and "Science Fiction"
db.books.find({ genre: { $nin: ["Fantasy", "Science Fiction"] } });

```
In this example, the query will return books that have the genre field value different from "Fantasy" and "Science Fiction".

The **"$in"** and **"$nin"** operators are useful when you want to match or exclude documents based on multiple possible values. They provide a concise and flexible way to query documents against an array of values.

It's important to note that these operators can be used with other operators or in combination with other query conditions to create more complex and specific queries in MongoDB.


### 6. Explain the logical operators "$and," "$or," "$not," and "$nor" in MongoDB queries. Provide examples to demonstrate their usage.
**Ans:**  The logical operators "$and," "$or," "$not," and "$nor" are used to combine multiple conditions in a MongoDB query.
- ** $and** returns documents that match all of the specified conditions.For example, the following query will return all documents where the genre field is equal to "Fantasy" and the author field is equal to "J.K. Rowling"

```typescript
db.books.find({
  $and: [
    { genre: 'Fantasy' },
    { author: 'J.K. Rowling' }
  ]
});
```

	This query retrieves books that have a genre of "Fantasy" and an author of "J.K. Rowling".
  
- **$or** returns  matches documents that satisfy at least one of the specified conditions.
```typescript
db.books.find({
  $or: [
    { genre: 'Fantasy' },
    { genre: 'Science Fiction' }
  ]
});
```
	This query retrieves books that have a genre of either "Fantasy" or "Science Fiction".
- **$not **operator performs a logical NOT operation on a single condition and matches documents that do not satisfy the specified condition.
```typescript
db.books.find({
  price: {
    $not: {
      $gt: 10
    }
  }
});
```
	This query retrieves books with a price that is not greater than 10.

- **$nor** operator performs a logical NOR operation on multiple conditions and matches documents that do not satisfy any of the specified conditions.
```typescript
db.books.find({
  $nor: [
    { genre: 'Fantasy' },
    { author: 'J.K. Rowling' }
  ]
});
```
	This query retrieves books that do not have a genre of "Fantasy" and an author of "J.K. Rowling".
