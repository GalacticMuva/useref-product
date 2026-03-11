import { useEffect, useRef } from 'react'

const LoginPage = () => {

    //ref for username and password
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    //Focusing on input field
    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logged in with ${emailRef.current.value}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6">
                    Welcome Back
                </h2>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Email Address</label>
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="name@company.com"
                            className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Password</label>
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="••••••••"
                            className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md">
                        Sign In
                    </button>
                </form>
            </div>
        </div>

    );
};

export default LoginPage