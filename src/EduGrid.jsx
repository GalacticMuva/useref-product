import React from 'react';

const EducationalGrid = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-10">Tailwind Learning Grid</h1>

            {/* GRID CONTAINER */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4">


                {/*Typography*/}
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
                    <h2 className="text-2xl font-black italic mb-2 text-slate-900">Typography</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">Control font size, weight, and tracking.</p>
                </div>

                {/*Colors*/}
                <div className="bg-indigo-600 p-6 rounded-xl shadow-xl shadow-indigo-200 border-t-4 border-indigo-400">
                    <h2 className="font-bold text-xl mb-2 text-white text-shadow">Colors & Backgrounds</h2>
                    <p className="text-indigo-100 text-sm">Applies color classes to elements.</p>
                    <div className="flex gap-2 justify-center p-2 bg-slate-50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white shadow-sm"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white shadow-sm"></div>
                        <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
                        <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-white shadow-sm"></div>
                    </div>

                </div>

                {/*Spacing*/}
                <div className="bg-white p-10 rounded-xl shadow-md border-t-4 border-green-500">
                    <h2 className="font-bold text-xl mb-2 text-slate-800">Spacing & Sizing</h2>
                    <p className="text-gray-600 text-sm mb-4">Controls inner and outer spacing by Using p- (padding) to create breathing room</p>
                    <div className="w-full h-2 bg-green-200 rounded-full">
                        <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                    </div>
                </div>

                {/*Layout*/}
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
                    <h2 className="font-bold text-xl mb-2">Layout</h2>
                    <p className="text-gray-600 text-sm">Controls how elements are arranged on the page.</p>
                    <div className="flex justify-around items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="w-4 h-4 rounded-full bg-red-400"></div>
                        <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                        <div className="w-4 h-4 rounded-full bg-green-400"></div>
                    </div>
                </div>

                {/*Effects*/}
                <div className="bg-white p-6 rounded-xl shadow-2xl border-l-8 border-purple-500 transform hover:scale-105 transition-transform duration-300">
                    <h2 className="font-bold text-xl mb-2 text-slate-800">Effects</h2>
                    <p className="text-gray-600 text-sm">Defines the border, shadow, and other visual effects.</p>
                </div>

            </div>
        </div>
    );
};

export default EducationalGrid;