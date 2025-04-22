"use strict";
// enum BookStatus {
//     Available,
//     CheckedOut,
//     Reserved
//   }
//   type Book = [string, string, number, BookStatus];
//   function borrowBook(book: Book): string {
//     if (book[3] === BookStatus.Available) {
//       book[3] = BookStatus.CheckedOut;
//       return `You have successfully borrowed "${book[0]}".`;
//     } else if (book[3] === BookStatus.Reserved) {
//       return `The book "${book[0]}" is reserved and cannot be borrowed.`;
//     } else {
//       return `The book "${book[0]}" is already checked out.`;
//     }
//   }
//   // Example
//   const myBook: Book = ['Atomic Habits', 'James Clear', 123456, BookStatus.Available];
//   console.log(borrowBook(myBook));  // Success
//   console.log(borrowBook(myBook));  // Already checked out
