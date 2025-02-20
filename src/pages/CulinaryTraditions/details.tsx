import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface DetailsProps {
  item: any;
}

export const Details = ({item}: DetailsProps) => {
  return (
    <View>
      <Text style={styles.title_header}>Culinary Traditions</Text>
      <View style={{marginTop: 49, padding: 31, height: 550}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 100, gap: 15}}>
            <Text style={styles.title}>{item.title}</Text>
            <SafeAreaView style={{gap: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/images/icons/ocloc_icon.png')}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '300',
                    color: 'rgba(255, 255, 255, 1)',
                  }}>
                  5 minutes of reading
                </Text>
              </View>
            </SafeAreaView>
            <View style={{gap: 10}}>
              <Text style={styles.paragraph}>{item.introduction}</Text>
              {item.mainContent?.map((contentItem, index) => (
                <View key={index} style={{marginVertical: 15}}>
                  <Text style={styles.paragraph}>{contentItem.heading}</Text>
                  <Text style={styles.paragraph}>{contentItem.content}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title_header: {
    fontWeight: '600',
    fontSize: 22,
    color: 'rgba(231, 197, 99, 1)',
    textAlign: 'center',
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
