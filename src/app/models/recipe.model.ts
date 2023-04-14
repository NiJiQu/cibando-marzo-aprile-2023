export interface Recipe {
  _id: number;
  title: string;
  description: string;
  image: string;
  difficulty: number;
  date: string;
  createdAt?: Date;
  published: boolean;
}
