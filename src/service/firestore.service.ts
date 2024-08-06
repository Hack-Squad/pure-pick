import firestore from '@react-native-firebase/firestore';

class FirestoreService {
	async getCollections(collection: string, limit: number = 10, lastDoc: any = null) {
		try {
			let collectionRef = firestore().collection(collection).limit(limit);

			if (lastDoc) {
				collectionRef = collectionRef.startAfter(lastDoc);
			}

			const querySnapshot = await collectionRef.get();
			const dataList = querySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
			const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

			return { dataList, lastVisible };
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
