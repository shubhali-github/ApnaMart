import { MobParts } from 'src/app/models/mob-parts';

// uppercase : global/ CONST
// const to original
// PE : TP = 15000RS,  Myntra : TP = 12000Rs

export const MOBPARTS: MobParts[] = [
  {
    id: 1001,
    name: 'screen 5.5',
    description: '5.5 Screen for Moto g',
    inStock: 1500,
    prodColor: 'red',
    canPurch: true,
    clsVar: true,
    country: 'Australia',
    price: 1200,
    prodImg: 'mob3.png',
    quantity: 0,
    // size:['m',]
  },
  {
    id: 1002,
    name: 'SCREEN 5',
    description: '5 Screen for Samsung',
    inStock: 8,
    prodColor: 'green',
    canPurch: false,
    clsVar: true,
    country: 'India',
    price: 1200,
    prodImg: 'mob2.png',
    quantity: 0,
  },
  {
    id: 1003,
    name: 'Key Panel',
    description: 'Key panel for Nokia',
    inStock: 0,
    prodColor: 'blue',
    canPurch: true,
    clsVar: true,
    country: 'Germany',
    price: 1200,
    prodImg: 'mob1.png',
    quantity: 0,
  },
];
