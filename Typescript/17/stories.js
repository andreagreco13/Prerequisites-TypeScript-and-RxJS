"use strict";
// importare alcune cose
//import  { Book , Categories as MyCategories } from './modules/book'
//importare tutto
exports.__esModule = true;
var book_1 = require("./modules/book");
//console.log(books.Categories)
//console.log(Categories)
//;console.log(MyCategories)
var book = new book_1["default"]();
book.year = 2017;
book.title = ' My story';
book.content = 'ddd';
console.log(book);
