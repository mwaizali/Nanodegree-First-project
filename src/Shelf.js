import React from 'react'
import Book from './Book'

function Shelf(props) {


    const {Title , selectedCat , onShelf} = props;
 
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{Title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {/* A/c to selected category pick a bock and pass on in the Book component */}
                    {selectedCat
                        .map((book) => {
                            return <li key={book.id}>
                                <Book book={book} onShelf={onShelf}/>
                            </li>
                        })
                      }
                </ol>
            </div>
        </div>
    )
}

export default Shelf