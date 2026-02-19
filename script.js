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





/*
function createTable(dataArray) {
    let tableHTML = '<table><thead><tr>';

    const headers = Object.keys(dataArray[0]);
    headers.forEach(header => {
        tableHTML += '<th>${header}</th>';
    });
    tableHTML += '</tr></thead><tbody>';

    dataArray.forEach(item => {
        tableHTML += '<tr>';
        headers.forEach(header => {
            tableHTML += '<td>${item[header]}</td>';
        });
        tableHTML += '</tr>';
    });
    const container = document.getElementById('table-container');
    container.innerHTML = tableHTML;
}

createTable(myLibrary);
*/

/*
const htmlListItems = myLibrary.map(book => '<li>${book}</li>');
const finalHtml = '<ul>${htmlListItems.join("")}</ul>';

container.innerHTML = finalHtml;
*/

/*
const myLibrary = [];
    

function Book(title, uuid) {
    title = title;
    uuid = crypto.randomUUID();
    console.log('Generated UUID:  ${uuid}');
    

    return {
        title: title,
        id: uuid,
    };
}

function addBookToLibrary(title, uuid) {
    title.push(title);
    return title;
}

addBookToLibrary(myLibrary, 'Epic Wanderer');
console.log(myLibrary);
*/
  /*  
const book = new Book ("Epic Wanderer", Crypto)
    for (let i = 0; i< book.length; i++) {
        console.log('Index: ${i}, Value: ${book[i]}');
    }

    new Array("Harry Potter", "The Herion Diaries", 
    "The Darkroom Cookbook");
*/
