import { StyleSheet } from 'react-native';
import * as Colors from '../colors/brandingColors';

const internetWarningStyles = StyleSheet.create({
  centeredContentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.White,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  verticalSeparatedView: {
    height: 25
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  description: {
    fontSize: 20,
    width: 250,
    textAlign: 'center'
  },
  button: {
    height: 40,
    backgroundColor: Colors.Blue3,
    justifyContent: 'center',
    width: 120
  },
  buttonTitle: { color: Colors.White, fontSize: 20, textAlign: 'center' },
});

export default internetWarningStyles;
