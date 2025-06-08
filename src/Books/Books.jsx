import React, { useEffect, useState } from 'react';
import Book from '../components/Book/Book';

const Books = () => {


    // loading the data from a local JSON file÷
    // using useState to manage the books data
    // using useEffect to fetch the data when the component mounts
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => { setBooks(data); })
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">
                Books
            </h2>

            {/* it is the parent component for the Book component */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    // mapping through the books array to display each book 

                    books.map(book => <Book book={book} key={book.bookId}> </Book>)
                }
            </div>

        </div>
    );
};

export default Books;