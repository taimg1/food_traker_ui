import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton: React.FC = () => {
    return (
        <Link
            to="/login"
            className="backdrop-blur-sm bg-white/80 text-emerald-700 border-2 border-emerald-500 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all shadow-md hover:shadow-emerald-100/50 text-lg block"
        >
            <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Увійти
            </span>
        </Link>
    );
};

export default LoginButton;
