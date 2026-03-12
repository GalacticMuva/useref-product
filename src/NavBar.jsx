import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="p-4 bg-white shadow-sm flex gap-6 justify-center border-b">
            <div className="flex gap-6">
                <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium">Home</Link>
                <Link to="/product" className="text-slate-600 hover:text-blue-600 font-bold">Product Card</Link>
                <Link to="/login" className="text-slate-600 hover:text-blue-600 font-medium underline decoration-blue-500 underline-offset-4">Login</Link>
                <Link to="/grid" className="text-slate-600 hover:text-blue-600 font-medium underline decoration-blue-500 underline-offset-4">Education</Link>

            </div>



        </nav>
    );

};

export default NavBar