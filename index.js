import BookClass from './modules/BookClass.js';
import saveBook from './modules/saveBook.js';
import listBooks from './modules/listBooks.js';

import { DateTime } from './modules/luxon.min.js';

const listSection = document.querySelector('#list');
const formSection = document.querySelector('#form-section');
const contactSection = document.querySelector('#contact-section');
const listBtn = document.querySelector('#menu-list');
const addFormBtn = document.querySelector('#menu-addnew');
const contactBtn = document.querySelector('#menu-contact');

const showList = () => {
  window.location.reload();
};
listBooks();

const date = document.querySelector('.date');
// const { DateTime } = luxon;
date.innerHTML = DateTime.now().toLocaleString(
  DateTime.DATETIME_MED_WITH_SECONDS
);

const showAddBook = () => {
  formSection.classList.remove('hide');
  contactSection.classList.add('hide');
  listSection.classList.add('hide');
  listBtn.classList.remove('active');
  addFormBtn.classList.add('active');
  contactBtn.classList.remove('active');
};

const showContact = () => {
  formSection.classList.add('hide');
  contactSection.classList.remove('hide');
  listSection.classList.add('hide');
  listBtn.classList.remove('active');
  addFormBtn.classList.remove('active');
  contactBtn.classList.add('active');
};
// const bookObj = new Books();
const formElement = document.getElementById('formElement');
formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleElement = document.getElementById('title');
  const authorElement = document.getElementById('author');
  const newBook = new BookClass(titleElement.value, authorElement.value);
  saveBook(newBook);
  showList();
});

const toggleWindow = () => {
  listBtn.addEventListener('click', () => {
    showList();
  });

  addFormBtn.addEventListener('click', () => {
    showAddBook();
  });

  contactBtn.addEventListener('click', () => {
    showContact();
  });
};
toggleWindow();
