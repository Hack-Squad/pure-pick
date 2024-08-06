import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ProductCard from '../../components/ProductCard';
import {useRoute} from '@react-navigation/native';
import {normalize} from '../../styles';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RoutesEnum } from '../../constants/routes.contants';

const ProductDetail = ({navigation}: {navigation: any}) => {
  const route = useRoute();
  const {product} = route.params;
  console.log(JSON.stringify(product));

  if (!product.id) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Product not found',
    });
    return navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <ProductCard
        imageUrl={null}
        brandName={product?.brandOwner}
        productName={product?.description}
        score={Math.floor(Math.random() * 100) + 1}
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Processed Food</Text>
        <Text style={styles.infoDescription}>
          Foods with added ingredients like sugar, oil, or salt for flavor and
          preservation.
        </Text>
      </View>

      <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate(RoutesEnum.NUTRITIONIST)}>
        <Text style={styles.chatButtonText}>Chat with AI Nutritionist</Text>
        <Icon name="arrow-forward"  color={"#fff"} />
      </TouchableOpacity>

      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>Ingredients</Text>
        <Text style={styles.tabText}>Nutritional Info</Text>
      </View>

      <View style={styles.ingredientInfo}>
        <Text>Total ingredients: 12</Text>
      </View>

      <TouchableOpacity style={styles.additivesButton}>
        <Text style={styles.additivesButtonText}>Additives (4)</Text>
        <Text style={styles.expandIcon}>▼</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.otherIngredientsButton}>
        <Text style={styles.otherIngredientsButtonText}>
          Other ingredients (8)
        </Text>
        <Text style={styles.expandIcon}>▼</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(15),
  },
  backButton: {
    fontSize: normalize(26),
  },
  title: {
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  shareButton: {
    fontSize: normalize(16),
  },
  infoBox: {
    backgroundColor: '#FFC107',
    padding: normalize(15),
    margin: normalize(15),
    borderRadius: normalize(10),
  },
  infoTitle: {
    fontSize: normalize(8),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: normalize(5),
  },
  infoDescription: {
    color: 'white',
  },
  chatButton: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(15),
    margin: normalize(15),
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
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: normalize(1),
    borderBottomColor: '#DDD',
  },
  tabText: {
    fontSize: normalize(16),
    paddingVertical: normalize(10),
  },
  activeTab: {
    borderBottomWidth: normalize(2),
    borderBottomColor: '#000',
  },
  ingredientInfo: {
    padding: normalize(15),
  },
  additivesButton: {
    backgroundColor: '#FFCCCB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(15),
    margin: normalize(15),
    borderRadius: normalize(10),
  },
  additivesButtonText: {
    color: '#333',
  },
  otherIngredientsButton: {
    backgroundColor: '#90EE90',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(15),
    margin: normalize(15),
    borderRadius: normalize(10),
  },
  otherIngredientsButtonText: {
    color: '#333',
  },
  expandIcon: {
    fontSize: normalize(16),
  },
});

export default ProductDetail;
