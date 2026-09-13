import React from 'react';
import Logo from "../assets/logo-text.png";

export const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-gray-100 bg-white pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                    <div className="md:col-span-2 space-y-4">
                        <img src={Logo} alt="DevStack Logo" className="h-8 md:h-10 object-contain" />

                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex items-center gap-4 text-xs font-semibold text-gray-700 pt-2">
                            <a href="#" className="link link-hover">GitHub</a>
                            <a href="#" className="link link-hover">Twitter</a>
                            <a href="#" className="link link-hover">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Product</h4>
                        <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
                            <li><a href="#" className="link link-hover">Home</a></li>
                            <li><a href="#" className="link link-hover">Technologies</a></li>
                            <li><a href="#" className="link link-hover">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
                            <li><a href="#" className="link link-hover">About</a></li>
                            <li><a href="#" className="link link-hover">Contact</a></li>
                            <li><a href="#" className="link link-hover">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Legal</h4>
                        <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
                            <li><a href="#" className="link link-hover">Privacy Policy</a></li>
                            <li><a href="#" className="link link-hover">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};