import { ImageSourcePropType } from "react-native";

type Restaurant = {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  image: ImageSourcePropType;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
};

const traditionalSpanishRestaurants: Restaurant[] = [
  {
    name: 'Los Montes de Galicia',
    description:
      'Renowned for its Galician-inspired dishes, this restaurant offers a variety of seafood and traditional Spanish fare.',
    rating: 4.5,
    reviews: 11882,
    image: require('../images/TraditionalSpanishCuisine.png'),
    address: 'Calle de Azcona, 46, Salamanca, 28028 Madrid, Spain',
    coordinates: {latitude: 40.4464, longitude: -3.6722},
    openingHours: ['Daily from 1:30 PM to 4:00 PM', '7:30 PM to 11:30 PM'],
  },
  {
    name: 'Casa Carola',
    description:
      'A family-friendly spot known for its Mediterranean and Spanish dishes, offering a cozy atmosphere.',
    rating: 4.5,
    reviews: 848,
    image: require('../images/CasaCarola.png'),
    address: 'Calle de Vallehermoso, 79, Moncloa-Aravaca, 28015 Madrid, Spain',
    coordinates: {latitude: 40.4337, longitude: -3.7167},
    openingHours: [
      'Monday to Friday from 1:00 PM to 4:00 PM',
      '8:00 PM to 11:00 PM',
      'Saturday and Sunday from 1:00 PM to 4:00 PM',
      '8:00 PM to 11:30 PM',
    ],
  },
  {
    name: 'Taberna El Sur',
    description:
      'A popular tavern offering a variety of tapas and traditional Spanish dishes in a lively setting.',
    rating: 4.5,
    reviews: 8760,
    image: require('../images/TabernaElSur.png'),
    address: 'Calle de la Torrecilla del Leal, 12, Centro, 28012 Madrid, Spain',
    coordinates: {latitude: 40.4114, longitude: -3.7049},
    openingHours: [
      'Monday to Sunday from 1:00 PM to 4:00 PM',
      '8:00 PM to 11:00 PM',
    ],
  },
  {
    name: 'Bodega de los Secretos',
    description:
      'Set in a historic cellar, this restaurant offers traditional Spanish cuisine with a romantic ambiance.',
    rating: 4.5,
    reviews: 1200,
    image: require('../images/BodegaDelosSecretos.png'),
    address: 'Calle de San Blas, 4, Centro, 28004 Madrid, Spain',
    coordinates: {latitude: 40.4211, longitude: -3.7033},
    openingHours: [
      'Monday to Sunday from 1:00 PM to 4:00 PM',
      '8:00 PM to 11:00 PM',
    ],
  },
  {
    name: 'Casa Revuelta',
    description:
      'Famous for its fried fish and traditional tapas, this bistro offers a unique atmosphere just two minutes from Plaza Mayor.',
    rating: 4.4,
    reviews: 5095,
    image: require('../images/CasaRevuelta.png'),
    address: 'Calle de Latoneros, 3, Centro, 28005 Madrid, Spain',
    coordinates: {latitude: 40.4131, longitude: -3.7074},
    openingHours: [
      'Monday to Sunday from 12:00 PM to 4:00 PM',
      '7:00 PM to 11:00 PM',
    ],
  },
];

export default traditionalSpanishRestaurants;
