document.getElementById("addBookForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const bookData = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        genre: document.getElementById("genre").value,
        year: document.getElementById("year").value,
    };

    // Example: Send to the server or save locally
    console.log("Book Data:", bookData);

    // Clear form after submission
    e.target.reset();
    alert("Book added successfully!");
});