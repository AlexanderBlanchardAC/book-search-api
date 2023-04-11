import React from 'react';
import coverImg from '../assets/coverImg.jpg';
import './modal.css';

const Modal = ({ show, onClose, book }) => {

    const { id, title, author, publisher, category, published, price, ebook, blurb, link } = book;
   
    if (!show) {
        return null;
    }

 
   const image = (`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`)

  return (
    <div className="modal">
        <div className='modal-content'>
            <div className='modal-header'>
                <h4 className='modal-title'>{title}</h4>
                <h6 className='modal-author'>{author}</h6>
                <p className='modal-category'>{category}</p>
            </div>
            <div className='modal-image-container'>
                <img className='modal-image' src={image !== undefined || null ? image : coverImg} alt="book cover"/>
            </div>
            <div className='modal-body'>
                <div className="modal-book-info">
                    <div className="info-left">
                        {publisher !== undefined ? (<p><span className="bold">Published by:</span> {publisher}</p> ):( <p><span className="bold">Published by:</span> Unknown</p>)}
                        <p><span className="bold">Date of Publication:</span> {published} </p>
                    </div>
                
                </div>
                    
                
                <div className='modal-body-desc'>
                    <p className="desc">
                        {blurb}
                    </p>
                </div>
                <div className="modal-additional-info">
                    <p className='bold'>Interested?</p>
                    {price !== undefined ? (
                    <p>Purchase for: £{price.amount}</p> ) : (null)}
                    {link !== undefined ? ( 
                    <p><a href={link}>Available Here</a></p> 
                    ) : ( <p>Purchase Link Currently Unavailable</p>)}
                    <p>Available as Ebook: {ebook === true ? (<span>Yes</span>) : (<span>No</span>)}</p>
                </div>
            </div>
                <div className='modal-footer'>
                    <button className="close-button" onClick={onClose}>Close</button>
                </div>
        </div>
       
          

       
      
    </div>
  )
}

export default Modal;
