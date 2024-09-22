import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../ContextAPI/Context";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Layout from "../../components/layout/Layout";

const SignUp = () => {
    
    const context = useContext(Context);
    const navigate = useNavigate();

    const [userSignUp, setUserSignUp] = useState({
        name : "",
        email : "",
        password : "",
        role : "user"
    })

    const userSignUpFunction = async () => {

        if (userSignUp.name === "" || userSignUp.email === "" || userSignUp.password === ""){
            toast.error (" All Fields are required");
            return;
        }

        try {

            const users = await createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password);

            const user = {
                name: userSignUp.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignUp.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })
            }

            const userReference = collection(fireDB, "user");
            await addDoc(userReference, user);

            setUserSignUp({
                name: "",
                email: "",
                password: "",
                role : "user"
            });

            toast.success("Signup Successfully");
            navigate('/login');
        
        } 
        catch (error) {

            if (error.code === "auth/email-already-in-use") {
                toast.error("Email already in use.");
            } 

            else if (error.code === "auth/weak-password") {
                toast.error("Weak password. It should be at least 6 characters.");
            } 
            
            else {
                console.error("Error during signup:", error);
                toast.error("Signup failed. Please try again.");
            }
            
        }

    }
 
    return (

      <Layout>
        <section className="bg-gray-50 dark:bg-gray-900">

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your account
                        </h1>

                        <form className="space-y-4 md:space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            userSignUpFunction();
                        }}>
                            <div>

                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={userSignUp.name}
                                    onChange={(e) => setUserSignUp({...userSignUp, name: e.target.value})}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John Doe"
                                    required
                                />

                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={userSignUp.email}
                                    onChange={(e) => setUserSignUp({...userSignUp, email: e.target.value})}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={userSignUp.password}
                                    onChange={(e) => setUserSignUp({...userSignUp, password: e.target.value})}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="*******"
                                    required
                                />
                            </div>

                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-light-blue-200">Sign up</button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                            </p>

                        </form>
                    </div>
                </div>

            </div>

        </section>
        </Layout>
    );
};

export default SignUp;
