export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: Author;
  category: Category;
  tags: Tag[];
  publishedAt: string;
  featured?: boolean;
  trending?: boolean;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  content: string;
  publishedAt: string;
}