export interface Post{
  id: string;
  title: string;
  content: string;
  contentPreview: string;
  author: string;
  createDate: Date;
  totalLikes: number;
  imageUrl: string;
  postUrl: string;
}
