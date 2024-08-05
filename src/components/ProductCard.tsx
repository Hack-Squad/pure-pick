import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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
  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <Image source={{uri: imageUrl}} style={styles.productImage} />
        <Text style={styles.brandName}>Brand Name</Text>
        <Text style={styles.productName}>{productName}</Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.scoreLabel}>Score</Text>
        <View style={styles.scoreCircle}>
          <Text style={styles.scoreText}>{score}</Text>
        </View>
      </View>
      <View style={styles.notIdealBadge}>
        <Text style={styles.notIdealText}>Not Ideal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftContent: {
    flex: 1,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
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
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  scoreCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  notIdealBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFC107',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  notIdealText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProductCard;
