export interface Books {
  id: string | null;
  title: string;
  description: string;
  price: number;
  publicationDate?: Date;
  author: {
    id: string;
    fullName: string;
  };
}
