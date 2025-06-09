import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utitlity/addtoDb';
import Book from '../Book/Book';
import { getStoredWishList } from '../../utitlity/adtoWish';

const ListedBooks = () => {


    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const allBooks = useLoaderData();

    // because we are adding outside data so there will be a side effect
    useEffect(() => {
        const storedReadList = getStoredWishList();
        // console.log(storedReadList, allBooks);

        const storedReadListInt = storedReadList.map(id => parseInt(id));
        // console.log(storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, [])


    useEffect(() => {
        const storedWishList = getStoredWishList();
        // console.log(storedReadList, allBooks);

        const storedWishListInt = storedWishList.map(id => parseInt(id));
        // console.log(storedReadListInt, allBooks);

        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));

        setWishList(wishBookList);

    }, [])

    return (
        <div>
            <div className="text-3xl my-8">
                Listed Books
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I read - {readList.length}</h2>
                    {
                        readList.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My wishlist- {wishList.length}</h2>
                    {
                        wishList.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;