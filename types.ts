
export interface Post {
  id: number;
  title: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  readingTime: number; // in minutes
}
