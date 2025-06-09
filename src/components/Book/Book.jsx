import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    // destructuring the book object to extract properties
    const { bookId, bookName, author, image, tags, category } = book;

    return (

        // dynamic routing to book detail page
        // <Link to={`/book/${bookName}`} className='hover:scale-105 transition-transform duration-300'>
        <Link to={`/books/${bookId}`} >

            <div className="card bg-base-100 w-96 shadow-sm p-6 ">
                <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt="books" />
                </figure>
                <div className="card-body">
                    {/* this is for the tags  */}
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-100 text-green-500">{tag}</button>)
                        }
                    </div>

                    <h2 className="card-title m-4">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>

                    {/* <div className="divider divider-start"></div> */}

                    {/* <hr className="border-t border-dotted border-gray-400 my-4" /> */}
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <div className="card-actions justify-">
                        <div className="badge badge-outline">{category}</div>

                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;