import React from 'react';
import { AppRegistry, Platform, View, Text } from 'react-native';
import { Navigation } from "react-native-navigation";

import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import AddCurrencyScreen from './src/screens/AddCurrencyScreen/AddCurrencyScreen';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import MyCurrenciesScreen from './src/screens/MyCurrenciesScreen/MyCurrenciesScreen';

Navigation.registerComponent(`BlockChainPortfolioApp.WelcomeScreen`, () => WelcomeScreen);
Navigation.registerComponent(`BlockChainPortfolioApp.AddCurrencyScreen`, () => AddCurrencyScreen);
Navigation.registerComponent(`BlockChainPortfolioApp.SideDrawer`, () => SideDrawer);
Navigation.registerComponent(`BlockChainPortfolioApp.MyCurrenciesScreen`, () => MyCurrenciesScreen);

export default () => Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    }
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'BlockChainPortfolioApp.SideDrawer',
            id: 'leftSideMenu',
            passProps: {
              text: 'This is a left side menu screen'
            },
            options: {
              topBar: {
                visible: false
              }
            }
          }
        },
        center: {
          stack:{
            id: 'WelcomeScreen',
            children: [
              {
                component: {
                  name: 'BlockChainPortfolioApp.AddCurrencyScreen'
                }
              }
            ]
          }
        }
      },
    }
  });
});
