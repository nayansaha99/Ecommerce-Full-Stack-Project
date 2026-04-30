import React from 'react';

const Footer = () => {
    return (
    <div className="w-full mt-5">
        {/* Footer Container */}
        <div className="bg-slate-900 text-slate-400 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Grid: 2 columns on mobile, 4 columns on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                    {/* Column 1: BazaarBD */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">BazaarBD</h3>
                        <ul className="flex flex-col space-y-3">
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">About Us</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Careers</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Press</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Blog</a></li>
                        </ul>
                    </div>
                    {/* Column 2: Help */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Help</h3>
                        <ul className="flex flex-col space-y-3">
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Track Order</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Returns</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">FAQs</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Column 3: Categories */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Categories</h3>
                        <ul className="flex flex-col space-y-3">
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Fashion</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Electronics</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Home & Living</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Beauty</a></li>
                        </ul>
                    </div>
                    {/* Column 4: Payment */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Payment</h3>
                        <ul className="flex flex-col space-y-3">
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Bkash</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Nagad</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">VISA / Mastercard</a></li>
                            <li><a href="#" className="text-sm hover:text-white transition-all duration-200">Cash on Delivery</a></li>
                        </ul>
                    </div>
                </div>
                {/* Bottom  Section */}
                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-xs text-slate-500">
                        &copy; 2026 BazaarBD. All rights reserved.
                        <span className="block mt-1">Made with ❤️ in Bangladesh.</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;