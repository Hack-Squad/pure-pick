import React, {useEffect, useState} from 'react';
import ThemedBox from '../../components/ThemedBox';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ProductCard from '../../components/ProductCard';
import {RoutesEnum} from '../../constants/routes.contants';

import {firestoreService} from '../../service/firestore.service';
import {FirestoreCollectionsEnum} from '../../constants/firestore-collections.constants';
import {normalize} from '../../styles';

function ProductList({navigation}: {navigation: any}) {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [isMoreData, setIsMoreData] = useState(true);

  const limit = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    if (loading || !isMoreData) return;

    setLoading(true);

    const {dataList, lastVisible} = await firestoreService.getCollections(
      FirestoreCollectionsEnum.BRANDED_FOODS_US,
      limit,
      lastDoc,
    );
    if (dataList.length > 0) {
      setProducts((prevData: any) => [...prevData, ...dataList]);
      setLastDoc(lastVisible);
    } else {
      setIsMoreData(false);
    }
    setLoading(false);
  };

  const onProductPress = (product: any) => {
    navigation.navigate(RoutesEnum.PRODUCT_DETAILS, {product});
  };

  return (
    <ThemedBox style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}: {item: any}) => (
          <TouchableOpacity onPress={() => onProductPress(item)}>
            <ProductCard
              imageUrl={item?.image || null}
              brandName={item.brandOwner}
              productName={item.description}
              score={Math.floor(Math.random() * 100) + 1}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        onEndReached={fetchProducts}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={ItemSeparator}
      />
    </ThemedBox>
  );
}

export default ProductList;

const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: normalize(10),
    gap: normalize(10),
  },

  separator: {
    height: normalize(10), // Height of the gap between items
    backgroundColor: '#f0f0f0', // Color of the separator
  },
});