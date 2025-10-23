
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "coming-soon",
    title: "Coming Soon...",
    summary: "We're working on exciting new blog content. Stay tuned for updates!",
    content: "Coming Soon...",
    date: new Date().toISOString().split('T')[0],
  }
];
