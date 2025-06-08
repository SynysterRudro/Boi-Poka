import React from 'react';

import bannerImage from '../../assets/books.jpg'; // Adjust the path as necessary

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        This is a book lovers dane.
                    </p>
                    <button className="btn btn-success">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;