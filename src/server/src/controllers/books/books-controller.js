'use strict';

import Boom from 'boom';

import BooksService from '../../services/books/books-service';

function getBook(request, h) {
  const books = JSON.parse(BooksService.getAllBooks(request)).books;
  const book = books.find(b => b.slug === request.params.slug);
  if (!book) {
    throw Boom.notFound();
  }

  return book;
}

function getBooksList(request, h) {
  const books = BooksService.getAllBooks(request);
  return books;
}

function setBookComment(request, h) {
  const books = BooksService.getAllBooks(request);
  const book = books.find(b => b.slug === request.params.slug);
  if (!book) {
    throw Boom.notFound();
  } else {
   book.comments.push(h)
  }
  return book;
}

export default {
  getBook: getBook,
  getBooksList: getBooksList,
  setBookComment: setBookComment
};
