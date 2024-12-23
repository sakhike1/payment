import React from "react";
import {Heart, Github, Twitter} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Payflow</h3>
                        <p className="text-sm text-gray-600">Simplifying payments for businesses worldwide</p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/payflow" className="text-gray-600 hover:text-gray-900">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/payflow" className="text-gray-600 hover:text-gray-900">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/features" className="text-sm text-gray-600 hover:text-gray-900">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="/integrations" className="text-sm text-gray-600 hover:text-gray-900">
                                    Integrations
                                </a>
                            </li>
                            <li>
                                <a href="/docs" className="text-sm text-gray-600 hover:text-gray-900">
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/security" className="text-sm text-gray-600 hover:text-gray-900">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="/compliance" className="text-sm text-gray-600 hover:text-gray-900">
                                    Compliance
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-600">© {currentYear} Payflow. All rights reserved.</p>
                        <p className="text-sm text-gray-600 flex items-center">
                            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Payflow Team
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
