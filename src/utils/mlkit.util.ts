import BarcodeScanning from '@react-native-ml-kit/barcode-scanning';

export default class MlKitUtil {
  static async scanBarcode(imageURL: string) {
    try {
      const barcodes = await BarcodeScanning.scan(imageURL);
      return barcodes;
    } catch (error) {
      return error;
    }
  }
}
