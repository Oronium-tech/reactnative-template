/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
const PrayerCard = ({title, index}) => (
  <View
    style={[
      {
        marginLeft: index ? 25 : 0,
      },
      styles.prayerCard,
    ]}>
    <Image
      style={styles.prayerCardimage}
      source={require('../../assets/bg1.jpg')}
    />
    <Text style={styles.prayerCardTitle}>{title}</Text>
  </View>
);
const BreadCrumbs = ({title, index}) => (
  <View
    style={[
      {
        marginLeft: index == 0 ? 25 : 0,
      },
      styles.breadcrumbs,
    ]}>
    <Text style={styles.breadcrumbsTitle}>{title}</Text>
  </View>
);
const Home = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      img: '',
      index: 1,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      img: '',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: '',
    },
    {
      id: '58694as0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: '',
    },
    {
      id: '5869s4a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: '',
    },
  ];
  const prayerTypes = ['Novenas', 'Rosary', 'Special', 'Yama Prarthana'];
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <View style={styles.contentholder}>
        <View style={styles.nav}>
          <Text style={styles.heading}>Prayer App</Text>
          <Icon name="md-alarm" size={30} color="#fff" />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Popular Prayers</Text>
          <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, i}) => (
              <PrayerCard
                img={item.img}
                index={item.index}
                title={item.title}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.section2}>
          <Text style={styles.sectionHeading}>Other Prayers</Text>
          <FlatList
            data={prayerTypes}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <BreadCrumbs index={index} title={item} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
