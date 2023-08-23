export interface typeCategory {
  id: number;
  title: string;
  desc: string;
  image: string;
}

interface Items {
  [category: string]: typeCategory[];
}
export type CategoryItem = Items;
