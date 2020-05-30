import { StyleSheet } from 'react-native';
import * as Colors from '../colors/brandingColors';

const myOrdersPageStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  warningDialogContainer: {
    position: 'absolute'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White
  },
  homePage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
    padding: 10
  },
  ordersContainerRow: {
    padding: 15,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 4,
      height: 6
    },
    shadowRadius: 12,
    shadowOpacity: 0.5,
    elevation: 2,
    margin: 5,
    overflow: 'hidden',
  },
  orderSeparator: {
    height: 15
  },
  orderProductsSeparator: {
    height: 1,
    backgroundColor: Colors.Black
  },
  orderProductsTitle: {
    fontSize: 17,
    width: 300
  },
  orderProductsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
    alignItems: 'center'
  },
  orderProductsImage: {
    width: 60,
    height: 60,
  },
  orderDetailsTitle: {
    fontSize: 18,
    color: Colors.Blue3,
  },
  orderBottomRow: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  orderDateTitle: {
    fontSize: 13,
    color: Colors.Gray2
  }
});

export default myOrdersPageStyles;
