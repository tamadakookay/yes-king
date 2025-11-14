import React, { useState } from 'react';
import { Post } from '../types';

interface FeaturedPostProps {
    post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const story = post.excerpt;
    const characterLimit = 300; // Show first 300 characters in preview

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const isLongStory = story.length > characterLimit;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:grid lg:grid-cols-5 lg:gap-8 items-center">
            <div className="lg:order-2 lg:col-span-2">
                <img src={post.imageUrl} alt={post.title} className="w-full h-64 lg:h-full object-cover"/>
            </div>
            <div className="p-8 lg:p-12 lg:order-1 lg:col-span-3">
                <h1 className="text-3xl md:text-4xl font-bold font-serif text-neutral-darkest mb-3">{post.title}</h1>
                <div className="text-neutral-soft text-lg mb-6 whitespace-pre-line">
                    <p>
                        {isLongStory && !isExpanded ? `${story.substring(0, characterLimit)}...` : story}
                    </p>
                </div>
                
                {isLongStory && (
                    <button 
                        onClick={toggleReadMore} 
                        className="text-primary-gold font-semibold hover:underline focus:outline-none transition-colors duration-300"
                        aria-expanded={isExpanded}
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}

                <div className="flex items-center mt-4">
                    <div>
                        <p className="text-sm text-neutral-medium">{post.readingTime} min read</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPost;
