interface Book {
  title: string;
  isRead: boolean;
}

const booksTs: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

//Read Books

function isBookReadTs(books, titleToSearch) {
    return books.some((book) => book.title === titleToSearch && book.isRead);

  }
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false