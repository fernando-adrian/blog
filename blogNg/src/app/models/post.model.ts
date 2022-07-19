import { Actions } from "./actions.model";

export interface Post{
  title: string;
  subtitle: string;
  imageUrl: string;
  content: string;
  actions?: Actions[];
}
