import React from 'react';
import { User } from 'lucide-react';
import Homecomponent from './component.tsx';

const PictoraLandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
            <header className="bg-purple-600 text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Pictora Chatbot</h1>
                    <nav>
                        <a href="#about" className="mx-2 hover:underline">About</a>
                        <a href="#creator" className="mx-2 hover:underline">Creator</a>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-purple-800 mb-4">Welcome to Pictora Chatbot</h2>
                    <p className="text-xl text-gray-600 mb-8">Your AI-powered image generation companion</p>
                    <Homecomponent />
                </section>

                <section id="about" className="mb-16">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">About Pictora</h3>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">
                            Pictora is an innovative AI-powered chatbot that brings your imagination to life through image generation. Simply describe what you want to see, and Pictora will create stunning visuals based on your input.
                        </p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Instant image generation from text descriptions</li>
                            <li>High-quality, diverse visual outputs</li>
                            <li>Intuitive chat interface for seamless interaction</li>
                            <li>Continuously learning and improving AI model</li>
                        </ul>
                    </div>
                </section>

                <section id="creator">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Meet the Creator</h3>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                        <div className="w-24 h-24 bg-gray-300 rounded-full mr-6 flex items-center justify-center">
                            <User size={48} className="text-gray-600" />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">AI Enthusiast</h4>
                            <p className="text-gray-600">
                                A passionate developer and AI researcher dedicated to pushing the boundaries of whats possible with artificial intelligence and image generation.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-purple-800 text-white py-4 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Pictora Chatbot. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default PictoraLandingPage;