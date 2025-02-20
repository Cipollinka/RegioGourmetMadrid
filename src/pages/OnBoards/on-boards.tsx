import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../user/lib/hooks/use-navigation.tsx';
import {useUser} from '../../user';

const slides = [
  {
    title: 'Welcome to Regio Gourmet Madrid!',
    description:
      '👋 Welcome to the app that helps you discover the best restaurants in Madrid and dive into its culinary culture. Ready for a gastronomic journey?',
    buttonText: 'Get Started',
    image: require('../../assets/images/header_group_onBoards_one.png'),
  },
  {
    title: 'Location Randomizer',
    description:
      '🎲 Can’t decide where to go? Use the Randomizer to get a random suggestion from three main categories:🍴 Restaurants🍷 Cafes & Bistros🍕 Fast Food',
    buttonText: 'Next',
    image: require('../../assets/images/onboardst_two_header.png'),
  },
  {
    title: 'Interactive Map',
    description:
      '🗺️ On the Interactive Map, you can easily find all locations in Madrid. Just click on a pin to learn more about each spot!',
    buttonText: 'Next',
    image: require('../../assets/images/onboardst_three_header.png'),
  },
  {
    title: 'Save Locations',
    description:
      '💾 Found a place you like? Save it to your favorites for quick access to the spots you enjoy the most.',
    buttonText: "Let's Begin",
    image: require('../../assets/images/onboardst_four_header.png'),
  },
];

export const OnboardingScreen = () => {
  const {user, saveUser} = useUser();
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigation = useNavigation();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Додаємо `1` в `onBoards` і переходимо на `Main`
      saveUser({...user, onBoards: [...(user?.onBoards || []), 1]});
      navigation.navigate(ScreenName.Main);
    }
  };

  return (
    <View>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../assets/images/loader_bg.png')}>
        <Image source={slides[currentSlide].image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{slides[currentSlide].title}</Text>
          <Text style={styles.description}>
            {slides[currentSlide].description}
          </Text>
          <TouchableOpacity onPress={handleNext}>
            <ImageBackground
              style={styles.button}
              source={require('../../assets/images/btn_next.png')}>
              <Text style={styles.buttonText}>
                {slides[currentSlide].buttonText}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '55%',
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    width: 307,
    alignItems: 'center',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: 264,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
