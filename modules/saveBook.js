import BookClass from './BookClass.js';

const saveBook = (newBook) => {
  let books = [];
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
};

export default saveBook;
