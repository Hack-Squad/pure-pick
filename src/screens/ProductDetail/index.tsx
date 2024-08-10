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
import {RoutesEnum} from '../../constants/routes.contants';

const ProductDetail = ({navigation}: {navigation: any}) => {
  const route = useRoute();
  const {product} = route.params;
  console.log(product, 'product');
  if (!product) {
    Toast.show({
      type: 'error',
      text1: 'Product not found',
      text2: 'Please try again',
      position: 'bottom',
      visibilityTime: 3000,
      bottomOffset: 150,
    });
    return navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <ProductCard
        imageUrl={product?.image_url || null}
        brandName={product.brand_name}
        productName={product.product_name}
        score={product.nutrition_score}
      />

      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate(RoutesEnum.NUTRITIONIST)}>
        <Text style={styles.chatButtonText}>Chat with AI Nutritionist</Text>
        <Icon name="arrow-forward" color={'#fff'} />
      </TouchableOpacity>

      {product?.ingredients_list ? (
        <React.Fragment>
          <View style={styles.tabs}>
            <Text style={[styles.tabText]}>Ingredients</Text>
          </View>
          <View style={styles.ingredientInfo}>
            <Text>{product.ingredients_list} </Text>
          </View>
        </React.Fragment>
      ) : null}

		<View style={styles.tabs}>
			<TouchableOpacity>
				<Text style={[styles.tabText]}>Nutrition</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<Text style={[styles.tabText]}>Health Score</Text>
			</TouchableOpacity>
		</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: normalize(10),
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

  infoTitle: {
    fontSize: normalize(8),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: normalize(5),
  },
  chatButton: {
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
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: normalize(1),
    borderBottomColor: '#DDD',
    width: '100%',
    padding: normalize(10),
  },
  tabText: {
    fontSize: normalize(16),
    paddingVertical: normalize(10),
    width: '100%',
    textAlign: 'center',
  },
  ingredientInfo: {
    paddingVertical: normalize(15),
  },
});

export default ProductDetail;
