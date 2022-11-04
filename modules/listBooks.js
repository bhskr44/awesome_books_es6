import BookClass from './BookClass.js';
import removeBook from './removeBook.js';

const listBooks = () => {
  const list = document.getElementById('list');
  list.innerHTML = '';

  let books = [];
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
    if (books.length > 0) {
      list.classList.add('list');
    } else {
      list.classList.remove('list');
    }
  }

  books.forEach((book) => {
    const newBook = new BookClass(book.title, book.author);
    newBook.id = book.id;

    const divElement = document.createElement('div');
    divElement.classList.add('book');
    divElement.innerHTML = `
          <span>"${newBook.title}" by ${newBook.author}</span>
            <form action ="delete-book" class="remove-form" method="get">
          <input type="hidden" name="removeId" class="removeId" value="${newBook.id}"></input>
            <input type="submit" value="Remove"></input>
          </form>
           `;

    list.appendChild(divElement);
  });
  const removeBookEle = document.querySelectorAll('.remove-form');

  removeBookEle.forEach((key) => {
    key.addEventListener('submit', (event) => {
      event.preventDefault();
      removeBook(key.querySelector('.removeId').value);
    });
  });
};

export default listBooks;
