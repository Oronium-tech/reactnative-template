/* eslint-disable prettier/prettier */
import {Text, View, StyleSheet, StatusBar, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const searchStyles = StyleSheet.create({
  sectionHeading: {
    marginBottom: 0,
    fontSize: RFValue(21),
    fontFamily: 'DMSansSemiBold',
    letterSpacing: -0.5,
    color: 'rgba(255, 255, 255, 0.8)',
    paddingLeft: 25,
  },
  searchContainer: {
    marginHorizontal: 25,
    borderRadius: 1000,
    backgroundColor: '#232627',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 4,
  },
  inputBox: {
    flex: 1,
  },
});

export default searchStyles;
