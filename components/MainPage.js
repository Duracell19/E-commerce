import React, { PureComponent } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Pages from '../models/constants/pagesDefines';
import MyProfilePage from './MyProfilePage';
import MyOrdersPage from './MyOrdersPage';
import DrawerComponent from './controls/drawerComponent';

const Drawer = createDrawerNavigator();

class MainPage extends PureComponent {
  render() {
    return (
      <Drawer.Navigator
        initialRouteName={Pages.MY_PROFILE_PAGE}
        drawerContent={
          () => {
            const { navigation } = this.props;
            return (<DrawerComponent navigation={navigation} />);
          }
        }
      >
        <Drawer.Screen name={Pages.MY_PROFILE_PAGE} component={MyProfilePage} />
        <Drawer.Screen name={Pages.MY_ORDERS_PAGE} component={MyOrdersPage} />
      </Drawer.Navigator>
    );
  }
}

export default (MainPage);
