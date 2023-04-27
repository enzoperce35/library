const bookTable = document.getElementById('library-table');
const bookForm  = document.getElementById('library-form');

function RemoveBtn() {
  let remove = document.createElement('span');

  remove.innerHTML = "&nbsp;&nbsp;&nbsp;[X]";

  remove.style = 'display: none; color: red';

  return remove
}

function checkBox(value) {
  let tcheck = document.createElement('input');

  tcheck.className = 'form-check-input';
  tcheck.type = 'checkbox';
  tcheck.checked = value ? 'checked': '';

  return tcheck
}

function process(tdata, key, value) {

  if (key == 'read') {
    tdata.appendChild(checkBox(value));
  }else {
    tdata.innerText = value;
  };

  if (key == 'title') { tdata.appendChild(RemoveBtn()) };

  return tdata
}

function propertiesOf(book) {
  const trow = document.createElement('tr');

  Object.entries(book).forEach(([ key, value ]) => {

    let tdata = document.createElement('td');

    tdata.className = key;

    trow.appendChild(process(tdata, key, value));
  });

  return trow
}

function setTable() {
   for (i = 0; i < myLibrary.length; i++) {

    const book = myLibrary[i];

    const tableRow = propertiesOf(book);

    document.getElementById("book-table").appendChild(tableRow);
  };
}

function clearTable() {
  let bookTable = document.getElementById('book-table');

  while (bookTable.hasChildNodes()) {
    bookTable.removeChild(bookTable.lastChild);
  }
}

function showTable() {
  clearTable();

  setTable();

  activateBookOptions();

  bookTable.style.display = 'block';
  bookForm.style.display = 'none';
}
