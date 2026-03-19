export interface Game {
  _id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  gameUrl: string;
  tags: Tag[];
  isTop: boolean;
  isFeatured: boolean;
  playCount: number;
  createdAt: string;
}

export interface Tag {
  _id: string;
  name: string;
  slug: string;
}

export interface Page {
  _id: string;
  title: string;
  slug: string;
  content: string;
  heroImage?: string;
  metaTitle?: string;
  metaDescription?: string;
}
