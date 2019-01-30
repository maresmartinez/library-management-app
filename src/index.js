import React, { Component } from 'react'; // Destructured
import { render } from 'react-dom'

// Acts like a database, could be a json file
let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304},
];

// Child component
const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages}</p>
        </section>
    )
}

// Parent component which renders Book components
const Library = ({books}) => {
    return (
        <div>
            {/* We're mapping all the books in the array */}
            {/* No need to use braces with ES6 if the arrow points to whatever you're returning */}
            {books.map(
                (book, i) => 
                    <Book key={i}
                          title={book.title}
                          author={book.author} 
                          pages={book.pages}/>
            )}
        </div>
    )
}

render( // ReactDOM.render()
    // What we want to render
    <Library books={bookList} />,

    // Where do we want to render this? ... to root
    document.getElementById('root') 
)