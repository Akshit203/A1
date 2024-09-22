import { useNavigate } from 'react-router-dom';

let Data = [
    {
        id: 1,
        image: '/public/images/9c023e01-cf93-49e4-9e96-d1fc4d341b8b1644483275914NayoWomenOffWhitePrinted1.jpg',
        title: 'T-Shirt',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: '/public/images/6fc8e78a-e0e3-4eb6-94f3-53449f5a8afc1717496220339-Kook-N-Keech-Women-Tshirts-4791717496219965-1.jpg',
        title: 'T-Shirt',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: '/public/images/11508911098449-HRX-by-Hrithik-Roshan-Men-Off-White-Solid-Sporty-Jacket-9701508911098165-1.webp',
        title: 'T-Shirt',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: '/public/images/8ebc0e0a-7d55-46ed-b7ea-79912f389e161701172271600-Levis-Slim-Fit-Checked-Pure-Cotton-Casual-Shirt-391701172271-1.webp',
        title: 'T-Shirt',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 5,
        image: '/public/images/9c023e01-cf93-49e4-9e96-d1fc4d341b8b1644483275914NayoWomenOffWhitePrinted1.jpg',
        title: 'T-Shirt',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 6,
        image: '/public/images/6fc8e78a-e0e3-4eb6-94f3-53449f5a8afc1717496220339-Kook-N-Keech-Women-Tshirts-4791717496219965-1.jpg',
        title: 'T-Shirt',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 7,
        image: '/public/images/11508911098449-HRX-by-Hrithik-Roshan-Men-Off-White-Solid-Sporty-Jacket-9701508911098165-1.webp',
        title: 'T-Shirt',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 8,
        image: '/public/images/8ebc0e0a-7d55-46ed-b7ea-79912f389e161701172271600-Levis-Slim-Fit-Checked-Pure-Cotton-Casual-Shirt-391701172271-1.webp',
        title: 'T-Shirt',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
];

const Card = () => {
    const navigate = useNavigate();

    return (
        <div className="m-8">
            <div className="">
                <h1 className="text-center text-base">BESTSELLING PRODUCTS</h1>
            </div>

            <section>
                <div>
                    <div className="flex flex-wrap m-4">
                        {Data.map((item) => {
                            const { id, image, title, price } = item;
                            return (
                                <div key={id} className="p-4 md:w-1/4">
                                    <div className="p-2 flex flex-wrap border-4 rounded-xl bg-white justify-center">
                                        <img 
                                            className="m-2 w-48 h-60 cursor-pointer" 
                                            onClick={() => navigate('/Products')} 
                                            src={image} 
                                            alt={title} 
                                        />
                                        <div className="p-6">
                                            
                                            <h1>{title.substring(0, 25)}{title.length > 25 ? '...' : ''}</h1>
                                            <h1>₹{price}</h1>
                                            <div>
                                                <button className="p-12 bg-black hover:bg-black w-full text-white py-[4px] rounded-lg font-bold">
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
    );
}

export default Card;
