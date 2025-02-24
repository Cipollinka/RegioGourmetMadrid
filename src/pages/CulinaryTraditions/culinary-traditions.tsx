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
import articles from '../../assets/Data/blog.ts';
import LinearGradient from 'react-native-linear-gradient';

interface CulinaryTraditionsProps {
  nextPage: (namePage: string, item?: any) => void;
}

export const CulinaryTraditions = ({nextPage}: CulinaryTraditionsProps) => {
  const handleShareItem = (item: any) => {
    const shareOptions = {
      title: item.title,
      message: item.introduction,
    };

    Share.share(shareOptions)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.title_h1}>Culinary Traditions</Text>
      <View style={{height: 540, marginTop: 50}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.items_container}>
            {articles.map((item, index) => (
              <View style={styles.blog} key={index}>
                <SafeAreaView style={{gap: 20}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/images/icons/ocloc_icon.png')}
                    />
                    <Text style={styles.paragraph}>5 minutes of reading</Text>
                  </View>
                </SafeAreaView>
                <SafeAreaView
                  style={{flexDirection: 'row', alignItems: 'center', gap: 13}}>
                  <TouchableOpacity onPress={() => nextPage('readNow', item)}>
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
                        Read now
                      </Text>
                    </LinearGradient>
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
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  blog: {
    padding: 18,
    width: 330,
    height: 245,
    borderRadius: 8,
    gap: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 244, 131, 1)',
    backgroundColor: 'rgba(30, 30, 48, 1)',
  },
  items_container: {
    width: '100%',
    alignItems: 'center',
    gap: 21,
    marginBottom: 120,
  },
  title_h1: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(231, 197, 99, 1)',
    marginTop: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
  paragraph: {
    fontSize: 16,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 1)',
  },
});
