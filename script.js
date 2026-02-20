const myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

        
    }
}
function showCustomForm() {
    document.getElementById('customFormContainer').style.display = 'block';
};

function hideCustomForm() {
    // Hide the form container
    document.getElementById('customFormContainer').style.display = 'none';
}

function submitCustomForm() {
    // Get form data
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    

    // Optional: Hide the form after submission
    hideCustomForm();

}

function removeBook () {
    const removeButton = document.createElement('li');
    li.appendChild(document.createTextNode(itemName));

    removeButton.addEventListener('click', function() {
        this.parentElement.remove();
    });

    li.appendChild(removeButton);
    myLibrary.appendChild(li);

    document.getElementById('removeBookContainer').style.display = 'block';
}


function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    const container = document.getElementById("booklist");
    container.innerHTML = "";

    myLibrary.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author}`;
        li.dataset.id = book.id;
        container.appendChild(li);
    });
}

addBookToLibrary("James and the Giant Peach", "Roald Dahl", 160, false);
addBookToLibrary("The Darkroom Cookbook", "Steve Anchell", 352, true);
addBookToLibrary("The Heroin Diaries", "Nikki Sixx", 416, true);

displayBooks();


