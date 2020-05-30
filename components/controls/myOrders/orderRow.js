import React, { Component } from 'react';
import {
  View, FlatList, Text, TouchableOpacity
} from 'react-native';
import { format } from 'react-string-format';
import * as RNLocalize from 'react-native-localize';
import myOrdersPageStyles from '../../styles/myOrdersPageStyles';
import OrderProductsRow from './orderProductsRow';
import { setI18nConfig, translate } from '../../../translations/translationHelper';
import * as TranslationKeys from '../../../translations/translationKeys';
import * as AppDefinies from '../../../models/constants/appDefinies';

class OrderRow extends Component {
  constructor(props) {
    super(props);
    setI18nConfig();

    this.onClickItem = this.onClickItem.bind(this);
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  onClickItem(item) {
    const { itemClicked } = this.props;
    itemClicked(item);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  renderOrdersSeparator = () => (
    <View style={myOrdersPageStyles.orderSeparator} />
  )

  renderOrderProductsSeparator = () => (
    <View style={myOrdersPageStyles.orderProductSeparator} />
  )

  renderOrderProductsListRow = (product) => (
    <OrderProductsRow product={product} />
  )

  render() {
    const { index, order, ordersLength } = this.props;
    const date = format(AppDefinies.DATE_FORMAT, translate(TranslationKeys.DATE), '05/17/2020 10:10:34');
    return (
      <View>
        <View
          style={myOrdersPageStyles.ordersContainerRow}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={order.products}
            renderItem={({ item }) => this.renderOrderProductsListRow(item)}
            keyExtractor={(item, i) => i.toString()}
          />
          <View style={myOrdersPageStyles.orderBottomRow}>
            <TouchableOpacity onPress={() => this.onClickItem(order)}>
              <Text style={myOrdersPageStyles.orderDetailsTitle}>
                {
                  translate(TranslationKeys.VIEW_ORDER_DETAILS)
                }
              </Text>
            </TouchableOpacity>
            <Text style={myOrdersPageStyles.orderDateTitle}>
              {
                date
              }
            </Text>
          </View>
        </View>
        {(index !== ordersLength - 1) && this.renderOrdersSeparator()}
      </View>
    );
  }
}

export default (OrderRow);
