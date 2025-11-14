
import React, { useState } from 'react';
import { IconMenu, IconX, IconInstagram, IconFacebook, IconTiktok } from '../constants';

const NavLinks = () => (
    <>
        <a href="#" className="text-accent-sand hover:text-primary-gold transition-colors duration-300">Home</a>
    </>
);

const SocialLinks = ({ className = 'h-5 w-5' }: { className?: string}) => (
    <>
        <a href="https://www.instagram.com/feurmoris/?igsh" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-accent-sand hover:text-primary-gold transition-colors duration-300">
            <IconInstagram className={className} />
        </a>
        <a href="https://www.facebook.com/profile.php?id" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-accent-sand hover:text-primary-gold transition-colors duration-300">
           <IconFacebook className={className} />
        </a>
        <a href="https://www.tiktok.com/@feurmoris?is_from_webapp=1&" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="text-accent-sand hover:text-primary-gold transition-colors duration-300">
           <IconTiktok className={className} />
        </a>
    </>
);


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-neutral-darkest shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-serif font-bold text-primary-gold">
                        Le Website de Moris
                    </div>
                    
                    <div className="hidden md:flex items-center">
                        <nav className="flex items-center space-x-8">
                            <NavLinks />
                        </nav>
                        <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-neutral-dark">
                            <SocialLinks className="h-5 w-5" />
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-accent-sand focus:outline-none">
                            {isMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <nav className="flex flex-col items-center space-y-4">
                            <NavLinks />
                        </nav>
                        <div className="flex justify-center items-center space-x-6 mt-6 pt-4 border-t border-neutral-dark">
                             <SocialLinks className="h-6 w-6" />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;