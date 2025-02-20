import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import modern from '../../assets/Data/modern.ts';
import traditionalSpanishCuisine from '../../assets/Data/traditional-spanish-cuisine.ts';
import vegan from '../../assets/Data/vegan.ts';

export const CulinaryMap = () => {
  const openMap = () => {
    // Масив всіх категорій ресторанів
    const categories = [modern, traditionalSpanishCuisine, vegan];

    // Випадковий вибір категорії
    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    const selectedCategory = categories[randomCategoryIndex];

    // Випадковий вибір ресторану всередині вибраної категорії
    const randomRestaurantIndex = Math.floor(
      Math.random() * selectedCategory.length,
    );
    const {coordinates} = selectedCategory[randomRestaurantIndex];

    // Формування URL для відкриття Google Maps
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.latitude},${coordinates.longitude}`;

    // Відкриття карти
    Linking.openURL(url).catch(err =>
      console.error('Не вдалося відкрити карту:', err),
    );
  };
  return (
    <View style={{alignItems: 'center', marginTop: 60}}>
      <Text style={styles.header_text}>Culinary Map</Text>
      <TouchableOpacity style={styles.open_map} onPress={openMap}>
        <View />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header_text: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(231, 197, 99, 1)',
  },
  open_map: {
    width: '100%',
    height: '95%',
    top: 20,
  },
});
