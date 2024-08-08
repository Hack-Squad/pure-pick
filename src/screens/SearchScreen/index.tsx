import React, { useEffect } from 'react';
import ThemedBox from '../../components/ThemedBox';
import {Text, TextInput, View, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductCard from '../../components/ProductCard';
import {FirestoreCollectionsEnum} from '../../constants/firestore-collections.constants';
import {firestoreService} from '../../service/firestore.service';
import {normalize} from '../../styles';

function SearchScreen() {
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [lastDoc, setLastDoc] = React.useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const {documents, lastVisible} = await firestoreService.searchDocuments(
        FirestoreCollectionsEnum.BRANDED_FOODS_US,
        'description',
        searchText,
        10,
        lastDoc,
      );
      console.log(documents);
      setSearchResults(documents);
      setLastDoc(lastVisible);
    } catch (error) {
      console.error('Error fetching data from Firestore: ', error);
    }
    setLoading(false);
  };

	useEffect(()=>{
		//debounce the search
		const timeout = setTimeout(()=>{
			handleSearch();
		},1000)
		return () => clearTimeout(timeout)
	},[searchText])

  return (
    <ThemedBox style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput placeholder="Product Search" onChangeText={setSearchText} />
        <Icon name="search" size={20} />
      </View>
    </ThemedBox>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: '90%',
    position: 'absolute',
    top: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: normalize(10),
    paddingHorizontal: normalize(10),
    marginHorizontal: normalize(10),
    marginVertical: normalize(10),
  },
});
