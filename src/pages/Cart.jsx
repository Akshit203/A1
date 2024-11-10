import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice'; // Adjust paths as needed
import Layout from '../components/layout/Layout';
import { toast } from 'react-toastify';

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

    // Calculate total quantity and total amount
    const cartItemTotal = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => {
        return total + (parseFloat(item.price) * item.quantity); 
    }, 0).toFixed(2); // Round to two decimal places

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
                                                            <p className="text-sm font-medium text-gray-900">₹{parseFloat(price).toFixed(2)}</p> {/* Ensure price is shown correctly */}
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
                                                        + 
                                                    </button>
                                                    <button onClick={() => deleteCart(item)} type="button" className="ml-6 text-pink-500 text-xs font-medium">
                                                        Remove 
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
                                        <dd className="text-sm font-medium text-gray-900">₹ {cartTotal}</dd> {/* Show correct total */}
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <dt className="flex text-sm text-gray-800">Delivery Charges</dt>
                                        <dd className="text-sm font-medium text-green-700">Free</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-y border-dashed py-4">
                                        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                        <dd className="text-base font-medium text-gray-900">₹ {cartTotal}</dd> {/* Show correct total */}
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
