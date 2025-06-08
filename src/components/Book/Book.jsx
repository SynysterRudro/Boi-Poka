import React from 'react';

const Book = ({ book }) => {

    // destructuring the book object to extract properties
    const { bookName, author, image } = book;

    return (
        <div className="card bg-base-100 w-96 shadow-sm p-6 ">
            <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt="books" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;