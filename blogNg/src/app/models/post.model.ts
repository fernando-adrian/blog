import { Actions } from "./actions.model";

export interface Post{
  id: string;
  title: string;
  content: string;
  contentPreview: string;
  author: string;
  createDate: Date;
  totalLikes: number;
  actions?: Actions[];
}
