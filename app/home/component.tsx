'use client';
import { ArrowRight } from 'lucide-react';
const Homecomponent = () => {
    return (<button
        onClick={() => {/* Navigate to chat page */ }}
        className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 flex items-center justify-center mx-auto"
    >
        Start Chatting <ArrowRight className="ml-2" />
    </button>)
}
export default Homecomponent;