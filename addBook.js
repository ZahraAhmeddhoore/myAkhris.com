// Event listener for the form submission
document.getElementById("addBookForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the default way

    // Get book data from the form
    const bookData = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        genre: document.getElementById("genre").value,
        year: document.getElementById("year").value,
        image: document.getElementById("image").files[0]
    };

    // If image is uploaded, convert it to base64
    if (bookData.image) {
        const reader = new FileReader();
        reader.onloadend = function () {
            bookData.image = reader.result; // Convert image to base64
            saveBookData(bookData); // Save book data
        };
        reader.readAsDataURL(bookData.image);
    } else {
        saveBookData(bookData); // Save without image
    }

    // Reset the form after submission
    document.getElementById("addBookForm").reset();
});

// Function to save book data to localStorage
function saveBookData(bookData) {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(bookData); // Add new book to the array

    // Save updated book list to localStorage
    localStorage.setItem("books", JSON.stringify(books));
}
