class Book {

  constructor( title, author, pages, read ) {
    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.read   = read;
  }

  addBookToLibrary() {
    myLibrary.push(this)
  }

  removeBookFromLibrary() {
    if (window.confirm("Are you sure you want to remove this book?")) {
      myLibrary.splice(myLibrary.indexOf(this), 1);
    }
  }
}
