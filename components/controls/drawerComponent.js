import React, { Component } from 'react';
import { View } from 'react-native';
import { Drawer, Title } from 'react-native-paper';
import FontAwesomeVectorIcon from 'react-native-vector-icons/FontAwesome';
import EntypoVectorIcon from 'react-native-vector-icons/Entypo';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as RNLocalize from 'react-native-localize';
import Share from 'react-native-share';
import * as Colors from '../colors/brandingColors';
import drawerComponentStyles from '../styles/drawerComponentStyles';
import { setI18nConfig, translate } from '../../translations/translationHelper';
import * as TranslationKeys from '../../translations/translationKeys';
import * as Pages from '../../models/constants/pagesDefines';

const shareOptions = {
  title: 'Share via',
  message: 'E-commerce share message',
  url: 'http://34.73.95.65/',
  subject: 'Shop',
};

class DrawerComponent extends Component {
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

  render() {
    return (
      <DrawerContentScrollView>
        <View style={drawerComponentStyles.topSection}>
          <Title style={drawerComponentStyles.topTitle}>
            {`${translate(TranslationKeys.ECOMMERCE)}\n${translate(TranslationKeys.STORE)}`}
          </Title>
        </View>
        <View style={drawerComponentStyles.divider} />
        <View style={drawerComponentStyles.drawerContent}>
          <Drawer.Section title={translate(TranslationKeys.MY_ACCOUNT)}>
            <DrawerItem
              icon={({ size }) => (
                <FontAwesomeVectorIcon
                  name="user"
                  size={size}
                  color={Colors.Blue1}
                />
              )}
              label={translate(TranslationKeys.MY_PROFILE)}
              labelStyle={drawerComponentStyles.menuTitle}
              onPress={() => {
                const { navigation } = this.props;
                navigation.navigate(Pages.MY_PROFILE_PAGE);
              }}
            />
            <DrawerItem
              icon={({ size }) => (
                <FontAwesomeVectorIcon
                  name="heart"
                  size={size}
                  color={Colors.Blue1}
                />
              )}
              label={translate(TranslationKeys.MY_WISH_LIST)}
              labelStyle={drawerComponentStyles.menuTitle}
              onPress={() => { }}
            />
            <DrawerItem
              icon={({ size }) => (
                <FontAwesomeVectorIcon
                  name="shopping-cart"
                  size={size}
                  color={Colors.Blue1}
                />
              )}
              label={translate(TranslationKeys.MY_CART)}
              labelStyle={drawerComponentStyles.menuTitle}
              onPress={() => { }}
            />
            <DrawerItem
              icon={({ size }) => (
                <FontAwesomeVectorIcon
                  name="list-alt"
                  size={size}
                  color={Colors.Blue1}
                />
              )}
              label={translate(TranslationKeys.MY_ORDERS)}
              labelStyle={drawerComponentStyles.menuTitle}
              onPress={() => {
                const { navigation } = this.props;
                navigation.navigate(Pages.MY_ORDERS_PAGE);
              }}
            />
          </Drawer.Section>
          <Drawer.Section title={translate(TranslationKeys.SUPPORT)}>
            <DrawerItem
              icon={({ size }) => (
                <EntypoVectorIcon
                  name="mail"
                  size={size}
                  color={Colors.Blue1}
                />
              )}
              label={translate(TranslationKeys.EMAIL)}
              labelStyle={drawerComponentStyles.menuTitle}
              onPress={() => { }}
            />
            <DrawerItem
              icon={({ size }) => (
                <FontAwesomeVectorIcon
                  name="phone"
                  size={size}
                  color={Colors.Blue1}
                />
              )}
              label={translate(TranslationKeys.CALL)}
              labelStyle={drawerComponentStyles.menuTitle}
              onPress={() => { }}
            />
          </Drawer.Section>
          <Drawer.Section title={translate(TranslationKeys.OTHERS)}>
            <DrawerItem
              icon={({ size }) => (
                <EntypoVectorIcon
                  name="share"
                  size={size}
                  color={Colors.Blue1}
                />
              )}
              labelStyle={drawerComponentStyles.menuTitle}
              label={translate(TranslationKeys.SHARE)}
              onPress={() => {
                Share.open(shareOptions);
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    );
  }
}

export default (DrawerComponent);
