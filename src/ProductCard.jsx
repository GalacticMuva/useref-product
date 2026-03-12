
const ProductCard = () => {
    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">

            <div className="max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border-slate-200">

                <img 
                    src="/endeavor.png"
                    alt="Product Image" 
                    className="w-full h-48 object-cover mb-4" />

                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">
                       Endeavor by Butora
                    </h2>
                    <p className="text-gray-600 mb-4">
                        If you need a shoe that offers performance with comfort regardless of the terrain, this is the shoe for you. 
                    </p>
                    <p className="text-green-600 font-semibold text-xl mb-4">
                        Price $119.95
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );

};

export default ProductCard