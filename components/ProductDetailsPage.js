import React, { Component } from 'react';
import {
  View, Image, TouchableOpacity, Text, Alert
} from 'react-native';
import { format } from 'react-string-format';
import * as RNLocalize from 'react-native-localize';
import productDetailsStyles from './styles/productDetailsStyles';
import * as AppDefinies from '../models/constants/appDefinies';
import { setI18nConfig, translate } from '../translations/translationHelper';
import * as TranslationKeys from '../translations/translationKeys';
import NotificationService from '../services/NotificationService';
import ToastComponent from './controls/toastComponent';

class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);
    setI18nConfig();

    this.notification = new NotificationService(this.onNotification);
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  // eslint-disable-next-line no-unused-vars
  onNotification = (notif) => {
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  addProductToCart = () => {
    const { route } = this.props;
    this.notification.localNotification(route.params.name,
      translate(TranslationKeys.PRODUCT_HAS_BEEN_ADDED_TO_THE_CART));

    ToastComponent.show(translate(TranslationKeys.PRODUCT_HAS_BEEN_ADDED_TO_THE_CART),
      ToastComponent.SHORT);
  }

  // eslint-disable-next-line class-methods-use-this
  handlePerm(perms) {
    Alert.alert('Permissions', JSON.stringify(perms));
  }

  render() {
    const { route } = this.props;

    if (route.params !== null) {
      return (
        <View style={productDetailsStyles.productDetailsPage}>
          <View style={productDetailsStyles.carouselImageContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: format(AppDefinies.THUMB_URL, route.params.thumb) }}
              style={productDetailsStyles.carouselImage}
            />
            <TouchableOpacity
              style={productDetailsStyles.addToCartButton}
              onPress={this.addProductToCart}
            >
              <Text style={productDetailsStyles.addToCartButtonTitle}>
                {
                  translate(TranslationKeys.ADD_TO_CART)
                }
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return <View style={productDetailsStyles.productDetailsPage} />;
  }
}

export default (ProductDetailsPage);
