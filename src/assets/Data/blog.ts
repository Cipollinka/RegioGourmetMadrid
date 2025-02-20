type Article = {
  title: string;
  introduction: string;
  mainContent: {
    heading: string;
    content: string;
  }[];
  conclusion: string;
};

const articles: Article[] = [
  {
    title:
      'The Essence of Madrid: A Culinary Journey Through Its Traditional Dishes',
    introduction:
      'Madrid’s culinary landscape is rich in history, with dishes that have been passed down through generations. The capital city of Spain offers a unique blend of regional flavors and traditional recipes. In this article, we will explore the essence of Madrid’s gastronomy through its most iconic dishes.',
    mainContent: [
      {
        heading: 'Cocido Madrileño',
        content:
          'This hearty, flavorful stew is the heart of Madrid’s cuisine. It’s a combination of chickpeas, vegetables, and meats like pork, chicken, and beef. It’s often served in two parts—first the broth, followed by the meat and chickpeas—making it a perfect winter dish.',
      },
      {
        heading: 'Callos a la Madrileña',
        content:
          "A traditional tripe dish that’s beloved in Madrid. Made with beef tripe, chorizo, and morcilla (blood sausage), it’s a flavorful and filling meal that has become a staple of Madrid's gastronomy.",
      },
      {
        heading: 'Tortilla de Patatas',
        content:
          'Known internationally as Spanish omelette, it’s made with eggs, potatoes, and onions. While the dish is loved throughout Spain, Madrid’s variation is particularly famous for its delicate, creamy texture.',
      },
    ],
    conclusion:
      "Madrid’s traditional dishes reflect the city’s deep cultural roots. Whether you're savoring a rich stew or enjoying a simple omelette, each bite tells the story of Madrid's past and present culinary scene.",
  },
  {
    title: 'The Art of Tapas: Exploring Madrid’s Small Plates and Big Flavors',
    introduction:
      "Tapas are an integral part of Madrid's culinary culture, offering a variety of flavors in small, shareable portions. In this article, we dive into the history, types, and best places in Madrid to enjoy tapas.",
    mainContent: [
      {
        heading: 'The History of Tapas',
        content:
          'Originating from the practice of covering drinks to keep flies away, tapas have evolved into a significant aspect of Spanish dining culture. Madrid, with its bustling taverns and lively social scene, is home to some of the best tapas experiences.',
      },
      {
        heading: 'Popular Tapas in Madrid',
        content:
          'From Patatas Bravas (crispy fried potatoes with spicy tomato sauce) to Gambas al Ajillo (garlic shrimp), Madrid’s tapas bars offer an array of small plates that highlight the diversity of Spanish ingredients and flavors.',
      },
      {
        heading: 'Best Tapas Bars in Madrid',
        content:
          'Whether you’re looking for a classic experience or something new, Madrid offers countless spots where you can enjoy top-notch tapas. Places like El Sur, Bodega de la Ardosa, and La Casa del Abuelo are favorites for locals and tourists alike.',
      },
    ],
    conclusion:
      'Tapas are more than just food in Madrid—they are a way of life. Exploring the city’s tapas culture is a must for anyone wanting to truly experience the spirit of Madrid.',
  },
  {
    title:
      'Sweets of Madrid: A Sweet Tooth’s Guide to Traditional Spanish Desserts',
    introduction:
      'Spanish sweets are known for their variety and rich flavors, and Madrid is no exception. From delicate pastries to indulgent cakes, Madrid’s dessert scene is sure to satisfy any sweet tooth. In this article, we’ll take a look at some of the traditional Spanish desserts that you can’t miss when visiting Madrid.',
    mainContent: [
      {
        heading: 'Churros con Chocolate',
        content:
          "No visit to Madrid is complete without trying churros. These deep-fried dough sticks are typically served with a thick, rich hot chocolate dip. It's the perfect treat for breakfast or a late-night snack.",
      },
      {
        heading: 'Tarta de Santiago',
        content:
          'A traditional almond cake from Galicia, but widely enjoyed in Madrid as well. The cake is marked with the cross of Saint James and offers a perfect balance of sweetness and nuttiness.',
      },
      {
        heading: 'Rosquillas',
        content:
          'These ring-shaped doughnuts are a Madrid specialty, often enjoyed during festivals like San Isidro. They come in various flavors, from aniseed to sugar-glazed, making them a delightful treat.',
      },
    ],
    conclusion:
      "Madrid's sweet offerings are a delicious reflection of the city's diverse culinary heritage. From churros to cakes, there’s something for every dessert lover in the heart of Spain.",
  },
];

export default articles;
