import React from 'react'; // Destructured
import { render } from 'react-dom'
import Library from './Library'

// Acts like a database, could be a json file
let bookList = [
    {title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260},
    {title: "White Teeth", author: "Zadie Smith", pages: 480},
    {title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304}
];

render( // ReactDOM.render()
    // What we want to render
    <Library books={bookList} />,

    // Where do we want to render this? ... to root
    document.getElementById('root') 
)