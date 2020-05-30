import React, { Component } from 'react';
import {
  View, Vibration, ActivityIndicator, FlatList
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import myOrdersPageStyles from './styles/myOrdersPageStyles';
import { fetchData, getToken } from '../actions/myOrdersActions';
import { isTokenValid } from '../actions/appActions';
import InternetWarningDialog from './dialogs/InternetWarningDialog';
import * as Colors from './colors/brandingColors';
import * as Pages from '../models/constants/pagesDefines';
import OrderRow from './controls/myOrders/orderRow';

class MyOrdersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  onModalClosed = () => {
    this.setState({
      isModalVisible: false
    });
  }

  onTryAgainPressed = () => {
    this.setState({
      isModalVisible: false
    });

    this.fetchData();
  }

  onClickOrder= (order) => {
    const { navigation } = this.props;
    navigation.navigate(Pages.ORDER_DETAILS, order);
  }

  fetchData() {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        const { actions, navigation } = this.props;

        actions.getToken().then((token) => {
          actions.isTokenValid(token).then((isValid) => {
            if (!isValid) {
              navigation.navigate(Pages.LOG_IN_PAGE);
            } else {
              actions.fetchData();
            }
          });
        });
      } else {
        this.setState({
          isModalVisible: true
        });
        Vibration.vibrate();
      }
    });
  }

  renderOrderListRow = (order, index) => {
    const { orders } = this.props;

    return (
      <OrderRow
        ordersLength={orders.length}
        order={order}
        index={index}
        itemClicked={this.onClickOrder}
      />
    );
  }

  renderPage(isMyOrdersLoaded, orders) {
    if (isMyOrdersLoaded) {
      return (
        <View style={myOrdersPageStyles.homePage}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={orders}
            renderItem={({ item, index }) => this.renderOrderListRow(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }

    return (
      <View style={myOrdersPageStyles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.Blue1} />
      </View>
    );
  }

  render() {
    const { isMyOrdersLoaded, orders } = this.props;
    const { isModalVisible } = this.state;

    return (
      <View style={myOrdersPageStyles.container}>
        {this.renderPage(isMyOrdersLoaded, orders)}
        <View style={myOrdersPageStyles.warningDialogContainer}>
          <InternetWarningDialog
            isTryAgainVisible
            isModalVisible={isModalVisible}
            modalClosed={this.onModalClosed}
            tryAgainPressed={this.onTryAgainPressed}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.myOrders.orders,
  isMyOrdersLoaded: state.myOrders.isMyOrdersLoaded
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchData, getToken, isTokenValid }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersPage);
