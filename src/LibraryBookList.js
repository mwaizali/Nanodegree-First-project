import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'




function LibraryBookList(props){

   const { books ,  onShelf } = props;

   //Filter the books according to the shelf they belong to.
   const CReading = books.filter((book) => book.shelf === 'currentlyReading');
   const WToRead = books.filter((book) => book.shelf === 'wantToRead');
   const Read = books.filter((book) => book.shelf === 'read');
  
 
   return(
    <div className="list-books">
        <div className="list-books-content">
         <div>
          <Shelf 
                selectedCat ={CReading}
                Title='Currently Reading'
                onShelf={onShelf}
              
          />
          <Shelf
                 selectedCat ={WToRead}
                Title='Want to Read'
                onShelf={onShelf}
          />
          <Shelf 
                selectedCat ={Read}
                Title='Read' 
                onShelf={onShelf}
          />
        </div>
      </div>
         <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    </div>
  )
}
export default LibraryBookList