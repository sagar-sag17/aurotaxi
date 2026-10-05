export type Review = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string; // ISO date
  avatarInitial?: string;
};

export type ReviewFormInput = {
  name: string;
  email?: string;
  rating: number;
  text: string;
};

export type ContactFormInput = {
  name: string;
  phone: string;
  email?: string;
  pickup: string;
  destination: string;
  date?: string;
  time?: string;
  message?: string;
};
