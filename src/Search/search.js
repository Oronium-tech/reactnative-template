/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Home/styles';
import searchStyles from './styles';

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
const PrayerSmallCard = ({title, category}) => (
  <View style={styles.prayerSmallCard}>
    <Image
      style={styles.prayerSmallCardimage}
      source={require('../../assets/bg1.jpg')}
    />
    <View style={styles.prayerSmallCardSec}>
      <Text style={styles.prayerSmallCardTitle}>{title}</Text>
      <Text style={styles.prayerSmallCardsubTitle}>{category}</Text>
    </View>
  </View>
);
const Search = () => {
  const prayerTypes = [
    'Novenas',
    'Rosary',
    'Special',
    'Novenas',
    'Rosary',
    'Special',
    'Yama Prarthana',
  ];
  const prayers = [
    {
      title: 'Title1',
      category: 'Daily Prayer',
    },
    {
      title: 'Title1',
      category: 'Novena',
    },
    {
      title: 'Title2',
      category: 'Yama Prarthana',
    },
    {
      title: 'Title3',
      category: 'Novena',
    },
    {
      title: 'Title4',
      category: 'Daily Prayer',
    },
    {
      title: 'Title5',
      category: 'Novena',
    },
  ];
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView style={styles.container}>
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
          <Text style={searchStyles.sectionHeading}>Search Prayers</Text>
          <View style={searchStyles.searchContainer}>
            <TextInput style={searchStyles.inputBox} />
            <Icon name="md-search" size={30} color="#fff" />
          </View>
        </View>
        <View style={styles.section2}>
          <ScrollView horizontal={false}>
            <FlatList
              data={prayerTypes}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <BreadCrumbs index={index} title={item} />
              )}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>
        <View style={styles.sectionList}>
          <ScrollView horizontal={false}>
            {prayers.map((item, i) => {
              return (
                <PrayerSmallCard
                  key={i}
                  title={item.title}
                  category={item.category}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Search;
