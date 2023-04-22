function BookData(form) {
  const data = new FormData(form);
  let formArray = [];

  for (var [_, value] of data.entries()) {
    formArray.push( value )
  }

  return formArray
}

document.getElementById('library-form').addEventListener("submit", function(e) {
  e.preventDefault();

  new Book(...BookData(this)).addBookToLibrary();

  showTable();
});

function showForm() {
  bookTable.style.display = 'none';
  bookForm.style.display = 'block';
}
