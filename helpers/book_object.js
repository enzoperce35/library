function Book( title, author, pages, read ) {
  this.title  = title;
  this.author = author;
  this.pages  = pages;
  this.read   = read;
}

Book.prototype.addBookToLibrary = function() {
  myLibrary.push(this)
};

Book.prototype.removeBookFromLibrary = function() {
  if (window.confirm("Are you sure you want to remove this book?")) {
    myLibrary.splice(myLibrary.indexOf(this), 1);
  }
};
