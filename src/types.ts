export type Room = {
  _id: string;
  images: string[];
  pricePerNight: number;
  hotel: Hotel;
  roomType: string;
  amenities: string[];
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Hotel = {
  _id: string;
  name: string;
  address: string;
  contact: string;
  owner: User;
  city: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type User = {
  _id: string;
  username: string;
  email: string;
  image: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  recentSearchedCities: string[];
};

export type ExclusiveOffer = {
  _id: number;
  title: string;
  description: string;
  priceOff: number;
  expiryDate: string;
  image: string;
};

export type Testimonial = {
  id: number;
  name: string;
  address: string;
  image: string;
  rating: number;
  review: string;
};
