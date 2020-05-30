import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { format } from 'react-string-format';
import myOrdersPageStyles from '../../styles/myOrdersPageStyles';
import * as AppDefinies from '../../../models/constants/appDefinies';

class OrderProductsRow extends Component {
  renderOrderProductsSeparator = () => (
    <View style={myOrdersPageStyles.orderProductsSeparator} />
  )

  render() {
    const { product } = this.props;
    return (
      <View>
        <View style={myOrdersPageStyles.orderProductsRowContainer}>
          <Text style={myOrdersPageStyles.orderProductsTitle}>{product.name}</Text>
          <Image
            source={{ uri: format(AppDefinies.THUMB_URL, product.thumb) }}
            style={myOrdersPageStyles.orderProductsImage}
          />
        </View>
        {this.renderOrderProductsSeparator()}
      </View>
    );
  }
}

export default (OrderProductsRow);
