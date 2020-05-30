import React, { Component } from 'react';
import {
  View, FlatList, ActivityIndicator, Vibration
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NetInfo from '@react-native-community/netinfo';
import myProfilePageStyles from './styles/myProfilePageStyles';
import fetchData from '../actions/myProfileActions';
import * as Pages from '../models/constants/pagesDefines';
import * as Colors from './colors/brandingColors';
import CategoryRow from './controls/myProfile/categoryRow';
import CategoryListRow from './controls/myProfile/categoryListRow';
import InternetWarningDialog from './dialogs/InternetWarningDialog';

class MyProfilePage extends Component {
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

  onProductClicked = (item) => {
    const { navigation } = this.props;
    navigation.navigate(Pages.PRODUCT_DETAILS, item);
  }

  fetchData() {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        const { actions } = this.props;
        actions.fetchData();
      } else {
        this.setState({
          isModalVisible: true
        });
        Vibration.vibrate();
      }
    });
  }

  renderCategoryRow = (item, index) => {
    const { categories } = this.props;

    return (
      <CategoryRow categoriesLength={categories.length} item={item} index={index} />
    );
  }

  renderCategoryListRow = (category, index) => {
    const { categoriesList } = this.props;

    return (
      <CategoryListRow
        categoriesListLength={categoriesList.length}
        category={category}
        index={index}
        productClicked={this.onProductClicked}
      />
    );
  }

  renderPage(isMyProfileLoaded, categories, categoriesList) {
    if (isMyProfileLoaded) {
      return (
        <View style={myProfilePageStyles.homePage}>
          <View style={myProfilePageStyles.categoriesContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={({ item, index }) => this.renderCategoryRow(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={myProfilePageStyles.categoriesListContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={categoriesList}
              renderItem={({ item, index }) => this.renderCategoryListRow(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      );
    }

    return (
      <View style={myProfilePageStyles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.Blue1} />
      </View>
    );
  }

  render() {
    const { isMyProfileLoaded, categories, categoriesList } = this.props;
    const { isModalVisible } = this.state;

    return (
      <View style={myProfilePageStyles.container}>
        {this.renderPage(isMyProfileLoaded, categories, categoriesList)}
        <View style={myProfilePageStyles.warningDialogContainer}>
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
  categories: state.myProfile.categories,
  isMyProfileLoaded: state.myProfile.isMyProfileLoaded,
  categoriesList: state.myProfile.categoriesList,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchData }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfilePage);
