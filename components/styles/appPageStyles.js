import { StyleSheet } from 'react-native';
import * as Colors from '../colors/brandingColors';

const appPageStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.Blue1
  },
  headerTitleStyle: {
    fontStyle: 'italic',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default appPageStyles;
