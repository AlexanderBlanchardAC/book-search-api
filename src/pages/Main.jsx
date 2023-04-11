import React, { useState } from 'react';

import BookCard from '../components/BookCard';
import Header from '../components/Header';
const Main = () => {

    const [ searchTitle, setSearchTitle ] = useState('Lee Child')
    const [ searchedBook, setSearchedBook ] = useState([])
    const [ error, setError] = useState(false);


    const getBookInfo = async (searchTitle) => {
     
       const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&key=AIzaSyCnjCQntzP9mH3gWYjvMY0cPJxBcjh7E3w&maxResults=12`)
               if(res.status === 200){
                     setError(false)
                        const response = await res.json()
                        const data = response.items
                        .map(book=>({
                        //    title: response.items.map(({volumeInfo}) => volumeInfo.title),
                        //    authors: response.itmes
                            title: book.volumeInfo.title,
                            author: book.volumeInfo.authors,
                            published: book.volumeInfo.publishedDate,
                            publisher: book.volumeInfo.publisher,
                            ISBN_13: book.volumeInfo.industryIdentifiers[0] ? book.volumeInfo.industryIdentifiers[0].identifier : null,
                            ISBN_10: book.volumeInfo.industryIdentifiers[1] ? book.volumeInfo.industryIdentifiers[1].identifier : null,
                            category: book.volumeInfo.categories,
                            price: book.saleInfo.retailPrice,
                            ebook: book.saleInfo.isEbook,
                            blurb: book.volumeInfo.description,
                            link: book.saleInfo.buyLink,
                            id: book.id,

                    }));setSearchedBook(data)
                        console.log(data)
                       
                        return searchedBook;
                        
               }else if(!searchedBook) {
                <p>Unable to find any matches, please try again!</p>
               } else {
                setError(true)
                alert("Sorry, there has been an error. Please try again.")
                console.log(error)
               }
    }

   
   const handleChange = (e) => {
    setSearchTitle(e.target.value)
   }



    const handleSubmit = () => {
        getBookInfo(searchTitle)
       
    }




  return (
    <div className='main-container'>
        <div className='header-container'>
            <Header />
        
            <div className="book-search">
                <input className='search-input' type="text" onInput={handleChange} id="searchInput" placeholder='Title, Author or Key Word'/>
                <button className='search-btn' type="submit" onClick={handleSubmit}>Search</button>
            </div>
        </div>
       
        <div className='each-book'>
            {searchedBook.map((book, index) => 
             <BookCard book={book} key={index} />
            )}
        </div>
       
       
       
        
      
     
    </div>
  )
}

export default Main
