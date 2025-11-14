import React from 'react';
import { IconInstagram, IconFacebook, IconTiktok } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-darkest text-accent-sand mt-16">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <div className="text-center sm:text-left mb-4 sm:mb-0">
                        <p className="text-xl font-serif font-bold text-primary-gold">Verdant Words</p>
                        <p className="text-sm text-neutral-medium mt-1">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="https://www.instagram.com/feurmoris/?igsh" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-soft hover:text-primary-gold transition-colors duration-300">
                            <IconInstagram className="h-6 w-6" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-soft hover:text-primary-gold transition-colors duration-300">
                           <IconFacebook className="h-6 w-6" />
                        </a>
                        <a href="https://www.tiktok.com/@feurmoris?is_from_webapp=1&" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="text-neutral-soft hover:text-primary-gold transition-colors duration-300">
                           <IconTiktok className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;