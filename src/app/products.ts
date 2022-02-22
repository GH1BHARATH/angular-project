export interface Product {
  avalibility_QUALITY: number;
  expiry_DATE: String;
  price: number;
  id: number;
  name: String;
  description: String;
}

export const products = [
  {
    avalibility_QUALITY: 100,
    expiry_DATE: '2022-09-08',
    price: 50,
    id: 1,
    name: 'Britannia',
    description: 'A Moments of tasty Surprise',
  },
  {
    avalibility_QUALITY: 100,
    expiry_DATE: '2022-10-08',
    price: 500,
    id:  2,
    name: 'Clinic Plus',
    description: 'The shampoo of the future',
  },
  {
    avalibility_QUALITY: 100,
    expiry_DATE: '2022-10-08',
    price: 701,
    id: 3,
    name: 'Amul',
    description: 'The joy of Getting Best Bite',
  },
  {
    avalibility_QUALITY: 100,
    expiry_DATE: '2022-10-08',
    price: 561,
    id: 4,
    name: 'Aavin',
    description: 'Your Favourite Tea Partner',
  },
  {
    avalibility_QUALITY: 100,
    expiry_DATE: '2022-10-08',
    price: 792,
    id: 5,
    name: 'Colgate',
    description: ' Moments of tasty Surprise',
  },
];
