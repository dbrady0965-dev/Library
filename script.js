const myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; 
    }

    toggleRead() {
        this.read = !this.read;
    }
}
function showCustomForm() {
    document.getElementById('customFormContainer').style.display = 'block';
};

function hideCustomForm() {
    // Hide the form container
    document.getElementById('customFormContainer').style.display = 'none';
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function removeBookById(id) {
const index = myLibrary.findIndex(book => book.id === id);
if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
    }
}

function displayBooks() {
    const container = document.getElementById("booklist");
    container.innerHTML = "";

    myLibrary.forEach(book => {
        const li = document.createElement("li");
        
        const text = document.createElement("span");
        text.textContent = `${book.title} by ${book.author} (${book.read ? "Read" : "Not read"})`;

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Read";
        toggleBtn.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            removeBookById(book.id);
        });

        li.append(text, toggleBtn, removeBtn);
        container.appendChild(li);
        
    });
}

    // Get form data
    const form = document.getElementById("bookForm");

    if (form) {
        form.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').checked;

        addBookToLibrary(title, author, pages, read);
        displayBooks();
        // Optional: Hide the form after submission
        hideCustomForm();
        form.reset();
    });
}



addBookToLibrary("James and the Giant Peach", "Roald Dahl", 160, false);
addBookToLibrary("The Darkroom Cookbook", "Steve Anchell", 352, true);
addBookToLibrary("The Heroin Diaries", "Nikki Sixx", 416, true);

displayBooks();


