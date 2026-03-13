import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="w-full bg-slate-900 text-white p-4 shadow-md">
            {/* Alignment */}
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">E-Store</div>
                <Link to="/" className="hover:text-blue-400 transition-colors font-medium">Home</Link>
                <Link to="/product" className="text-slate-600 hover:text-blue-600 font-bold">Product Card</Link>
                <Link to="/login" className="text-slate-600 hover:text-blue-600 font-medium underline decoration-blue-500 underline-offset-4">Login</Link>
                <Link to="/grid" className="text-slate-600 hover:text-blue-600 font-medium underline decoration-blue-500 underline-offset-4">Education</Link>
                <Link to="/products" className="hover:text-pink-400 transition-colors font-medium">Products</Link>
                <Link to="/checkout" className="hover:text-blue-400 transition-colors font-medium">Checkout</Link>
            </div>



        </nav>
    );

};

export default NavBar