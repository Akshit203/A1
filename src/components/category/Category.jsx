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
        image: '/iphone.png',
        name: 'Mobile'
    },
    {
        id: 5,
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Laptop'
    },

    {
        id: 6,
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'Home'
    },
  
];

const Category = () => {
    return (
        <div>
            <div className="flex flex-col mt-5">
                <div className="flex lg:justify-center overflow-x-auto hide-scroll-bar">
                    <div className="flex flex-wrap justify-center md:justify-start">
                        {list.map((item) => (
                            <div 
                                key={item.id} 
                                className="px-3 py-4 m-3 border-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-105 
                                w-24 sm:w-28 md:w-32 lg:w-36"
                            >
                                <div className="flex justify-center mb-3">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                                    />
                                </div>
                                <h1 className="text-xs sm:text-sm md:text-base text-center font-medium">{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
