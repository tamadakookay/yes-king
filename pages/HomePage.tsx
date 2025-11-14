
import React from 'react';
import { MOCK_POSTS } from '../constants';
import FeaturedPost from '../components/FeaturedPost';
import BlogPostCard from '../components/BlogPostCard';
import NewsletterSignup from '../components/NewsletterSignup';

const HomePage: React.FC = () => {
    const featuredPost = MOCK_POSTS[0];
    const otherPosts = MOCK_POSTS.slice(1);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <FeaturedPost post={featuredPost} />

            <div className="mt-16">
                 <h2 className="text-3xl font-bold font-serif text-neutral-darkest mb-8 text-center">Latest Articles</h2>
                 <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {otherPosts.map(post => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
            
            <NewsletterSignup />
        </div>
    );
};

export default HomePage;
