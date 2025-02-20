import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ExploreSpanishCuisineProps {
  nextPage: (namePage: string) => void;
}

export const ExploreSpanishCuisine = ({
  nextPage,
}: ExploreSpanishCuisineProps) => {
  return (
    <View style={styles.item_container}>
      <Text style={styles.title}>Explore Spanish Cuisine</Text>
      <TouchableOpacity onPress={() => nextPage('traditional')}>
        <ImageBackground
          style={styles.item}
          source={require('../../assets/images/items_three_page.png')} resizeMode='contain'>
          <Image
            source={require('../../assets/images/icons/tradition_spanish_cuise_icon.png')}
          />
          <Text style={styles.title_items}>Traditional Spanish Cuisine</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nextPage('modernFusion')}>
        <ImageBackground
          style={styles.item}
          source={require('../../assets/images/items_three_page.png')} resizeMode='contain'>
          <Image
            source={require('../../assets/images/icons/modern_and_fusion_cuisine.png')}
          />
          <Text style={styles.title_items}>Modern and Fusion Cuisine</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nextPage('vegetarianAndVegan')}>
        <ImageBackground
          style={styles.item}
          source={require('../../assets/images/items_three_page.png')} resizeMode='contain'>
          <Image
            source={require('../../assets/images/icons/vegetarian_and_vegan_cuisine.png')}
          />
          <Text style={styles.title_items}>Vegetarian and Vegan Cuisine</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  item_container: {
    gap: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  item: {
    width: 330,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(231, 197, 99, 1)',
  },
  title_items: {
    fontSize: 18,
    marginTop: 18,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
});
