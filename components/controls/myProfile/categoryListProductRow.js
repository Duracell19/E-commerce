import React, { Component } from 'react';
import {
  View, TouchableWithoutFeedback, Image
} from 'react-native';
import { format } from 'react-string-format';
import myProfilePageStyles from '../../styles/myProfilePageStyles';
import * as AppDefinies from '../../../models/constants/appDefinies';

class CategoryListProductRow extends Component {
  constructor(props) {
    super(props);
    this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem(item) {
    const { itemClicked } = this.props;
    itemClicked(item);
  }

  renderCategoryListProductSeparator = () => (
    <View style={myProfilePageStyles.categoryListProductSeparator} />
  )

  render() {
    const { item, index, itemsCount } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => this.onClickItem(item)}>
        <View style={myProfilePageStyles.categorylistProductImageContainer}>
          <Image
            resizeMode="contain"
            source={{ uri: format(AppDefinies.THUMB_URL, item.thumb) }}
            style={myProfilePageStyles.categorylistProductImage}
          />
          {(index !== itemsCount - 1) && this.renderCategoryListProductSeparator()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default (CategoryListProductRow);
