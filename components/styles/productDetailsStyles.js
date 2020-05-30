import { StyleSheet } from 'react-native';
import * as Colors from '../colors/brandingColors';

const productDetailsStyles = StyleSheet.create({
  productDetailsPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.Gray1
  },
  carouselImage: {
    width: 150,
    height: 150
  },
  carouselImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 250
  },
  addToCartButton: {
    height: 25,
    padding: 15,
    marginTop: 50,
    backgroundColor: Colors.Blue3,
    justifyContent: 'center'
  },
  addToCartButtonTitle: {
    color: Colors.White,
    fontSize: 13,
    textAlign: 'center'
  },
});

export default productDetailsStyles;
