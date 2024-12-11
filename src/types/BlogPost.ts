import { Document} from '@contentful/rich-text-types'

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  text: Document;
  imageUrl: string;
  date: Date;
};