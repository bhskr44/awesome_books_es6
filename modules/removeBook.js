const removeBook = (id) => {
  //   console.log('id: ', id);
  let books = JSON.parse(localStorage.getItem('books'));
  books = books.filter((book) => book.id !== Number(id));
  localStorage.setItem('books', JSON.stringify(books));
  window.location.reload();
};

export default removeBook;
