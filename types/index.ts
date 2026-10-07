export type Destination = {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  image: string;
};

export type TravelPackage = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  image: string;
  description: string;
};