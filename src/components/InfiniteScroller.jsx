import React from 'react';
import '../../src/App.css'; // External CSS for animations

const InfiniteScroller = () => {
    return (
        <section className="flex justify-center items-center bg-white">
            <div className="flex overflow-hidden mask-gradient">
                <div className="flex gap-2 animate-scroll">
                    <p className="item">Gym</p>
                    <p className="item">Restaurants</p>
                    <p className="item">Pools</p>
                    <p className="item">Malls</p>
                    <p className="item">Coffee</p>
                    <p className="item">Football</p>
                    <p className="item">Hiking</p>
                    <p className="item">Art</p>
                    <p className="item">Clubs</p>
                    <p className="item">Gardens</p>
                    <p className="item">Cinemas</p>
                </div>
                <div className="flex gap-2 animate-scroll2">
                    <p className="item">Gym</p>
                    <p className="item">Restaurants</p>
                    <p className="item">Pools</p>
                    <p className="item">Malls</p>
                    <p className="item">Coffee</p>
                    <p className="item">Football</p>
                    <p className="item">Hiking</p>
                    <p className="item">Art</p>
                    <p className="item">Clubs</p>
                    <p className="item">Gardens</p>
                    <p className="item">Cinemas</p>
                </div>
            </div>
        </section>
    );
};

export default InfiniteScroller;
