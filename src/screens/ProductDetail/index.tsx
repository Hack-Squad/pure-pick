import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ProductCard from '../../components/ProductCard';

const ProductDetail = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Product Detail</Text>
        <TouchableOpacity>
          <Text style={styles.shareButton}>Share</Text>
        </TouchableOpacity>
      </View>

      <ProductCard
        imageUrl="https://example.com/kitkat.jpg"
        brandName="Brand Name"
        productName="Lays American Sweet Onion Original"
        score={25}
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Processed Food</Text>
        <Text style={styles.infoDescription}>
          Foods with added ingredients like sugar, oil, or salt for flavor and
          preservation.
        </Text>
      </View>

      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat with AI Nutritionist</Text>
        <Text style={styles.arrowIcon}>→</Text>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  backButton: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shareButton: {
    fontSize: 16,
  },
  infoBox: {
    backgroundColor: '#FFC107',
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  infoDescription: {
    color: 'white',
  },
  chatButton: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 16,
  },
  arrowIcon: {
    color: 'white',
    fontSize: 20,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  tabText: {
    fontSize: 16,
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  ingredientInfo: {
    padding: 15,
  },
  additivesButton: {
    backgroundColor: '#FFCCCB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  additivesButtonText: {
    color: '#333',
  },
  otherIngredientsButton: {
    backgroundColor: '#90EE90',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  otherIngredientsButtonText: {
    color: '#333',
  },
  expandIcon: {
    fontSize: 16,
  },
});

export default ProductDetail;
