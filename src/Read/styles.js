/* eslint-disable prettier/prettier */
import {Text, View, StyleSheet, StatusBar, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const readStyles = StyleSheet.create({
  prayerImage: {
    width: windowWidth,
    height: windowHeight * 0.5,
  },
  gradient: {
    height: windowHeight * 0.5,
    position: 'absolute',
    width: windowWidth,
    zIndex: 100,
  },
  imgHolder: {
    height: windowHeight * 0.5,
  },
});

export default readStyles;
