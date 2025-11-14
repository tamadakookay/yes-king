
import React from 'react';

const NewsletterSignup: React.FC = () => {
    return (
        <div className="mt-20 bg-primary-green text-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold font-serif mb-2">Stay Connected</h2>
            <p className="text-accent-sand max-w-2xl mx-auto mb-6">
                SUUUUBBSCRIBEEE TO WIN IPHONEE 7 PRO MAX 1 TERABYTE WITH MIX AND MATCH SA MCDO
            </p>
            <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-md text-neutral-darkest placeholder-neutral-medium focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    required
                />
                <button
                    type="submit"
                    className="bg-primary-gold hover:bg-yellow-600 text-secondary-dark-brown font-bold px-6 py-3 rounded-md transition-colors duration-300 whitespace-nowrap"
                >
                    Subscribe Now
                </button>
            </form>
        </div>
    );
};

export default NewsletterSignup;