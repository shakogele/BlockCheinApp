import React, { Component } from "react";
import { View, Text, Alert, ScrollView, Image } from "react-native";
import { Navigation } from 'react-native-navigation';

import gotoScreen from '../../components/UI/GotoScreen/gotoScreen';
import DsproIcons from '../../components/UI/DsproIcons/DsproIcons';
import ClickableElement from '../../components/UI/ClickableElement/ClickableElement';

import styles from './sideDrawerStyles';
import { sideDrawerScreenOptions } from './sideDrawerScreenOptions';

import logoImg from '../../assets/images/logo.png';

class SideDrawer extends Component {

  constructor(props){
    super(props);
    this.state = {
      settingsExpanded: false
    }
  };

  toggleSettings = () => {
      this.setState(prevState =>{
        return {
          ...this.prevState,
          settingsExpanded : !prevState.settingsExpanded
        }
      });
  };

  static options(passProps) {
    return sideDrawerScreenOptions;
  };

  closeSideBar = () => {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false
        }
      }
    })
  };

  navigateTo = (screen) => {
    gotoScreen('RegistrationScreen', screen);
  };

  logoutFunction(){
    this.props.authLogout();
    this.closeSideBar();
  };

  logOut = () => {

    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.logoutFunction()},
      ],
      {cancelable: true},
    );

  };

  static options(passProps) {
    return {
      topBar: {
        visible: false
      }
    };
  };

  render() {


    const closeMenuIconButton = <ClickableElement
                                    onPress={() => this.closeSideBar()}
                                    inner={(
                                      <View style={styles.closeMenuIconContainer}>
                                        <DsproIcons
                                            icon="clear"
                                            width={20}
                                            height={20}
                                            color="#f8a11b"
                                            strokeColor="#f8a11b"
                                            fillColor="#f8a11b"
                                            strokeWidth={0.5} />
                                      </View>
                                    )}
                                  />;

    return (
      <View
        style={styles.container}>
        <View style={styles.sideMenuTopBar}>
          <View style={styles.logoView}>
            <Image source={logoImg} style={styles.logoImage} />
          </View>
          <View style={styles.hamburgerButtonView}>
            {closeMenuIconButton}
          </View>
        </View>
        <ScrollView>

          <ClickableElement
            onPress={() => this.navigateTo('BlockChainPortfolioApp.AddCurrencyScreen')}
            inner={(
              <View style={styles.drawerItem}>
                <View style={styles.iconsView}>
                  <DsproIcons
                    icon="phone"
                    width={20}
                    height={20}
                    color="#f0f0f1"
                    strokeColor="#f0f0f1"
                    fillColor="#f0f0f1"
                    style={styles.drawerItemIcon}
                    strokeWidth={0.5} />
                </View>
                <View style={styles.textView}>
                  <Text style={styles.buttonText}>Add Currency</Text>
                </View>
              </View>
            )}
          />

          <ClickableElement
            onPress={() => this.navigateTo('BlockChainPortfolioApp.MyCurrenciesScreen')}
            inner={(
              <View style={styles.drawerItem}>
                <View style={styles.iconsView}>
                  <DsproIcons
                    icon="phone"
                    width={20}
                    height={20}
                    color="#f0f0f1"
                    strokeColor="#f0f0f1"
                    fillColor="#f0f0f1"
                    style={styles.drawerItemIcon}
                    strokeWidth={0.5} />
                </View>
                <View style={styles.textView}>
                  <Text style={styles.buttonText}>My Currencies</Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

export default SideDrawer;
