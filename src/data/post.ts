export type Post = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};

export type PostType = {
  post: {
    id: number;
    title: string;
    thumbnailUrl: string;
    createdAt: string;
    categories: string[];
    content: string;
  };
};

export type PostsType = {
  posts: Array<{
    id: number;
    title: string;
    thumbnailUrl: string;
    createdAt: string;
    categories: string[];
    content: string;
  }>;
};
