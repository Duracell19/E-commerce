import { format } from 'react-string-format';
import * as RededucersDefinitions from '../models/constants/reducersDefinitions';
import * as AppDefinies from '../models/constants/appDefinies';

function saveCategories(categories) {
  return {
    type: RededucersDefinitions.CATEGORIES,
    categories
  };
}

function saveCategoriesList(categoriesList) {
  return {
    type: RededucersDefinitions.CATEGORIES_LIST,
    categoriesList
  };
}

function setLoadingState(isMyProfileLoaded) {
  return {
    type: RededucersDefinitions.MY_PROFILE_IS_LOADED,
    isMyProfileLoaded
  };
}

export default function fetchData() {
  return async (dispatch) => {
    try {
      await dispatch(setLoadingState(false));

      const subCategories = await fetchSubCategories(0);
      await dispatch(saveCategories(subCategories));

      if (subCategories !== null && subCategories.length > 0) {
        const categoriesList = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < subCategories.length; i++) {
          const category = subCategories[i];
          // eslint-disable-next-line no-await-in-loop
          const categoryProducts = await fetchProductsbyFilter(category.category_id, 4);
          if (categoryProducts !== null && categoryProducts.length > 0) {
            categoriesList.push({ title: category.name, products: categoryProducts });
          }
        }
        await dispatch(saveCategoriesList(categoriesList));
      }

      await dispatch(setLoadingState(true));

      return true;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}

async function fetchSubCategories(categoryId) {
  try {
    const url = format(AppDefinies.CATEGORY_URL, categoryId);
    const categories = await fetch(url)
      .then((response) => response.json())
      .then((json) => json.subcategories)
      .catch((error) => {
        console.error(error);
      });

    return categories || [];
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchProductsbyFilter(categoryId, limit) {
  try {
    const url = format(AppDefinies.PRODUCT_BY_FILTER_URL, categoryId, limit);
    const products = await fetch(url)
      .then((response) => response.json())
      .then((json) => json.rows)
      .catch((error) => {
        console.error(error);
      });

    return products || [];
  } catch (error) {
    console.error(error);
    return null;
  }
}
