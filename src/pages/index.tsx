import {ImageBackground, StyleSheet, View} from 'react-native';
import {FooterMenu} from './Footer/footer-menu.tsx';
import {useState} from 'react';
import {ExploreSpanishCuisine} from './ExploreSpanishCuisine/explore-spanish-cuisine.tsx';
import {CulinaryMap} from './CulinaryMap/culinary-map.tsx';
import {TopThreeRating} from './TopThreeRating/top-three-rating.tsx';
import {CulinaryTraditions} from './CulinaryTraditions/culinary-traditions.tsx';
import {CulinarySave} from './CulinarySave/culinary-save.tsx';
import {TraditionalSpanishCuisine} from './TraditionalSpanishCuisine/traditional-spanish-cuisine.tsx';
import {ModernAndFusionCuisine} from './ModernAndFusionCuisine/modern-and-fusion-cuisine.tsx';
import {VegetarianAndVeganCuisine} from './VegetarianAndVeganCuisine/vegetarian-and-vegan-cuisine.tsx';
import {Details} from './CulinaryTraditions/details.tsx';

export const Main = () => {
  const [activeScreen, setActiveScreen] = useState('spanishCuisine');
  const [pagesCuisine, setPagesCuisine] = useState('');
  const [nextPage, setNextPage] = useState('spanishCuisine');
  const [isCuisinePage, setIsCuisinePage] = useState(false); // Відстежуємо тип сторінки
  const [selectedItem, setSelectedItem] = useState(null);

  const backgroundImage = () => {
    if (activeScreen === 'spanishCuisine') {
      return require('../assets/images/cuisine_screen.png');
    } else if (activeScreen === 'culinaryMap') {
      return require('../assets/images/MAP.png');
    } else {
      return require('../assets/images/screen_glob.png');
    }
  };

  const handlePage = (namePage: string) => {
    setNextPage(namePage);
    setIsCuisinePage(false); // Якщо натиснули футер — скидаємо стан
  };

  const handlePageCuisine = (namePage: string, item?: any) => {
    setPagesCuisine(namePage);
    setSelectedItem(item); // Зберігаємо обраний елемент
    setIsCuisinePage(true);
  };

  const renderPage = () => {
    switch (nextPage) {
      case 'spanishCuisine':
        return <ExploreSpanishCuisine nextPage={handlePageCuisine} />;
      case 'culinaryMap':
        return <CulinaryMap />;
      case 'topRating':
        return <TopThreeRating />;
      case 'culinaryTraditions':
        return <CulinaryTraditions nextPage={handlePageCuisine} />;
      case 'culinarySave':
        return <CulinarySave />;
    }
  };

  const renderPageCuisine = () => {
    switch (pagesCuisine) {
      case 'traditional':
        return <TraditionalSpanishCuisine />;
      case 'modernFusion':
        return <ModernAndFusionCuisine />;
      case 'vegetarianAndVegan':
        return <VegetarianAndVeganCuisine />;
      case 'readNow':
        return <Details item={selectedItem} />;
    }
  };

  return (
    <View>
      <ImageBackground
        source={backgroundImage()}
        resizeMode="stretch"
        style={{width: '100%'}}>
        <View style={styles.container}>
          {isCuisinePage ? renderPageCuisine() : renderPage()}
          <FooterMenu
            page={handlePage}
            activeScreen={setActiveScreen}
            activeIcon={activeScreen}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
});
