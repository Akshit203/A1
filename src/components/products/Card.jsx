import { useNavigate } from 'react-router-dom';


let Data = [
    {
        id: 1,
        image: '/src/images/9c023e01-cf93-49e4-9e96-d1fc4d341b8b1644483275914NayoWomenOffWhitePrinted1.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: '/src/images/6fc8e78a-e0e3-4eb6-94f3-53449f5a8afc1717496220339-Kook-N-Keech-Women-Tshirts-4791717496219965-1.jpg',
        title: 'Cotton T-Shirt',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image : '/src/images/11508911098449-HRX-by-Hrithik-Roshan-Men-Off-White-Solid-Sporty-Jacket-9701508911098165-1.webp',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: '/src/images/8ebc0e0a-7d55-46ed-b7ea-79912f389e161701172271600-Levis-Slim-Fit-Checked-Pure-Cotton-Casual-Shirt-391701172271-1.webp',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
        title: 'Kaushalam kalash Copper Pot',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    }
]

const Card = () => {

    const navigate = useNavigate();

    return (

        <div className="m-8">
            <div className="">
                <h1 className=" text-center text-base">BESTSELLING PRODUCTS</h1>
            </div>

            <section>
                <div>
                    <div className="flex flex-wrap m-4">
                    {
    Data.map((item) => {
        const { id, image, title, price } = item;
        return (
            <div key={id} className="p-4 w-full md:w-1/4">
                <div className="p-2 flex flex-wrap border border-black justify-center">
                    <img className="m-2 w-48 h-60" onClick={() => navigate('/Products')} src={image} alt="log" />

                    <div className="p-6">
                        <h2>A1 Store</h2>
                        <h1>{title.substring(0, 25)}</h1>
                        <h1>₹{price}</h1>

                        <div>
                            <button className="bg-black hover:bg-black w-full text-white py-[4px] rounded-lg font-bold">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
}


                        
                        
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Card ;