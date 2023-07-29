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
import readStyles from '../Read/styles';

import LinearGradient from 'react-native-linear-gradient';

const Read = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <View style={readStyles.imgHolder}>
        <LinearGradient
          colors={[
            'rgba(20, 23, 24, 0)',
            'rgba(20, 23, 24, 0)',
            'rgba(20, 23, 24, .2)',
            'rgba(20, 23, 24, .8)',
            '#141718',
          ]}
          style={readStyles.gradient}></LinearGradient>
        <Image
          style={readStyles.prayerImage}
          source={require('../../assets/bg1.jpg')}
        />
      </View>
    </ScrollView>
  );
};

export default Read;
