import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ThemedBox from '../../components/ThemedBox';
import {RoutesEnum} from '../../constants/routes.contants';
import {normalize} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <ThemedBox style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>

      <View style={styles.scanCard}>
        <Text style={styles.scanCardTitle}>Know before you buy</Text>
        <View style={styles.scanCardFooter}>
          <Text style={styles.scanText}>
            What's in it!? Scan and understand the ingredients in your products
          </Text>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={() => navigation.navigate(RoutesEnum.SCAN_STACK)}>
            <Icon name="camera" size={30} color="black" />
            <Text style={styles.scanButtonText}>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate(RoutesEnum.NUTRITIONIST)}>
        <Text style={styles.chatButtonText}>Chat with AI Nutritionist</Text>
        <Icon name="arrow-forward" color={'#fff'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.allProductsButton}
        onPress={() => navigation.navigate(RoutesEnum.PRODUCT_LIST)}>
        <Image
          source={require('../../assets/images/food.png')}
          style={styles.foodImage}
        />
        <Text style={styles.allProductsText}>See all products</Text>
      </TouchableOpacity>
    </ThemedBox>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: normalize(20),
  },
  heading: {
    fontSize: normalize(50),
    fontWeight: 'bold',
    marginBottom: 10,
    marginEnd: 'auto',
    color: 'black',
  },
  scanCard: {
    borderColor: '#616E7C',
    padding: normalize(24),
    borderRadius: normalize(10),
    backgroundColor: 'white',
    marginEnd: 'auto',
    width: '100%',
    elevation: 5,
    shadowRadius: 40,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
  },
  scanCardTitle: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  scanCardFooter: {
    flexDirection: 'row',
    gap: normalize(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scanText: {
    color: 'black',
    fontSize: normalize(18),
    flex: 1,
    flexWrap: 'wrap',
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(15),
    borderRadius: normalize(30),
    gap: normalize(5),
    backgroundColor: '#EBFF00',
  },
  scanButtonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: normalize(24),
  },
  chatButton: {
    marginTop: normalize(40),
    width: '100%',
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(15),
    marginVertical: normalize(15),
    borderRadius: normalize(10),
  },
  chatButtonText: {
    color: 'white',
    fontSize: normalize(16),
  },
  arrowIcon: {
    color: 'white',
    fontSize: normalize(10),
  },
  allProductsButton: {
    width: '100%',
    height: normalize(300),
    alignContent: 'center',
    borderRadius: normalize(10),
    marginTop: normalize(20),
    elevation: 5,
    shadowRadius: 40,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    backgroundColor: 'white',
	padding: normalize(20),
  },
  foodImage: {
    width: '100%',
    height: '90%',
    objectFit: 'contain',
  },
  allProductsText: {
    textAlign: 'center',
    fontSize: normalize(30),
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'capitalize',
  },
});
