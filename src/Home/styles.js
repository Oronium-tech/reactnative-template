/* eslint-disable prettier/prettier */
import {Text, View, StyleSheet, StatusBar, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141718',
    alignContent: 'flex-start',
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
    borderColor: '#588AF1',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  breadcrumbsTitle: {color: '#588AF1', fontFamily: 'DMSansLight'},
  sectionList: {
    paddingHorizontal: 25,
    marginTop: 15,
  },
  prayerSmallCardimage: {
    height: windowWidth * 0.18,
    width: windowWidth * 0.18,
    borderRadius: 1000,
  },
  prayerSmallCard: {
    padding: 8,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
    flexDirection: 'row',
    backgroundColor: '#232627',
    alignItems: 'center',
  },
  prayerSmallCardSec: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  prayerSmallCardTitle: {
    fontFamily: 'DMSansSemiBold',
    fontSize: RFValue(15),
    letterSpacing: -0.5,

    color: '#fff',
  },
  prayerSmallCardsubTitle: {
    fontFamily: 'DMSansLight',
    fontSize: RFValue(11),

    color: 'rgba(255, 255, 255, 0.6)',
  },
});

export default styles;
