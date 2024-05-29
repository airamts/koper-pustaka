import { getBookData } from "../utils/dataBuku";

export const loadBooksFromLocalStorage = () => {
  const data = localStorage.getItem("books");
  return data ? JSON.parse(data) : getBookData();
};

export const saveBooksToLocalStorage = (books) => {
  localStorage.setItem("books", JSON.stringify(books));
};

export const incrementBookQueue = (bookId) => {
  const books = loadBooksFromLocalStorage();
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    books[bookIndex].antrian += 1;
    saveBooksToLocalStorage(books);
  }
};
