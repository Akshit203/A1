import { useNavigate } from "react-router";
import Layout from "../components/layout/Layout";

const productData = [
    {
        id: 1,
        image: '/public/images/9c023e01-cf93-49e4-9e96-d1fc4d341b8b1644483275914NayoWomenOffWhitePrinted1.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: '/public/images/6fc8e78a-e0e3-4eb6-94f3-53449f5a8afc1717496220339-Kook-N-Keech-Women-Tshirts-4791717496219965-1.jpg',
        title: 'Cotton T-Shirt',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    }, 
    {
        id: 3,
        image : '/public/images/11508911098449-HRX-by-Hrithik-Roshan-Men-Off-White-Solid-Sporty-Jacket-9701508911098165-1.webp',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: '/public/images/8ebc0e0a-7d55-46ed-b7ea-79912f389e161701172271600-Levis-Slim-Fit-Checked-Pure-Cotton-Casual-Shirt-391701172271-1.webp',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 1,
        image: '/public/images/828f1c75-c4de-4bc8-900a-aab184ea7e151721704393013StyleQuotientWomenCropShrug1.webp',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: '/public/images/1UzPz8vx_a3edc785c1c14b16a607db09f4a11f83.webp',
        title: 'Kaushalam kalash Copper Pot',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: '/public/images/1UzPz8vx_a3edc785c1c14b16a607db09f4a11f83.webp',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: '/public/images/1UzPz8vx_a3edc785c1c14b16a607db09f4a11f83.webp',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
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