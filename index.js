let myLibrary = []

let defaultBooks = [ [ 'Daisy Jones & the Six', 'Tailor Jenkins Reid',387, false ],
                     [ 'It Starts with Us','Colleen Hoover',327, true ],
                     [ 'Lessons In Chemistry','Bonnie Garmus',295, false ] ];

function addDefaultBooksToLibrary() {
  defaultBooks.forEach(book => {
    new Book(...book).addBookToLibrary();
  });
}

//addDefaultBooksToLibrary();

showTable();
