import React, {useState, useRef} from 'react';
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
import ChatWithNutritionist from '../../components/ChatWithNutritionist';
import Accordion from '../../components/Accordion';

enum TabsEnum {
  INGREDIENTS = 'Ingredients',
  NUTRITION = 'Nutrition',
}

const ProductDetail = ({navigation}: {navigation: any}) => {
  const [activeTab, setActiveTab] = React.useState(TabsEnum.INGREDIENTS);
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

  const toggleAccordion = () => {
    setExpanded(!expanded);
    if (expanded) {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        toValue: 100, // Adjust this value based on content height
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ProductCard
        imageUrl={product?.image_url || null}
        brandName={product.brand_name}
        productName={product.product_name}
        score={product.nutrition_score}
      />

      <View style={styles.allergens}>
        <Text style={styles.allergensHeading}>Allergens</Text>
        <Text style={styles.allergensText}>
          {product?.allergens_list?.trim()
            ? product.allergens_list
            : 'Allergens not Available'}
        </Text>
      </View>

      <View style={{marginTop: normalize(10)}}>
        <ChatWithNutritionist />
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === TabsEnum.INGREDIENTS ? styles.activeTab : {},
          ]}
          onPress={() => setActiveTab(TabsEnum.INGREDIENTS)}>
          <Text
            style={[
              styles.tabText,
              activeTab === TabsEnum.INGREDIENTS ? styles.activeTabText : {},
            ]}>
            Ingredients
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === TabsEnum.NUTRITION ? styles.activeTab : {},
          ]}
          onPress={() => setActiveTab(TabsEnum.NUTRITION)}>
          <Text
            style={[
              styles.tabText,
              activeTab === TabsEnum.NUTRITION ? styles.activeTabText : {},
            ]}>
            Nutrition
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>
        {activeTab === TabsEnum.INGREDIENTS ? (
          <View>
            <Text style={styles.tabContentText}>
              {product.ingredients_list}{' '}
            </Text>
          </View>
        ) : (
          <View>
            <Text style={[styles.nutriontionCard]}>
              Calories: {product?.calories || 'Not Available'}
            </Text>
            <Text style={[styles.nutriontionCard]}>
              Serving Size: {product?.serving_size || 'Not Available'}
            </Text>

            {product?.nutrients_info_nutrients?.length ? (
              <View style={{marginTop: normalize(10)}}>
                <Accordion title="Calories & Macros">
                  <View>
                    {product.nutrients_info_nutrients.map((macro: any) => (
                      <View
                        key={macro.name}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          borderBottomWidth: normalize(1),
                          borderColor: '#DDD',
                          marginBottom: normalize(10),
                        }}>
                        <Text style={styles.tabContentText}>{macro.name}</Text>
                        <Text style={styles.tabContentText}>
                          {macro.value} {macro.unit}
                        </Text>
                      </View>
                    ))}
                  </View>
                </Accordion>
              </View>
            ) : (
              <Text> Macros Not Available</Text>
            )}
          </View>
        )}
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
  allergens: {
    padding: normalize(15),
    marginTop: normalize(30),
    backgroundColor: '#FFF3CD',
    borderRadius: normalize(10),
  },
  allergensHeading: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: '#856404',
  },
  allergensText: {
    fontSize: normalize(14),
    color: '#343A40',
    marginTop: normalize(5),
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    width: '50%',
    borderBottomWidth: normalize(1),
    borderBottomColor: '#DDD',
    padding: normalize(10),
  },
  tabText: {
    fontSize: normalize(16),
    paddingVertical: normalize(10),
    width: '100%',
    textAlign: 'center',
  },
  activeTab: {
    borderBottomWidth: normalize(4),
    borderBottomColor: '#000',
    borderRadius: normalize(2),
  },
  activeTabText: {
    color: '#000',
  },
  tabContent: {
    paddingVertical: normalize(15),
  },
  tabContentText: {
    fontSize: normalize(14),
    color: '#343A40',
    marginBottom: normalize(5),
  },
  tabContentTextHeading: {
    fontSize: normalize(14),
    color: '#343A40',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: normalize(10),
    marginBottom: normalize(5),
  },
  nutriontionCard: {
    padding: normalize(15),
    borderRadius: normalize(10),
    backgroundColor: '#fff',
    borderColor: '#DDD',
	borderWidth: normalize(1),
    fontWeight: 'bold',
    fontSize: normalize(14),
    marginBottom: normalize(10),
	 color: '#343A40',
  },
});

export default ProductDetail;
