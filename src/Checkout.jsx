import React, { useState } from 'react';

const Checkout = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

            <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-1xl shadow-md">

                {isSubmitted && (
                    <div className="mb-6 flex items-center p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg animate-in fade-in slide-in-from-top-4 duration-300">
                        <span className="text-xl mr-3">✅</span>
                        <div>
                            <p className="text-sm font-bold text-emerald-800">Order Confirmed!</p>
                            <p className="text-xs text-emerald-700">Check your email for your receipt.</p>
                        </div>
                    </div>
                )}
                <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    
                    {/* Cardholder Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        />
                    </div>

                    {/* Card Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                            />
                            <div className="absolute right-3 top-3.5 text-gray-400">
                                💳
                            </div>
                        </div>
                    </div>

                    {/*Expiration Date */}
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                            />
                        </div>
                    </div>


                    {/* CVV */}
                    <div className="w-1/3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                            type="password"
                            placeholder="***"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        />
                    </div>

                    {/* Submit*/}
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-[0.98] mt-4"
                    >
                        Pay Now
                    </button>
                </form>
                {/* Secure */}
                <p className="text-center text-gray-400 text-xs mt-6">
                    🔒 Encrypted and Secure Payments
                </p>
            </div>

        </div>

    );
};


export default Checkout