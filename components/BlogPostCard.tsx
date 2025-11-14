
import React, { useState } from 'react';
import { Post } from '../types';

interface BlogPostCardProps {
    post: Post;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const excerpt = post.excerpt;
    const characterLimit = 150; // Truncate after 150 characters

    const toggleReadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent any parent link/event from firing
        setIsExpanded(!isExpanded);
    };

    const isLongExcerpt = excerpt.length > characterLimit;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative">
                <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-colors duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-serif text-neutral-darkest mb-2 group-hover:text-primary-green transition-colors duration-300">{post.title}</h3>
                
                <div className="text-neutral-soft text-base mb-4 flex-grow">
                    <p className="whitespace-pre-line">
                        {isLongExcerpt && !isExpanded ? `${excerpt.substring(0, characterLimit)}...` : excerpt}
                    </p>
                    {isLongExcerpt && (
                        <button 
                            onClick={toggleReadMore} 
                            className="text-primary-gold font-semibold hover:underline focus:outline-none transition-colors duration-300 mt-2"
                            aria-expanded={isExpanded}
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-xs text-neutral-medium">{post.readingTime} min read</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPostCard;