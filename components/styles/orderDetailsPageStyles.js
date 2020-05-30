import { StyleSheet } from 'react-native';
import * as Colors from '../colors/brandingColors';

const orderDetailsPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  orderInfoContainer: {
    padding: 15
  },
  orderInfoRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center'
  },
  orderInfoTitle: {
    fontSize: 20,
    color: Colors.Blue3,
  },
  orderInfoValue: {
    fontSize: 20,
    width: 200
  },
  orderInfoValueStatus: {
    color: Colors.Green
  },
  orderedProductsPageSeparator: {
    backgroundColor: Colors.Gray1,
    height: 20
  },
  orderedProductsContainer: {
    backgroundColor: Colors.White,
  },
  orderProductsTitle: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  orderProductsSeparator: {
    height: 1,
    backgroundColor: Colors.Black
  },
  orderProductsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    alignItems: 'center'
  },
  orderProductsInfo: {
    fontSize: 17,
    width: 300,
    marginBottom: 10
  },
  orderProductsImage: {
    width: 60,
    height: 60,
  },
  orderProductsContainer: {
    padding: 15
  }
});

export default orderDetailsPageStyles;
