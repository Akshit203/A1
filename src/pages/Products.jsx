import { useNavigate } from "react-router";
import Layout from "../components/layout/Layout";

const productData = [
    {
        id: 1,
        image: '/image1.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        
    },
    {
        id: 2,
        image: '/image2.jpg',
        title: 'Cotton T-Shirt',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
       
    }, 
    {
        id: 3,
        image: '/image3.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        
    },
    {
        id: 4,
        image: '/image4.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
      
    },
    {
        id: 1,
        image: '/image5.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        
    },
    {
        id: 2,
        image: '/image6.jpg',
        title: 'Kaushalam kalash Copper Pot',
        price: 120,
        
    },
    {
        id: 3,
        image: '/image1.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        price: 130,
    },
    {
        id: 4,
        image: '/image2.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        price: 120,
        quantity: 1,
    }
]

const Products = () => {
    const navigate = useNavigate();
    return (
        <Layout>
        <div className="py-4">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center text-2xl font-semibold">All Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:px-0  mx-auto">
                    <div className="flex flex-wrap m-2">
                        {productData.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-100 border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            onClick={()=> navigate('/productinfo')}
                                            className="lg:h-auto  h-96 w-full"
                                            src={image}
                                            alt="blog"
                                        />
                                        <div className="p-4">

                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-1">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button className=" bg-black hover:bg-black w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
        </Layout>
    );
}

export default Products;