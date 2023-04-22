function updateCheckBoxFor(readBooks) {
  readBooks.forEach(function(readBook, i) {
    let read = readBook.firstElementChild;
    let book = myLibrary[i];

    read.addEventListener('click', _ => {
      book.read = book.read ? false : true;

      showTable();
    });
  });
};

function showRemoveLinkFor(bookTitles) {
  bookTitles.forEach(function(titleCell, i) {
    let remLink = titleCell.lastElementChild

    titleCell.addEventListener('mouseover', _ => {
      remLink.style.display = 'block';
    });

    titleCell.addEventListener('mouseout', _ => {
      remLink.style.display = 'none';
    });

    remLink.addEventListener('click', _ => {
      const book = myLibrary[i];

      book.removeBookFromLibrary();

      showTable();
    });
  });
};

function activateBookOptions() {
  const bookTitles = Object.values(document.getElementsByClassName('title'));
  const readBooks  = Object.values(document.getElementsByClassName('read'));

  showRemoveLinkFor( bookTitles );

  updateCheckBoxFor( readBooks );
};
