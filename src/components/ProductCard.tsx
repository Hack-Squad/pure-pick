import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FoodScoreCard from './FoodScoreCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {normalize} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {RoutesEnum} from '../constants/routes.contants';

const ProductCard = ({
  imageUrl,
  brandName,
  productName,
  score,
}: {
  imageUrl: string;
  brandName: string;
  productName: string;
  score: number;
}) => {
  const navigation = useNavigation();
  const [imageError, setImageError] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftContent}>
          <Image
            source={
              imageUrl && !imageError
                ? {uri: imageUrl}
                : require('../assets/images/product-placeholder.png')
            }
            style={styles.productImage}
            onError={() => setImageError(true)}
          />
          <Text style={styles.brandName}>{brandName}</Text>
          <Text style={styles.productName}>{productName}</Text>
        </View>

        <View style={styles.rightContent}>
          <FoodScoreCard score={score} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  brandName: {
    fontSize: 12,
    color: '#888',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
});

export default ProductCard;
