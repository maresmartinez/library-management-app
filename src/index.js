import React, { Component } from 'react'; // Destructured
import { render } from 'react-dom'

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
const Library = () => {
    return (
        <div>
            <Book title="The Sun Also Rises" 
                  author="Ernest Hemingway" 
                  pages={260}/>
            <Book title="White Teeth" 
                  author="Zadie Smith" 
                  pages={480}/>
            <Book title="Cat's Cradle" 
                  author="Kurt Vonnegut" 
                  pages={304}/>
        </div>
    )
}

render( // ReactDOM.render()
    // What we want to render
    <Library />,

    // Where do we want to render this? ... to root
    document.getElementById('root') 
)