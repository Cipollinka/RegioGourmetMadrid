import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../user/lib/hooks/use-navigation.tsx';
import {useEffect} from 'react';
import {useUser} from '../../user';

export const LoaderThree = () => {
  const {user} = useUser();
  const navigation = useNavigation();

  useEffect(() => {
    if (user?.onBoards?.includes(1)) {
      navigation.navigate(ScreenName.Main);
    } else {
      setTimeout(() => navigation.navigate(ScreenName.OnBoards), 2000);
    }
  }, [user, navigation]); // Виконується при зміні user або navigation

  return (
    <View>
      <ImageBackground
        style={styles.bgImage}
        source={require('./../../assets/images/loader_bg_two.png')}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/icons/crown_loader_two.png')}
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
