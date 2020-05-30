import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, FlatList
} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import myProfilePageStyles from '../../styles/myProfilePageStyles';
import { setI18nConfig, translate } from '../../../translations/translationHelper';
import * as TranslationKeys from '../../../translations/translationKeys';
import CategoryListProductRow from './categoryListProductRow';

class CategoryListRow extends Component {
  constructor(props) {
    super(props);
    setI18nConfig();
    this.onClickProduct = this.onClickProduct.bind(this);
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  onClickProduct(item) {
    const { productClicked } = this.props;
    productClicked(item);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  renderCategoryListSeparator = () => (
    <View style={myProfilePageStyles.categoryListSeparator} />
  )

  renderCategoryListProductRow = (item, index, itemsCount) => (
    (
      <CategoryListProductRow
        item={item}
        index={index}
        itemsCount={itemsCount}
        itemClicked={this.onClickProduct}
      />
    )
  )

  render() {
    const { categoriesListLength, category, index } = this.props;
    return (
      <View>
        <View style={myProfilePageStyles.categoryListHeaderContainer}>
          <Text
            style={myProfilePageStyles.categoryListTitle}
            numberOfLines={1}
          >
            {category.title}
          </Text>
          <TouchableOpacity style={myProfilePageStyles.viewAllButton}>
            <Text style={myProfilePageStyles.viewAllButtonTitle}>
              {
                translate(TranslationKeys.VIEW_ALL)
              }
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={category.products}
          renderItem={
            // eslint-disable-next-line max-len
            ({ item, i }) => this.renderCategoryListProductRow(item.cell, i, category.products.length)
          }
          keyExtractor={(item, i) => i.toString()}
        />
        {(index !== categoriesListLength - 1) && this.renderCategoryListSeparator()}
      </View>
    );
  }
}

export default (CategoryListRow);
