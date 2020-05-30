import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { format } from 'react-string-format';
import * as RNLocalize from 'react-native-localize';
import orderDetailsPageStyles from '../../styles/orderDetailsPageStyles';
import * as AppDefinies from '../../../models/constants/appDefinies';
import { setI18nConfig, translate } from '../../../translations/translationHelper';
import * as TranslationKeys from '../../../translations/translationKeys';

class OrderDetailsProductRow extends Component {
  constructor(props) {
    super(props);
    setI18nConfig();
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  renderOrderDetailsProductSeparator = () => (
    <View style={orderDetailsPageStyles.orderProductsSeparator} />
  )

  render() {
    const { product } = this.props;
    return (
      <View style={orderDetailsPageStyles.orderProductsContainer}>
        <View style={orderDetailsPageStyles.orderProductsRowContainer}>
          <View>
            <Text style={orderDetailsPageStyles.orderProductsInfo}>{product.name}</Text>
            <Text style={orderDetailsPageStyles.orderProductsInfo}>
              {translate(TranslationKeys.PRICE)}
              :
              {' '}
              {product.price}
            </Text>
            <Text style={orderDetailsPageStyles.orderProductsInfo}>
              {translate(TranslationKeys.MODEL)}
              :
              {' '}
              {product.model}
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: format(AppDefinies.THUMB_URL, product.thumb) }}
              style={orderDetailsPageStyles.orderProductsImage}
            />
            <Text style={orderDetailsPageStyles.orderProductsInfo}>
              {translate(TranslationKeys.QTY)}
              :
              {' '}
              {product.quantity}
            </Text>
          </View>
        </View>
        {this.renderOrderDetailsProductSeparator()}
      </View>
    );
  }
}

export default (OrderDetailsProductRow);
