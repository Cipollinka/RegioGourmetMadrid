import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../user/lib/hooks/use-navigation.tsx';

export const LoaderOne = () => {
  const navigation = useNavigation();

  setTimeout(() => navigation.navigate(ScreenName.LoaderTwo), 2000);

  return (
    <View>
      <ImageBackground
        style={styles.bgImage}
        source={require('./../../assets/images/loader_bg.png')}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/icons/crown_loader.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
