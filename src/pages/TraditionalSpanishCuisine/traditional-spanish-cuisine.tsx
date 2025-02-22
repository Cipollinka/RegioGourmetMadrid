import {
  Image,
  SafeAreaView,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import traditionalSpanishCuisine from '../../assets/Data/traditional-spanish-cuisine.ts';
import openMap from 'react-native-open-maps';
import {useUser} from '../../user';

export const TraditionalSpanishCuisine = () => {
  const {user, saveUser} = useUser();

  // Функція для збереження елементу
  const handleSaveItem = (item: any) => {
    if (user?.saved) {
      // Перевіряємо, чи є елемент у масиві збережених елементів
      if (user.saved.some(savedItem => savedItem.name === item.name)) {
        // Якщо елемент вже збережений, нічого не робимо
        console.log('Item already saved');
      } else {
        const updatedSaved = [...user.saved, item];
        saveUser({...user, saved: updatedSaved});
      }
    } else {
      saveUser({...user, saved: [item]});
    }
  };

  // Функція для поділу елементу
  const handleShareItem = (item: any) => {
    const shareOptions = {
      title: item.name,
      message: item.description,
      url: item.image, // Можна додати зображення або інший контент
    };

    Share.share(shareOptions)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleSetRoute = (latitude: number, longitude: number) => {
    openMap({latitude, longitude, zoom: 15, travelType: 'drive'});
  };

  console.log('User Saved', user?.saved);

  return (
    <View>
      <View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/icons/tradition_spanish_cuise_icon.png')}
          />
          <Text style={styles.title_header}>Traditional Spanish Cuisine</Text>
        </View>
        <LinearGradient
          colors={['rgba(255, 244, 131, 1)', 'rgba(129, 71, 20, 1)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{height: 1, width: '100%'}}
        />
        <View style={{height: 480, marginTop: 20}}>
          <ScrollView>
            <View style={styles.items_container}>
              {traditionalSpanishCuisine.map((item, index) => {
                const isSaved = user?.saved?.some(
                  savedItem => savedItem.name === item.name,
                );

                return (
                  <TouchableOpacity style={styles.item} key={index}>
                    <Image style={styles.item_image} source={item.image} />
                    <View style={styles.item_text_container}>
                      <View style={{gap: 3, marginBottom: 10}}>
                        <Text style={styles.item_title}>{item.name}</Text>
                        <Text style={styles.description}>
                          {item.description}
                        </Text>
                      </View>
                      <View>
                        <SafeAreaView style={styles.item_list}>
                          <Image
                            source={require('../../assets/images/icons/rating_icon.png')}
                          />
                          <Text style={styles.item_list_text}>
                            {item.rating}({item.reviews} reviews)
                          </Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.item_list}>
                          <Image
                            source={require('../../assets/images/icons/location_icon.png')}
                          />
                          <Text style={styles.item_list_text}>
                            {item.address}
                          </Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.item_list}>
                          <Image
                            source={require('../../assets/images/icons/ocloc_icon.png')}
                          />
                          <Text style={styles.item_list_text}>
                            {item.openingHours}
                          </Text>
                        </SafeAreaView>
                      </View>
                      <View
                        style={{flexDirection: 'row', gap: 21, marginTop: 10}}>
                        <TouchableOpacity
                          onPress={() =>
                            handleSetRoute(
                              item.coordinates.latitude,
                              item.coordinates.longitude,
                            )
                          }>
                          <LinearGradient
                            style={{
                              width: 153,
                              height: 46,
                              borderRadius: 8,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                            colors={[
                              'rgba(254, 254, 225, 1)',
                              'rgba(255, 244, 131, 1)',
                              'rgba(231, 197, 99, 1)',
                              'rgba(129, 71, 20, 1)',
                            ]}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 1}}>
                            <Text
                              style={{
                                fontWeight: '500',
                                fontSize: 16,
                                color: 'rgba(18, 18, 29, 1)',
                              }}>
                              Set route
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                        <SafeAreaView style={{flexDirection: 'row', gap: 12}}>
                          <TouchableOpacity
                            onPress={() => handleSaveItem(item)}
                            style={{
                              width: 56,
                              height: 46,
                              backgroundColor: 'rgba(30, 30, 48, 1)',
                              borderRadius: 8,
                              borderWidth: 1,
                              borderColor: 'rgba(255, 244, 131, 1)',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Image
                              source={
                                isSaved
                                  ? require('../../assets/images/icons/one_active_footer_icon.png')
                                  : require('../../assets/images/icons/one_not_active_footer_icon.png')
                              }
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => handleShareItem(item)}
                            style={{
                              width: 56,
                              height: 46,
                              backgroundColor: 'rgba(30, 30, 48, 1)',
                              borderRadius: 8,
                              borderWidth: 1,
                              borderColor: 'rgba(255, 244, 131, 1)',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Image
                              source={require('../../assets/images/icons/shared.png')}
                            />
                          </TouchableOpacity>
                        </SafeAreaView>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 180,
    backgroundColor: 'rgba(30, 30, 48, 1)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 14,
    paddingBottom: 22,
  },
  title_header: {
    fontWeight: '600',
    fontSize: 18,
    color: 'rgba(231, 197, 99, 1)',
  },
  items_container: {
    width: '100%',
    alignItems: 'center',
    gap: 21,
    marginBottom: 120,
  },
  item: {
    width: 330,
    borderRadius: 8,
    paddingBottom: 29,
    borderWidth: 1,
    borderColor: 'rgba(255, 244, 131, 1)',
    backgroundColor: 'rgba(30, 30, 48, 1)',
  },
  item_image: {
    width: '100%',
    height: 186,
    marginBottom: 9,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  item_text_container: {
    marginLeft: 18,
    marginRight: 18,
  },
  item_title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
  description: {
    fontWeight: '300',
    fontSize: 16,
    color: 'rgba(207, 207, 207, 1)',
  },
  item_list: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  item_list_text: {
    fontWeight: '300',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
});
