import React from 'react';

const PGrid = () => {

    const products = [
        {
            id: 1,
            name: 'Anthracite 20 Sleeping Bag',
            price: '104.93',
            desc: "Lightweight mummy-style sleeping bag",
            image: "https://www.rei.com/media/af199522-d3a8-472e-99ee-e8a65a53cfcf.jpg?size=784x588"
        },

        {
            id: 2,
            name: 'Black Diamond Harness',
            price: '64.99',
            desc: 'Reinforced loops for rock climbing and mountaineering.',
            image: 'https://www.rei.com/media/e30cfd32-7d28-4e7d-bc86-87d1f3fef9b6.jpg?size=784x588'
        },
        {
            id: 3,
            name: 'Hikelite™ 32 Hiking Backpack',
            price: '175.00',
            desc: 'i35L Daypack with Rain Cover',
            image: 'https://www.osprey.com/media/catalog/product/cache/d30d9849f326102f12e0e92b779dd408/H/i/Hikelite32_S26_Side_CascadeBlue_Hi-res.jpg'
        },
        {
            id: 4,
            name: 'Compact Camp Stove',
            price: '49.99',
            desc: 'Boils water in under 3 minutes',
            image: 'https://www.rei.com/media/e9858a2a-b89b-4844-bb77-de1d87c9ad87.jpg?size=784x588'
        },
        {
            id: 5,
            name: 'Mid-Rise Hiking Boots',
            price: '165.00',
            desc: 'Waterproof leather & vibram sole',
            image: 'https://images.ctfassets.net/hnk2vsx53n6l/15GDZCORiIFSR4ohaOYCy8/3e98f3c7e2d5309c807e2cbe65ad7458/580e72f779e65106f8c30f8cc9de2926d7d44256.png?w=800&h=800&fm=avif&f=center&fit=fill&q=80'
        }
    ];


    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Ace's Gear Spot</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {products.map(product => (
                    <div key={product.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">

                        {/* Product Cards for Grid*/}
                        <div className="overflow-hidden">
                        <img src={product.image}
                            alt={product.name}
                            className="w-full h-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-80" /> </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-2xl font-bold text-indigo-800 mb-2">{product.name}</h2>
                            <p className="text-xl font-black text-purple-600 mb-4">{product.desc}</p>
                            <span className="text-lg font-bold text-amber-600">${product.price}</span>

                            <button className="w-full bg-yellow-600 text-black py-2 mt-auto rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default PGrid