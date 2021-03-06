import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import styles from './welcomeScreenStyles';
import {welcomeScreenOptions} from './welcomeScreenOptions';

import CustomHeader from '../../components/UI/CustomHeader/CustomHeader';
import DsproIcons from '../../components/UI/DsproIcons/DsproIcons';
import ClickableElement from '../../components/UI/ClickableElement/ClickableElement';
import gotoScreen from '../../components/UI/GotoScreen/gotoScreen';
import CurrencyList from '../../components/UI/CurrencyList/CurrencyList';

class WelcomeScreen extends Component{

  constructor(props){
    super(props);
    this.state={
      items:[]
    }
  };

  static options(){
    return welcomeScreenOptions;
  };

  onOpenSideBar = () => {
    gotoScreen(this.props.componentId, 'sidebar');
  };

  componentDidMount(){
    const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-CMC_PRO_API_KEY": "625c327f-3ffc-443d-8198-17de51ff736e"
        }
    })
    .catch(err => {
        console.log("FetchError", err);
        alert("Authentication failed, please try again!");
    })
    .then(res => res.json())
    .then(parsedRes => {
        if (!parsedRes.status) {
            alert(parsedRes.msg);
        } else {
          this.setState({
            items: parsedRes.data
          })
        }
    })
    .catch(err => {
        console.log("FetchError", err);
        alert("Authentication failed, please try again!");
    });
  };

  render(){
    const header = <Text style={styles.headerText}>{("Welcome to BCHApp").toUpperCase()}</Text>;
    const listOfBlockChainCurrencies = this.state.items.length > 0
                                        ? <CurrencyList items={this.state.items}/>
                                        : <ActivityIndicator size="large" color="#f8a11b" />;
    return (
      <View>
        <CustomHeader
          topBorder={false}
          leftBlock={
            <ClickableElement
              inner={
                <View style={styles.customButton}>
                  <DsproIcons
                    icon="menu"
                    width={20}
                    height={20}
                    color="#f8a11b"
                    strokeColor="#f8a11b"
                    fillColor="#f8a11b"
                    strokeWidth={0.5}
                    />
                </View>
              }
              onPress={this.onOpenSideBar}
            />
          }
          centerBlock={header}
          rightBlock={
            <ClickableElement
              inner={
                <View style={styles.customButton}>
                  <DsproIcons
                    icon="plus"
                    width={20}
                    height={20}
                    color="#fff"
                    strokeColor="#fff"
                    fillColor="#fff"
                    strokeWidth={0.5}
                    />
                </View>
              }
              onPress={() => gotoScreen(this.props.componentId, 'BlockChainPortfolioApp.AddCurrencyScreen')}
            />
          }
        />
        {listOfBlockChainCurrencies}
      </View>
    );
  };

}
export default WelcomeScreen;
