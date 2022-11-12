import React from 'react';
import { Link } from 'react-router-dom';

const Promotional = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img alt="Party" src="https://img.freepik.com/free-photo/person-taking-driver-s-license-exam_23-2149891367.jpg?w=1380&t=st=1668244125~exp=1668244725~hmac=bd5382c703f3448f3ef392f295b3713ec02f5cbe58b9e81264eb4d5752b0d97f" className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Start Your Test</h2>
                        <p className="mt-4 text-gray-600">
                            Test Your Driving Skills and get your license.
                            with our expert instructors. Get Your Driving License <br />
                            Our Instructors are highly qualified and experienced.
                        </p>
                        <Link href="#" className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                            <span className="text-sm font-medium"> Get Started </span>
                            <svg className="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promotional;