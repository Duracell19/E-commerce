import React, { Component } from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  View, Animated, Easing, Vibration
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { initState } from '../actions/appActions';
import * as Pages from '../models/constants/pagesDefines';
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';
import MainPage from './MainPage';
import ProductDetailsPage from './ProductDetailsPage';
import appPageStyles from './styles/appPageStyles';
import * as Colors from './colors/brandingColors';
import * as AppDefinies from '../models/constants/appDefinies';
import InternetWarningDialog from './dialogs/InternetWarningDialog';
import ShippingAddressPage from './ShippingAddressPage';
import OrderDetailsPage from './OrderDetailsPage';

const Stack = createStackNavigator();

const navigTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
        {
          rotate: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
        {
          scale: next
            ? next.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.9],
            })
            : 1,
        },
      ],
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
      }),
    },
  }),
};

const appBarOptions = {
  headerStyle: appPageStyles.headerStyle,
  headerTintColor: Colors.White,
  headerTitleStyle: appPageStyles.headerTitleStyle,
  headerTitleAlign: 'center',
  ...navigTransition
};

class App extends Component {
  constructor(props) {
    super(props);

    this.spinValue = new Animated.Value(0);
    this.spin();

    this.state = {
      isModalVisible: false
    };
  }

  componentDidMount() {
    NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        this.setState({
          isModalVisible: true
        });
        Vibration.vibrate();
      }
    });

    const { actions } = this.props;
    actions.initState();
  }

  onModalClosed = () => {
    this.setState({
      isModalVisible: false
    });
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    ).start(() => this.spin());
  }

  renderPage(tokenIsLoaded, authToken) {
    if (tokenIsLoaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={authToken !== null && authToken !== '' ? Pages.MAIN_PAGE : Pages.LOG_IN_PAGE}>
            <Stack.Screen
              name={Pages.SIGN_UP_PAGE}
              component={SignUpPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Pages.LOG_IN_PAGE}
              component={LogInPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Pages.MAIN_PAGE}
              component={MainPage}
              options={appBarOptions}
            />
            <Stack.Screen
              name={Pages.PRODUCT_DETAILS}
              component={ProductDetailsPage}
              options={appBarOptions}
            />
            <Stack.Screen
              name={Pages.ORDER_DETAILS}
              component={OrderDetailsPage}
              options={appBarOptions}
            />
            <Stack.Screen
              name={Pages.SHIPPING_ADDRESS}
              component={ShippingAddressPage}
              options={appBarOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return this.renderLoading();
  }

  renderLoading() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={appPageStyles.loadingContainer}>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ rotate: spin }]
          }}
          source={{ uri: AppDefinies.REACT_IMAGE }}
        />
      </View>
    );
  }

  render() {
    const { isModalVisible } = this.state;
    const { tokenIsLoaded, authToken } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {this.renderPage(tokenIsLoaded, authToken)}
        <View style={{ position: 'absolute' }}>
          <InternetWarningDialog
            isTryAgainVisible={false}
            isModalVisible={isModalVisible}
            modalClosed={this.onModalClosed}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  authToken: state.app.authToken,
  tokenIsLoaded: state.app.tokenIsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ initState }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default from '../storybook';
