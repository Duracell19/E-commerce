import React, { PureComponent } from 'react';
import {
  View, Text, FlatList, TouchableOpacity
} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import orderDetailsPageStyles from './styles/orderDetailsPageStyles';
import OrderDetailsProductRow from './controls/orderDetails/orderDetailsProductRow';
import { setI18nConfig, translate } from '../translations/translationHelper';
import * as TranslationKeys from '../translations/translationKeys';
import * as Pages from '../models/constants/pagesDefines';

class OrderDetailsPage extends PureComponent {
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

  shippingAddressPressed = () => {
    const { navigation } = this.props;
    navigation.navigate(Pages.SHIPPING_ADDRESS);
  }

  renderOrderDetailsProductRow = (product) => (
    <OrderDetailsProductRow
      product={product}
    />
  )

  render() {
    const { route } = this.props;

    if (route.params !== null) {
      return (
        <View style={orderDetailsPageStyles.container}>
          <FlatList
            ListHeaderComponent={(
              <>
                <View style={orderDetailsPageStyles.orderInfoContainer}>
                  <View style={orderDetailsPageStyles.orderInfoRowContainer}>
                    <Text style={orderDetailsPageStyles.orderInfoTitle}>
                      {translate(TranslationKeys.ORDER_ID)}
                      :
                    </Text>
                    <Text style={orderDetailsPageStyles.orderInfoValue}>
                      OD3489488519356
                    </Text>
                  </View>
                  <View style={orderDetailsPageStyles.orderInfoRowContainer}>
                    <Text style={orderDetailsPageStyles.orderInfoTitle}>
                      {translate(TranslationKeys.ORDER_DATE)}
                      :
                    </Text>
                    <Text style={orderDetailsPageStyles.orderInfoValue}>
                      05/17/2020 10:10:34
                    </Text>
                  </View>
                  <View style={orderDetailsPageStyles.orderInfoRowContainer}>
                    <Text style={orderDetailsPageStyles.orderInfoTitle}>
                      {translate(TranslationKeys.TOTAL_AMOUNT)}
                      :
                    </Text>
                    <Text style={orderDetailsPageStyles.orderInfoValue}>
                      $ 380.44
                    </Text>
                  </View>
                  <View style={orderDetailsPageStyles.orderInfoRowContainer}>
                    <Text style={orderDetailsPageStyles.orderInfoTitle}>
                      {translate(TranslationKeys.PAYMENT_MODE)}
                      :
                    </Text>
                    <Text style={orderDetailsPageStyles.orderInfoValue}>
                      COD
                    </Text>
                  </View>
                  <View style={orderDetailsPageStyles.orderInfoRowContainer}>
                    <Text style={orderDetailsPageStyles.orderInfoTitle}>
                      {translate(TranslationKeys.SHIPPING_ADDRESS)}
                      :
                    </Text>
                    <TouchableOpacity onPress={this.shippingAddressPressed}>
                      <Text style={orderDetailsPageStyles.orderInfoValue}>
                        Belarus, Brest, 224033
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={orderDetailsPageStyles.orderInfoRowContainer}>
                    <Text style={orderDetailsPageStyles.orderInfoTitle}>
                      {translate(TranslationKeys.STATUS)}
                      :
                    </Text>
                    <Text style={[orderDetailsPageStyles.orderInfoValue,
                      orderDetailsPageStyles.orderInfoValueStatus]}
                    >
                      In-Processing
                    </Text>
                  </View>
                </View>
                <View style={orderDetailsPageStyles.orderedProductsPageSeparator} />
                <View style={orderDetailsPageStyles.orderedProductsContainer}>
                  <Text style={orderDetailsPageStyles.orderProductsTitle}>
                    {translate(TranslationKeys.ORDERED_PRODUCTS)}
                    :
                  </Text>
                </View>
              </>
            )}
            showsVerticalScrollIndicator={false}
            data={route.params.products}
            renderItem={({ item }) => this.renderOrderDetailsProductRow(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
    return <View style={orderDetailsPageStyles.container} />;
  }
}

export default (OrderDetailsPage);
