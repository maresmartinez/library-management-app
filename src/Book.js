import React from 'react'; // Destructured

// Child component
export const Book = 
({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {  
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages}</p>
            <p>Free Bookmark Today: {freeBookmark ? 'Yes!' : 'No!'}</p>
        </section>
    )
}