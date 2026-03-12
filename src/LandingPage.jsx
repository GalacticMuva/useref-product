import { useEffect, useRef } from 'react'
import './App.css'


const LandingPage = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const productRef = useRef();

    useEffect(() => {
        if (nameRef.current) {
            nameRef.current.focus();
        }
    }, []);

    const handleCapture = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const product = productRef.current.value;

        if (!name || !email || !product) {
            alert("Please fill in all fields.");
            return;
        }
        alert(`Success! ${name}, ${email}, ${product}`);
    };

    return (

        <div className="min-h-screen bg-gray-50">
            {/* STEP 4: HERO SECTION */}
            <main className="max-w-5xl mx-auto pt-24 px-6 text-center">
                <h1 className="text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Welcome to Our Store
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Experience the next generation of shopping. From premium electronics 
                    to everyday essentials, we bring the best products straight to your door.
                </p>
                
                <div className="mt-10 flex gap-4 justify-center">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                        Shop Collection
                    </button>
                    <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">
                        Learn More
                    </button>
                </div>
            </main>


        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Product Interest Form</h1>
                <p className="text-gray-600 mb-6">Sign up to learn more about our models.</p>

                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Full Name</label>
                        <input
                            ref={nameRef}
                            type="text"
                            placeholder="John Doe"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Email Address</label>
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="john@example.com"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Product Model</label>
                        <select
                            ref={productRef}
                            className="w-full border border-gray-300 p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Standard">Standard</option>
                            <option value="Pro">Pro</option>
                            <option value="Ultra">Ultra</option>
                        </select>
                    </div>

                    <button
                        onClick={handleCapture}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                    >
                        Submit Interest
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}


export default LandingPage