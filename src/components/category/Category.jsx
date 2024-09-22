import React from 'react';

const list = [
    {
        id: 1,
        image: 'https://cdn-icons-png.flaticon.com/128/4359/4359963.png',
        name: 'Fashion'
    },
    {
        id: 2,
        image: 'https://cdn-icons-png.flaticon.com/128/11833/11833323.png',
        name: 'Shirt'
    },
    {
        id: 3,
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'Jacket'
    },
    {
        id: 4,
        image: '/public/images/iphone.png',
        name: 'Mobile'
    },
    {
        id: 5,
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Laptop'
    },
    {
        id: 6,
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'Shoes'
    },
    {
        id: 7,
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'Home'
    },
    {
        id: 8,
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'Books'
    }
]

const Category = () => {
    return (
        <div>
            <div className="flex flex-col mt-5">

                <div className="flex  lg:justify-center hide-scroll-bar">

                    <div className="flex">

                        {list.map((list) => {

                            return (
                                <div key={list.id} className="px-3 lg:px-10 border-2 m-5 p-4 rounded-md 
                                hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">

                                    <div className=" lg:w-24 lg:h-20 max-w-16">
                                        <div className="flex justify-center mb-10 
                                        hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                            <img src={list.image} alt={list.name} />
                                        </div>
                                    </div>
                                    <h1 className='text-sm lg:text-base text-center font-medium'>{list.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
