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
class Library extends Component {
    
    // Allows us to get rid of the constructor
    state = { open: false } // Static property
    
    // constructor(props) {
    //     super(props)
    //     // State is just an object with several keys, similar to props
    //     // Can use these values within the context of the Library component
    //     this.state = {
    //         open: true
    //     }

    //     // Binding
    //     // Makes "this" accessible with the context of custom methods
    //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    // }

    // Will trigger change of state
    // Is asynchronous
    toggleOpenClosed = () => { // automatically binds this in context of function
        // Takes in object that resets the state
        this.setState(prevState => ({ // callback function
            open: !prevState.open
        }))
    }

    render() {
        console.log(this.state)
        const {books} = this.props;
        return (
            <div>
                <h1>The Library is {this.state.open ? 'Open' : 'Closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {/* We're mapping all the books in the array */}
                {/* No need to use braces with ES6 if the arrow points to what you're returning */}
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
}

render( // ReactDOM.render()
    // What we want to render
    <Library books={bookList} />,

    // Where do we want to render this? ... to root
    document.getElementById('root') 
)