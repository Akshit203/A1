import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cartSlice";
import Layout from "../components/layout/Layout";
import { toast } from 'react-hot-toast';

const productData = [
    {
        id: 1,
        image: '/image1.jpg',
        title: 'Cotton T-Shirt',
        price: 999,
        
    },
    {
        id: 2,
        image: '/image2.jpg',
        title: 'Cotton T-Shirt',
        price: 499,
       
    }, 
    {
        id: 3,
        image: '/image3.jpg',
        title: 'Cotton T-Shirt',
        price: 799,
        
    },
    {
        id: 4,
        image: '/image4.jpg',
        title: 'Cotton T-Shirt',
        price: 299,
      
    },
    {
        id: 1,
        image: '/image5.jpg',
        title: 'Cotton T-Shirt',
        price: 1099,
        
    },
    {
        id: 2,
        image: '/image6.jpg',
        title: 'Cotton T-Shirt',
        price: 1599,
        
    },
    {
        id: 3,
        image: '/image1.jpg',
        title: 'Cotton T-Shirt',
        price: 799,
    },
    {
        id: 4,
        image: '/image2.jpg',
        title: 'Cotton T-Shirt',
        price: 489,
        quantity: 1,
    },

    {
        id: 1,
        image: '/image1.jpg',
        title: 'Cotton T-Shirt',
        price: 999,
        
    },
    {
        id: 2,
        image: '/image2.jpg',
        title: 'Cotton T-Shirt',
        price: 499,
       
    }, 
    {
        id: 3,
        image: '/image3.jpg',
        title: 'Cotton T-Shirt',
        price: 799,
        
    },
    {
        id: 4,
        image: '/image4.jpg',
        title: 'Cotton T-Shirt',
        price: 299,
      
    },
    {
        id: 1,
        image: '/image5.jpg',
        title: 'Cotton T-Shirt',
        price: 899,

    },
    {
        id: 2,
        image: '/image6.jpg',
        title: 'Cotton T-Shirt',
        price: 1120,  
    },
    {
        id: 3,
        image: '/image1.jpg',
        title: 'Cotton T-Shirt',
        price: 1199,
    },
    {
        id: 4,
        image: '/image2.jpg',
        title: 'Cotton T-Shirt',
        price: 1920,
        quantity: 1,
    },

    {
        id: 1,
        image: '/image1.jpg',
        title: 'Cotton T-Shirt',
        price: 999,
        
    },
    {
        id: 2,
        image: '/image2.jpg',
        title: 'Cotton T-Shirt',
        price: 499,
       
    }, 
    {
        id: 3,
        image: '/image3.jpg',
        title: 'Cotton T-Shirt',
        price: 799,
        
    },
    {
        id: 4,
        image: '/image4.jpg',
        title: 'Cotton T-Shirt',
        price: 299,
      
    },
    {
        id: 1,
        image: '/image5.jpg',
        title: 'Cotton T-Shirt',
        price: 1599,
        
    },
    {
        id: 2,
        image: '/image6.jpg',
        title: 'Cotton T-Shirt',
        price: 1120,
        
    },
    {
        id: 3,
        image: '/image1.jpg',
        title: 'Cotton T-Shirt',
        price: 677,
    },
    {
        id: 4,
        image: '/image2.jpg',
        title: 'Cotton T-Shirt',
        price: 1120,
    }
]
const Products = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Add item to cart
    const addToCartHandler = (item) => {
        dispatch(addToCart(item)); // Dispatch the addToCart action
        toast.success("Added to cart"); //  success notification
    };

    return (
        <Layout>
            <div className="py-4">
                {/* Heading */}
                <div className="">
                    <h1 className=" text-center text-2xl font-semibold">All Products</h1>
                </div>

                {/* main */}
                <section className="text-gray-600 body-font">
                    <div className="container px-5 lg:px-0 mx-auto">
                        <div className="flex flex-wrap m-2">
                            {productData.map((item, index) => {
                                const { id, image, title, price } = item;
                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-100 border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={() => navigate('/productinfo')}
                                                className="lg:h-auto h-96 w-full"
                                                src={image}
                                                alt="product"
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
                                                        className="bg-black hover:bg-black w-full text-white py-[4px] rounded-lg font-bold"
                                                        onClick={() => addToCartHandler(item)} // Call add to cart
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
        </Layout>
    );
};

export default Products;