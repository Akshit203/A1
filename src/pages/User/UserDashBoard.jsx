import Layout from "../../components/layout/Layout";
const products = [
    {
        id: 1,
        name: 'Nike Air Force 1 07 LV8',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
        href: '#',
        price: '₹61,999',
        color: 'Orange',
        imageAlt: 'Nike Air Force 1 07 LV8',
        quantity: 1,
    },
]

const UserDashBoard = () => {

    const user = JSON.parse(localStorage.getItem('users'));



    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">
                
                <div className="top">

                    <div className="bg-white-50 py-5 rounded-xl border border-white-400 flex justify-between">
                    
                        <div className="flex justify-center w-full">
                            <table className="min-w-[50%] text-left border-collapse">
                                <tbody>
                                    <tr className="border-b-2">
                                        <td className="px-6 py-4 font-bold">Name:</td>
                                        <td className="px-6 py-4">{user?.name || 'N/A'}</td>
                                    </tr>
                
                                    <tr className="border-b-2">
                                        <td className="px-6 py-4 font-bold">Email:</td>
                                        <td className="px-6 py-4">{user?.email || 'N/A'}</td>
                                    </tr>
                
                                    <tr className="border-b-2">
                                        <td className="px-6 py-4 font-bold">Date:</td>
                                        <td className="px-6 py-4">{user?.date || 'N/A'}</td>
                                    </tr>
                
                                    <tr className="border-b-2">
                                        <td className="px-6 py-4 font-bold">Role:</td>
                                        <td className="px-6 py-4">{user?.role || 'N/A'}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <div className="bottom">

                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        
                        <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>

                        
                        <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-black-100 md:flex-row">
                            
                            <div className="w-full border-r border-black-100 bg-black-50 md:max-w-xs">
                                
                                <div className="p-8">
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                        <div className="mb-4">
                                            <div className="text-sm font-semibold text-black">Order Id</div>
                                            <div className="text-sm font-medium text-gray-900">#74557994327</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Date</div>
                                            <div className="text-sm font-medium text-gray-900">4 March, 2023</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Total Amount</div>
                                            <div className="text-sm font-medium text-gray-900">₹84,499</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Order Status</div>
                                            <div className="text-sm font-medium text-green-800">Confirmed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-1">
                                <div className="p-8">
                                    <ul className="-my-7 divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <li
                                                key={product.id}
                                                className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                                            >
                                                <div className="flex flex-1 items-stretch">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                                            src={product.imageSrc}
                                                            alt={product.imageSrc}
                                                        />
                                                    </div>

                                                    <div className="ml-5 flex flex-col justify-between">
                                                        <div className="flex-1">
                                                            <p className="text-sm font-bold text-gray-900">{product.name}</p>
                                                            <p className="mt-1.5 text-sm font-medium text-gray-500">{product.color}</p>
                                                        </div>

                                                        <p className="mt-4 text-sm font-medium text-gray-500">x {product.quantity}</p>
                                                    </div>
                                                </div>

                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                    <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </Layout>
    );
}

export default UserDashBoard;