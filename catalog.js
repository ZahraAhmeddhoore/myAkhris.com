// Function to load and display books from localStorage
function loadBooks() {
    const books = JSON.parse(localStorage.getItem("books")) || [];

    const bookListDiv = document.getElementById("bookList");
    bookListDiv.innerHTML = ""; // Clear existing content

    if (books.length === 0) {
        bookListDiv.innerHTML = "<p>No books available. Please add some books!</p>";
        return;
    }

    books.forEach((book, index) => {
        const bookItem = document.createElement("div");
        bookItem.className = "book-item";
        bookItem.innerHTML = `
            <strong>${book.title}</strong> by ${book.author} <br>
            Genre: ${book.genre}, Year: ${book.year} <br>
            <button onclick="deleteBook(${index})">Delete</button>
        `;
        bookListDiv.appendChild(bookItem);
    });
}

// Function to delete a book
function deleteBook(index) {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    loadBooks();
}

// Load books on page load
loadBooks();