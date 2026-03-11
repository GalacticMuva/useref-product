import { Link } from "react-router-dom";

 const NavBar = () => {
    return (
        <nav className="bg-white border-b border-slate-200">
            <div className="font-bold text-blue-600 text-xl tracking-tight">Product Place</div>
            <div className="flex gap-6">
                <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium">Home</Link>

                {/* Navbar link */}
                <Link to="/login" className="text-slate-600 hover:text-blue-600 font-medium underline decoration-blue-500 underline-offset-4">
                    Login
                </Link>
            </div>



        </nav>
    );

};

export default NavBar