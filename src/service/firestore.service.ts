import firestore from '@react-native-firebase/firestore';

class FirestoreService {
  async getCollections(document: string) {
    try {
      const collectionRef = firestore().collection('brandedFoods_US').limit(5);
      const querySnapshot = await collectionRef.get();
      const dataList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dataList;
    } catch (error) {
      console.error('Error fetching data from Firestore: ', error);
    }
  }

  async getDocument(collection: string, document: string) {
    try {

	  const documentRef = firestore().collection(collection).doc(document);
	  const doc = await documentRef.get();
	  if (!doc.exists) {
		console.log('No such document!');
		return null;
	  } else {
		return doc.data();
	  }
	} catch (error) {
	  console.error('Error fetching data from Firestore: ', error);
	}
  }
}

export const firestoreService = new FirestoreService();
