import BarcodeScanning from '@react-native-ml-kit/barcode-scanning';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import ImageLabeling from '@react-native-ml-kit/image-labeling';

export default class MlKitUtil {
  static async scanBarcode(imageURL: string) {
    try {
      const barcodes = await BarcodeScanning.scan(imageURL);
      return barcodes;
    } catch (error) {
      return error;
    }
  }

	static async detectText(imageURL: string) {
		try {
			const response = await TextRecognition.recognize(imageURL);
			return response;
		} catch (error) {
			return error;
		}
	}

	static async detectLabels(imageURL: string) {
		try {
			const response = await ImageLabeling.label(imageURL);
			return response;

		} catch (error) {
			return error;
		}
	}


}
