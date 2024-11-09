import { useNavigate } from 'react-router-dom';
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useContext, useEffect } from "react";
import Context from '../../ContextAPI/Context';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ToastBar } from 'react-hot-toast';
import { toast, Toaster } from 'react-hot-toast';


let Data = [
    {
        id: 1,
        image: '/image1.jpg',
        title: 'T-Shirt',
        price: 150,
       
    },
    {
        id: 2,
        image: '/image2.jpg',
        title: 'T-Shirt',
        price: 120,
      
    },
    {
        id: 3,
        image: '/image3.jpg',
        title: 'T-Shirt',
        price: 130,
 
    },
    {
        id: 4,
        image: '/image4.jpg',
        title: 'T-Shirt',
        price: 120,

    },
    {
        id: 5,
        image: '/image5.jpg',
        title: 'T-Shirt',
        price: 150,
    },
    {
        id: 6,
        image: '/image6.jpg',
        title: 'T-Shirt',
        price: 120,
    },
    {
        id: 7,
        image: '/image1.jpg',
        title: 'T-Shirt',
        price: 130,
    },
    {
        id: 8,
        image: '/image2.jpg',
        title: 'T-Shirt',
        price: 120,
    },
];



const Card = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart); // Access cart items from Redux state
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item)); // Dispatch addToCart action to Redux store
        toast.success("Added to cart"); // Show success notification
    };

    // Save cart items to localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="m-8">
            <Toaster /> 
            <section>
                <div className="py-4">
                    <div className="">
                        <h1 className="text-center text-xl font-semibold">BESTSELLING PRODUCTS</h1>
                    </div>

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 lg:px-0 mx-auto">
                            <div className="flex flex-wrap m-2">
                                {Data.map((item) => {
                                    const { id, image, title, price } = item;
                                    return (
                                        <div key={id} className="p-4 w-full md:w-1/4">
                                            <div className="h-100 border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                                <img
                                                    onClick={() => navigate(`/product/${id}`)}
                                                    className="lg:h-auto h-96 w-full"
                                                    src={image}
                                                    alt={title}
                                                />
                                                <div className="p-4">
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-1">
                                                        {title.substring(0, 25)}
                                                    </h1>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                                                        ₹{price}
                                                    </h1>
                                                    <div className="flex justify-center">
                                                        <button
                                                            className="bg-black hover:bg-gray-800 w-full text-white py-2 rounded-lg font-bold"
                                                            onClick={() => addCart(item)}
                                                        >
                                                            Add To Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default Card;



