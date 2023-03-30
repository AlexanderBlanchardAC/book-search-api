import React, { useState } from 'react';
import './bookCard.css';
import Modal from './Modal';

const BookCard = ({book}) => {
    const {title, author } = book;

    const [ show, setShow ] = useState(false);
   
    
  return (
    <div>
        <div className='book-container' onClick={() => setShow(true)}>
            <div className='cardTop'>
                <h3 className='book-title'>{title}</h3><br></br>
                <p className='book-author'>{author}</p><br></br>
                
            </div>
    
     
     
        </div>
         <Modal show={show}  onClose={() => setShow(false)} book={book}/>
    </div>
  )
}

export default BookCard
