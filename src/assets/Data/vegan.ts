import {ImageSourcePropType} from 'react-native';

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

const vegetarianVeganRestaurants: Restaurant[] = [
  {
    name: 'El Invernadero',
    description:
      'A Michelin-starred restaurant offering a plant-based tasting menu inspired by seasonal vegetables.',
    rating: 4.5,
    reviews: 200,
    image: require('../images/vegan_one_photo.png'),
    address: 'Calle de Ponzano, 85, Chamberí, 28003 Madrid, Spain',
    coordinates: {latitude: 40.4379, longitude: -3.7119},
    openingHours: [
      'Tuesday to Saturday from 1:30 PM to 3:30 PM and 8:00 PM to 10:00 PM',
    ],
  },
  {
    name: 'Mudrá',
    description:
      'Overseen by American chef Matthew Kenney, Mudrá offers a vegetarian à la carte menu featuring dishes like artichoke tiraditos and wild mushroom ceviche.',
    rating: 4.5,
    reviews: 100,
    image: require('../images/vegan_two_photo.png'),
    address: 'Calle de Vallehermoso, 79, Moncloa-Aravaca, 28015 Madrid, Spain',
    coordinates: {latitude: 40.4366, longitude: -3.7156},
    openingHours: [
      'Monday to Saturday from 1:00 PM to 4:00 PM and 8:00 PM to 11:00 PM',
    ],
  },
  {
    name: 'La Hummuseria',
    description:
      'Specializing in hummus and Middle Eastern vegetarian cuisine, this restaurant offers a variety of hummus dishes and other plant-based options.',
    rating: 4.5,
    reviews: 300,
    image: require('../images/vegan_three_photo.png'),
    address: 'Calle de San Vicente Ferrer, 29, Malasaña, 28015 Madrid, Spain',
    coordinates: {latitude: 40.4321, longitude: -3.7055},
    openingHours: [
      'Monday to Sunday from 1:00 PM to 4:00 PM and 8:00 PM to 11:00 PM',
    ],
  },
  {
    name: 'La Colectiva Café',
    description:
      'A fully vegan café offering a range of dishes from quiches to baked goods, all made from scratch.',
    rating: 4.5,
    reviews: 200,
    image: require('../images/vegan_four_photo.png'),
    address: 'Calle Francisco de Rojas, 9, Chamberí, 28010 Madrid, Spain',
    coordinates: {latitude: 40.4346, longitude: -3.7103},
    openingHours: [
      'Monday to Friday from 9:00 AM to 7:00 PM',
      'Saturday and Sunday from 10:00 AM to 7:00 PM',
    ],
  },
  {
    name: 'Bite Me Café',
    description:
      'A vegan café offering a variety of plant-based dishes, including burgers, sandwiches, and pastries.',
    rating: 4.5,
    reviews: 150,
    image: require('../images/vegan_five_photo.png'),
    address:
      'Plaza de la Beata María Ana de Jesús, 2, Centro, 28004 Madrid, Spain',
    coordinates: {latitude: 40.4262, longitude: -3.71},
    openingHours: ['Monday to Sunday from 9:00 AM to 7:00 PM'],
  },
  {
    name: 'Mad Mad Vegan - Chueca',
    description:
      'A vegan fast-food restaurant specializing in burgers, tacos, and other comfort foods.',
    rating: 4.5,
    reviews: 400,
    image: require('../images/vegan_six_photo.png'),
    address: 'Calle Pelayo, 19, Chueca, 28004 Madrid, Spain',
    coordinates: {latitude: 40.4277, longitude: -3.705},
    openingHours: [
      'Monday to Sunday from 1:00 PM to 4:00 PM and 8:00 PM to 11:00 PM',
    ],
  },
];

export default vegetarianVeganRestaurants;
