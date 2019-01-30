import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

// Parent component which renders Book components
// Should hold state in root of tree, i.e. Library, which holds Book
// Lifting state up: parent passes down information to children
// Can only use component lifecycle methods when using class syntax
class Library extends Component {
    
    static defaultProps = {
        
        // If there is no value for books, this is used as default
        books: [
            {title: "Tahoe Tales", author: "Chet Whitley", pages: 1000}
        ]
    }

    // Allows us to get rid of the constructor
    state = {  // Source of truth!
        open: true,
        freeBookmark: true,
        hiring: false,
        data: [],
        loading: false
     } // Static property

     // Excellent place to fetch data
     // Will change state to handle loading of data
     componentDidMount() {
         this.setState({loading: true})
         // Fetching from a rest api
         fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
     }

     componentDidUpdate() {
         console.log("The component just updated")
     }

    // Will trigger change of state
    // Is asynchronous
    toggleOpenClosed = () => { // automatically binds this in context of function
        // Takes in object that resets the state
        this.setState(prevState => ({ // callback function
            open: !prevState.open
        }))
    }

    // The only required method of the component lifecycle
    render() {
        console.log(this.state)
        const {books} = this.props;
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading 
                    ? "loading..."
                    :<div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library Product of the Week!</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} 
                                         alt={product.name} 
                                         height={100} />
                                </div>
                            )
                        })}
                    </div>}
                <h1>The Library is {this.state.open ? 'Open' : 'Closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {/* We're mapping all the books in the array */}
                {/* No need to use braces with ES6 if the arrow points to what you're returning */}
                {books.map(
                    (book, i) => 
                        <Book key={i}
                              title={book.title}
                              author={book.author} 
                              pages={book.pages}
                              freeBookmark={this.state.freeBookmark}/>
                )}
            </div>
        )
    }
}

// Ensures that the right data types are provided to these components
Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library