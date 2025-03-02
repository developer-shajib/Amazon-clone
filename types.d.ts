type ICarousel = {
  title: string;
  buttonCaption: string;
  image: string;
  url: string;
};

interface IProductInput {
  name: string;
  slug: string;
  category: string;
  images: string[];
  brand: string;
  description: string;
  price: number;
  listPrice: number;
  countInStock: number;
  tags?: string[];
  colors?: string[];
  sizes?: string[];
  avgRating?: number;
  numReviews?: number;
  ratingDistribution?: { rating: number; count: number }[];
  numSales?: number;
  isPublished?: boolean;
  reviews?: string[];
}

type ClientSetting = ISettingInput & {
  currency: string;
};

type SiteCurrency = z.infer<typeof SiteCurrencySchema>;
