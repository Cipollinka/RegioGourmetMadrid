import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

interface FooterMenuProps {
  activeScreen: (value: ((prevState: string) => string) | string) => void;
  page: (namePage: string) => void;
  activeIcon: string;
}

export const FooterMenu = ({
  activeScreen,
  page,
  activeIcon,
}: FooterMenuProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          activeScreen('topRating');
          page('topRating');
        }}>
        <Image
          source={
            activeIcon === 'topRating'
              ? require('../../assets/images/icons/five_active_footer_icon.png')
              : require('../../assets/images/icons/five_not_active_footer_icon.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          activeScreen('culinaryMap');
          page('culinaryMap');
        }}>
        <Image
          source={
            activeIcon === 'culinaryMap'
              ? require('../../assets/images/icons/four_active_footer_icon.png')
              : require('../../assets/images/icons/four_not_active_footer_icon.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          activeScreen('spanishCuisine');
          page('spanishCuisine');
        }}>
        <Image
          source={
            activeIcon === 'spanishCuisine'
              ? require('../../assets/images/icons/three_active_footer_icon.png')
              : require('../../assets/images/icons/three_not_active_footer_icon.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          activeScreen('culinaryTraditions');
          page('culinaryTraditions');
        }}>
        <Image
          source={
            activeIcon === 'culinaryTraditions'
              ? require('../../assets/images/icons/two_active_footer_icon.png')
              : require('../../assets/images/icons/two_not_active_footer_icon.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          activeScreen('save');
          page('culinarySave');
        }}>
        <Image
          source={
            activeIcon === 'save'
              ? require('../../assets/images/icons/one_active_footer_icon.png')
              : require('../../assets/images/icons/one_not_active_footer_icon.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    gap: 13,
    width: '100%',
    bottom: 40,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(30, 30, 48, 1)',
  },
});
