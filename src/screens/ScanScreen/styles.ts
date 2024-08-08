import {
  StyleSheet,
} from 'react-native';
import { normalize } from '../../styles';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#1E1E2E',
	},
	headerButtons: {
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-between',
		top: normalize(20),
		left: 20,
		right: 20,
		zIndex: 1,
	},
	cameraContainerPhoto: {
		height: "50%",
		width: "90%",
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: 'white',
	},
	cameraContainerBarcode: {
		height: "30%",
		width: "90%",	
		position: 'relative',
		borderWidth: 4,
		borderColor: 'white',
	},
	preview: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	instructions: {
		position: 'absolute',
		bottom: 200,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'white',
	},
	buttonContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		position: 'absolute',
		bottom: 30,
		left: 20,
		right: 20,
		backgroundColor: "#000000",
		padding: 6,
		gap: 2,
		borderRadius: 10,
	},
	button: {
		padding: 10,
		borderRadius: 10,
		width: "50%",
	},
	activeButton: {
		backgroundColor: '#4CAF50',
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
	},

	captureButtonContainer: {
		position: 'absolute',
		bottom: 110,
		alignItems: 'center',
  },
	captureButton: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: '#808080', // Grey color
		borderWidth: 5,
		borderColor: '#d3d3d3', // Light grey border
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 10,
		elevation: 5,
  },

});
