import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { format } from 'react-string-format';
import myProfilePageStyles from '../../styles/myProfilePageStyles';
import * as AppDefinies from '../../../models/constants/appDefinies';

class CategoryRow extends Component {
  renderCategorySeparator = () => (
    <View style={myProfilePageStyles.categorySeparator} />
  )

  render() {
    const { index, item, categoriesLength } = this.props;
    return (
      <View style={myProfilePageStyles.rowCategoryContainer}>
        <View style={myProfilePageStyles.rowCategoryContantContainer}>
          <Image
            source={{ uri: format(AppDefinies.THUMB_URL, item.thumb) }}
            style={myProfilePageStyles.categoryImage}
          />
          <Text style={myProfilePageStyles.categoryTitle} numberOfLines={1}>{item.name}</Text>
        </View>
        {(index !== categoriesLength - 1) && this.renderCategorySeparator()}
      </View>
    );
  }
}

export default (CategoryRow);
