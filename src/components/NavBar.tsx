import React, {useState} from "react";
import {Menu, X, ChevronDown} from "lucide-react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

    return (
        <nav className="bg-white border w-full">
            <div className="w-full px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-purple-700">PayFlows</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-600 hover:text-purple-700">
                            Home
                        </a>

                        {/* Desktop Dropdown */}

                        <div className="relative group">
                            <button
                                className="flex items-center text-gray-600 hover:text-purple-700"
                                onClick={toggleProducts}
                            >
                                Products
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute top-full left-0 hidden group-hover:block bg-gray-100 mt-4   py-2 w-48">
                                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-purple-50 text-xs">
                                    Payment Processing
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-purple-50 text-xs">
                                    Invoice Management
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-purple-50 text-xs">
                                    Recurring Billing
                                </a>
                            </div>
                        </div>

                        <a href="#" className="text-gray-600 hover:text-purple-700">
                            Pricing
                        </a>
                        <a href="#" className="text-gray-600 hover:text-purple-700">
                            About
                        </a>
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black hover:text-purple-700">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4">
                        <div className="flex flex-col space-y-4 pt-4 border-t">
                            <a href="#" className="text-gray-600 hover:text-purple-700">
                                Home
                            </a>

                            {/* Mobile Dropdown */}
                            <div>
                                <button
                                    onClick={toggleProducts}
                                    className="flex items-center  text-gray-600 hover:text-purple-700"
                                >
                                    Products
                                    <ChevronDown
                                        className={`ml-1 h-4 w-4 transform text-black transition-transform ${
                                            isProductsOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {isProductsOpen && (
                                    <div className="ml-2 mt-2 bg-gray-100 space-y-2">
                                        <a href="#" className="block text-gray-600 hover:text-purple-700 text-xs">
                                            Payment Processing
                                        </a>
                                        <a href="#" className="block text-gray-600 hover:text-purple-700 text-xs">
                                            Invoice Management
                                        </a>
                                        <a href="#" className="block text-gray-600 hover:text-purple-700 text-xs">
                                            Recurring Billing
                                        </a>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="text-gray-600 hover:text-purple-700">
                                Pricing
                            </a>
                            <a href="#" className="text-gray-600 hover:text-purple-700">
                                About
                            </a>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors w-full">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
