const popularityGrade = [1, 2, 3, 4, 5] as const;
const enum PerfumeСategory {
  EDP = 'Eau de Parfum',
  EDT = 'Eau de Toilette',
  EDC = 'Eau de Cologne',
  EP = 'Extrait de Parfum',
}

type Popularity = typeof popularityGrade[number];
type ItemInfo = {
  id: number;
  brand: string;
  name: string;
  category: PerfumeСategory;
  volume: number | string;
  stock: number;
  price: number;
  popularity: Popularity;
  description: string;
  thumbnail: string;
  images: string[];
};

type Filter = {
  price: {
    min?: number;
    max?: number;
  };
};

interface Page {
  draw(): void;
}

interface Validatable {
  value: string;
  required: true;
  minLengthCharacters?: number;
  countWord?: number;
  minLength?: number;
  regexp?: RegExp;
  maxValueMonth?: number;
  minValueYear?: number;
}

export { PerfumeСategory, ItemInfo, Filter, Page, Validatable };
