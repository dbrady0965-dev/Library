class Book {
    constructor(title, uuid) {
        this.title = title;
        this.uuid = crypto.randomUUID();

        
    }
}

const myLibrary = [];
const uuid = () => {
  if (typeof window !== 'undefined' && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }
  // Fallback for older Node.js versions (requires 'crypto' module)
  if (typeof require !== 'undefined') {
    const nodeCrypto = require('crypto');
    return nodeCrypto.randomUUID();
  }
  // Further fallbacks or error handling for very old environments
  // ...
};


myLibrary.push(new Book("The Darkroom Cookbook", uuid));
myLibrary.push(new Book("The Herion Diaries", uuid));


console.log(myLibrary);


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
