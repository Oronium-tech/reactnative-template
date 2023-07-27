/* eslint-disable prettier/prettier */
import {Text, View, StyleSheet, StatusBar, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232627',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  contentholder: {
    marginTop: StatusBar.currentHeight,
    paddingTop: 15,
  },
  heading: {
    fontFamily: 'DMSansSemiBold',
    fontSize: RFValue(30),
    letterSpacing: -0.5,
    color: '#fff',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  section: {
    marginTop: 25,
  },
  sectionHeading: {
    fontSize: RFValue(21),
    fontFamily: 'DMSansSemiBold',
    letterSpacing: -0.5,
    marginBottom: 8,
    color: 'rgba(255, 255, 255, 0.8)',
    paddingLeft: 25,
  },
  prayerCard: {
    backgroundColor: 'red',
    marginRight: 20,
    overflow: 'hidden',
    width: windowWidth * 0.55,
    borderRadius: 13,
    height: windowWidth * 0.55,
    justifyContent: 'flex-end',
  },
  prayerCardimage: {
    width: '100%',
    position: 'absolute',
    height: '100%',
  },
  prayerCardTitle: {
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    fontFamily: 'DMSansSemiBold',
    fontSize: RFValue(13),
    letterSpacing: -0.5,
    borderRadius: 13,
    color: '#fff',
  },
  section2: {
    marginTop: 10,
  },
  breadcrumbs: {
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 1000,
    borderColor: 'red',
    borderWidth: 1,
  },
  breadcrumbsTitle: {},
});

export default styles;
