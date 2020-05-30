import { StyleSheet } from 'react-native';
import * as Colors from '../colors/brandingColors';

const drawerComponentStyles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  topSection: {
    padding: 30,
  },
  topTitle: {
    fontSize: 30,
    color: Colors.Blue1
  },
  menuTitle: {
    color: Colors.Black
  },
  divider: {
    height: 1,
    backgroundColor: Colors.Blue1
  }
});

export default drawerComponentStyles;
