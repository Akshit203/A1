import Layout from '../components/layout/Layout';
import { Trash } from 'lucide-react'
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect } from 'react';

const products = [
    {
        id: 1,
        name: 'Nike Air Force 1 07 LV8',
        href: '#',
        price: '₹47,199',
        originalPrice: '₹48,900',
        discount: '5% Off',
        color: 'Orange',
        size: '8 UK',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
    },
    {
        id: 2,
        name: 'Nike Blazer Low 77 SE',
        href: '#',
        price: '₹1,549',
        originalPrice: '₹2,499',
        discount: '38% off',
        color: 'White',
        leadTime: '3-4 weeks',
        size: '8 UK',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
    },
    {
        id: 3,
        name: 'Nike Air Max 90',
        href: '#',
        price: '₹2219 ',
        originalPrice: '₹999',
        discount: '78% off',
        color: 'Black',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
    },
    
]





const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Item removed from cart");
    };

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const cartItemTotal = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Layout>
            <div className="container mx-auto max-w-7xl px-2 lg:px-0">
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                            <h2 id="cart-heading" className="sr-only">Shopping Cart</h2>
                            <ul role="list" className="divide-y divide-gray-200">
                                {cartItems.length > 0 ? (
                                    cartItems.map((item, index) => {
                                        const { id, title, price, productImageUrl, quantity, category } = item;
                                        return (
                                            <li key={index} className="flex py-6">
                                                <div className="flex-shrink-0">
                                                    <img src={productImageUrl} alt={title} className="h-24 w-24 rounded-md object-contain object-center" />
                                                </div>
                                                <div className="ml-4 flex flex-1 flex-col justify-between">
                                                    <div className="relative pr-9">
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm font-semibold text-black">{title}</h3>
                                                        </div>
                                                        <div className="mt-1 flex text-sm">
                                                            <p className="text-sm text-gray-500">{category}</p>
                                                        </div>
                                                        <div className="mt-1 flex items-end">
                                                            <p className="text-sm font-medium text-gray-900">₹{price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-2 flex items-center">
                                                    <button onClick={() => handleDecrement(id)} type="button" className="h-7 w-7">
                                                        - {/* Decrement Button */}
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="mx-1 h-7 w-9 rounded-md border text-center"
                                                        value={quantity}
                                                        readOnly
                                                    />
                                                    <button onClick={() => handleIncrement(id)} type="button" className="h-7 w-7">
                                                        + {/* Increment Button */}
                                                    </button>
                                                    <button onClick={() => deleteCart(item)} type="button" className="ml-6 flex items-center">
                                                        <Trash size={12} className="text-pink-500" />
                                                        <span className="text-xs font-medium text-pink-500">Remove</span>
                                                    </button>
                                                </div>
                                            </li>
                                        );
                                    })
                                ) : (
                                    <h1>No items in the cart</h1>
                                )}
                            </ul>
                        </section>
                        {/* Order summary */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                        >
                            <h2
                                id="summary-heading"
                                className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                            >
                                Order Summary
                            </h2>
                            <div>
                                <dl className="space-y-1 px-2 py-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Price ({cartItemTotal} item{cartItemTotal > 1 ? 's' : ''})</dt>
                                        <dd className="text-sm font-medium text-gray-900">₹ {cartTotal}</dd>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <dt className="flex text-sm text-gray-800">Delivery Charges</dt>
                                        <dd className="text-sm font-medium text-green-700">Free</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-y border-dashed py-4">
                                        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                        <dd className="text-base font-medium text-gray-900">₹ {cartTotal}</dd>
                                    </div>
                                </dl>
                                <div className="px-2 pb-4 font-medium">
                                    <div className="flex gap-4 mb-6">
                                    <button
                                        onClick={() => {
                                            if (cartItems.length === 0) {
                                                toast.error("Your cart is empty. Please add items to your cart before placing an order.", {
                                                    position: toast.POSITION.TOP_CENTER,
                                                    autoClose: 3000,
                                                });
                                            } else {
                                                toast.success("Order placed successfully!", {
                                                    position: toast.POSITION.TOP_CENTER,
                                                    autoClose: 3000,
                                                });
                                            }
                                        }}
                                        className="w-full px-4 py-3 text-center text-gray-100 bg-black border border-transparent rounded-xl"
                                        >
                                          Place Order
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;


