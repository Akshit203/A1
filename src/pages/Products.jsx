import Layout from "../components/layout/Layout";

const Products = () => {
    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="">
                                <div className="">
                                    <img
                                        className=" w-full lg:h-[39em] rounded-lg"
                                        src="https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                        Intel® Core™ i5-12600HX Processor (18M Cache, up to 4.60 GHz)
                                    </h2>

                                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                        <span>Rs.7,000.00</span>
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                        Description :
                                    </h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, explicabo enim ratione voluptatum at cupiditate delectus nemo dolorum officia esse beatae optio ut mollitia sit omnis, possimus nesciunt voluptas natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum ad rem reprehenderit qui, omnis nam distinctio, dignissimos nisi quidem aliquam, sapiente delectus commodi! Perspiciatis provident illo autem quidem ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reiciendis eum dolorum cupiditate </p>
                                </div>

                                <div className="mb-6 " />
                                <div className="flex flex-wrap items-center mb-6">
                                   
                                    <button
                                        className="w-full px-4 py-3 text-center text-pink-600 bg-pink-100 border border-pink-600  hover:bg-pink-600 hover:text-gray-100 rounded-xl"
                                    >
                                        Add to cart
                                    </button>
                                </div>
            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}

export default Products;