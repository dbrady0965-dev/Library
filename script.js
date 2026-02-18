const myLibrary = ["Harry Potter", "The Herion Diaries", 
    "The Darkroom Cookbook"];

function Book(title, uid) {
    this.title = title;
    this.uid = crypto.randomUUID;
}

function addBookToLibrary(title, uid) {
    const book = new Book ("Epic Wanderer", Crypto)
    for (let i = 0; i< book.length; i++) {
        console.log('Index: ${i}, Value: ${book[i]}');
    }
}
console.log(myLibrary);