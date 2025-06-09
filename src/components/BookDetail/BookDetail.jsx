import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addStoredReadList } from '../../utitlity/addtoDb';
import { addStoredWishList } from '../../utitlity/adtoWish';

const BookDetail = () => {

    // loading data from the loader function

    const { booksId } = useParams();
    const id = parseInt(booksId);
    // console.log(id);

    const data = useLoaderData();
    // console.log(data);
    // 

    const book = data.find(book => book.bookId === id);
    // console.log(book);


    const handleMarkAsRead = (id) => {
        // console.log(`Book with ID ${book.bookId} marked as read.`);
        addStoredReadList(id);
    }

    const handleMarkAsWish = (id) => {
        // console.log(`Book with ID ${book.bookId} marked as read.`);
        addStoredWishList(id);
    }


    return (

        <div className="card bg-base-100 shadow-sm">
            <figure className='bg-[#F3F3F3] py-8'>
                <img
                    src={book.image}
                    className="h-[500px] w-[300px] object-cover"
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.bookName}</h2>
                <p>By: {book.author}</p>
                <br />
                <p> <p className='font-bold'>Review :</p> <br />{book.review}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-success" onClick={() => { handleMarkAsRead(book.bookId) }}>Mark as Read</button>
                    <button className="btn btn-success" onClick={() => { handleMarkAsWish(book.bookId) }}>Add To Wishlist</button>

                </div>
            </div>
        </div>
    );
};

export default BookDetail;