import { StyleSheet } from 'react-native';
import * as Colors from '../colors/brandingColors';

const myProfilePageStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  warningDialogContainer: {
    position: 'absolute'
  },
  homePage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.Gray1
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'column'
  },
  categoriesContainer: {
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: Colors.White
  },
  categoriesListContainer: {
    backgroundColor: Colors.White,
    marginTop: 20,
    flex: 1
  },
  rowCategoryContainer: {
    flexDirection: 'row'
  },
  rowCategoryContantContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.Black
  },
  categoryTitle: {
    fontSize: 18
  },
  categorySeparator: {
    width: 10,
  },
  categoryListSeparator: {
    height: 15,
  },
  categoryListHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'
  },
  categoryListTitle: {
    color: Colors.Blue3,
    fontSize: 20,
  },
  viewAllButton: {
    height: 25,
    padding: 15,
    backgroundColor: Colors.Blue3,
    justifyContent: 'center'
  },
  viewAllButtonTitle: {
    color: Colors.White,
    fontSize: 13,
    textAlign: 'center'
  },
  categoryListProductSeparator: {
    height: 20
  },
  categorylistProductImageContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 1
  },
  categorylistProductImage: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default myProfilePageStyles;
