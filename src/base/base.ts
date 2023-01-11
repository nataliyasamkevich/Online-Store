const popularityGrade = [1, 2, 3, 4, 5] as const;
enum PerfumeСategory {
  EDP = 'Eau de Parfum (EDP)',
  EDT = 'Eau de Toilette (EDT)',
  EDC = 'Eau de Cologne (EDC)',
  EP = 'Extrait de Parfum (EP)',
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

type SortOrder =
  | 'price-high-to-low'
  | 'price-low-to-high'
  | 'popularity-high-to-low'
  | 'popularity-low-to-high';

type Filter = {
  categories?: string[];
  brands?: string[];
  stock?: [number, number];
  price?: [number, number];
  search?: string;
  order?: string;
};

type FilterFields = keyof Filter;

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

enum URLParameters {
  categories = 'categories',
  brands = 'brands',
  priceMin = 'pricemin',
  priceMax = 'pricemax',
  stockMin = 'stockmin',
  stockMax = 'stockmax',
  search = 'search',
  sort = 'sort',
}

export {
  PerfumeСategory,
  ItemInfo,
  SortOrder as sortOrder,
  Filter,
  FilterFields,
  Page,
  Validatable,
  URLParameters,
};
