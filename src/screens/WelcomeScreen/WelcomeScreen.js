import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './welcomeScreenStyles';
import {welcomeScreenOptions} from './welcomeScreenOptions';

import CustomHeader from '../../components/UI/CustomHeader/CustomHeader';
import DsproIcons from '../../components/UI/DsproIcons/DsproIcons';
import ClickableElement from '../../components/UI/ClickableElement/ClickableElement';
import gotoScreen from '../../components/UI/GotoScreen/gotoScreen';

import { formatPrice, formatPercentage } from '../../utility/helpers';

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
        console.log("parsedRes Get Data from coinmarketcap", parsedRes);
        if (!parsedRes.status) {
            alert(parsedRes.msg);
        } else {
          this.setState({
            items: parsedRes.data
          }, () => console.log(this.state))
        }
    })
    .catch(err => {
        console.log("FetchError", err);
        alert("Authentication failed, please try again!");
    });
  };

  render(){
    const header = <Text style={styles.headerText}>{("Welcome to BCHApp").toUpperCase()}</Text>;
    const listOfBlockChainCurrencies = this.state.items.length > 0 ?
                                        <FlatList
                                          data={this.state.items}
                                          keyExtractor={(item, index) => item.slug}
                                          renderItem={
                                            ({item, index}) => {
                                              return (
                                                <View style={styles.listItem}>
                                                  <Text style={styles.itemIndexBlock}>{index+1}</Text>
                                                  <View style={styles.itemDescriptionBlock}>
                                                    <Text style={styles.blockChainTitle}>{item.name}</Text>
                                                    <Text style={styles.descriptionBlockItem}>
                                                      <Text style={styles.descriptionTitle}>Price: </Text>
                                                      {formatPrice(item.quote.USD.price)}
                                                    </Text>
                                                    <Text style={styles.descriptionBlockItem}>
                                                      <Text style={styles.descriptionTitle}>Market Cap: </Text>
                                                      {formatPrice(item.quote.USD.market_cap)}
                                                    </Text>
                                                  </View>
                                                  <Text style={[ styles.itemPercentageBlock, item.quote.USD.percent_change_1h >=0 ? styles.blockChainPositive : styles.blockChainNegative ]}>
                                                    {formatPercentage(item.quote.USD.percent_change_1h)}
                                                  </Text>
                                                </View>
                                              )
                                            }
                                          }
                                        /> : null;
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
