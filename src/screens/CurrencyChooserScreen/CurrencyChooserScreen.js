import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import {currencyChooserScreenOptions} from './currencyChooserScreenOptions';
import styles from './currencyChooserScreenStyles';

import CustomHeader from '../../components/UI/CustomHeader/CustomHeader';
import CurrencyList from '../../components/UI/CurrencyList/CurrencyList';
import gotoScreen from '../../components/UI/GotoScreen/gotoScreen';
import ClickableElement from '../../components/UI/ClickableElement/ClickableElement';
import DsproIcons from '../../components/UI/DsproIcons/DsproIcons';

class CurrencyChooserScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      selectedItem: {}
    };
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

  static options(){
    return currencyChooserScreenOptions;
  };

  onSelectElement = (item) => {
    this.props.onSelectElement(item);
    gotoScreen(this.props.componentId, "back");
  }

  render(){
    const listOfBlockChainCurrencies = this.state.items.length > 0 ?
                                        <CurrencyList items={this.state.items} onClickItem={(item) => this.onSelectElement(item)}/> :
                                        <ActivityIndicator size="large" color="#f8a11b" />;
    const header = <Text style={styles.headerText}>Choose Currency</Text>;

    return (
      <View style={styles.background}>
        <CustomHeader
          topBorder={false}
          leftBlock={
            <ClickableElement
              inner={
                <View style={styles.customButton}>
                  <DsproIcons
                    icon="arrowLeft"
                    width={20}
                    height={20}
                    color="#f8a11b"
                    strokeColor="#f8a11b"
                    fillColor="#f8a11b"
                    strokeWidth={0.5}
                    />
                </View>
              }
              onPress={() => gotoScreen(this.props.componentId, 'back')}
            />
          }
          centerBlock={header}
          rightBlock={
            <ClickableElement
              inner={
                <View style={styles.customButton}>
                  <DsproIcons
                    icon="clear"
                    width={20}
                    height={20}
                    color="#fff"
                    strokeColor="#fff"
                    fillColor="#fff"
                    strokeWidth={0.5}
                    />
                </View>
              }
              onPress={() => gotoScreen(this.props.componentId, 'back')}
            />
          }
        />
        {listOfBlockChainCurrencies}
      </View>
    )
  }
}

export default CurrencyChooserScreen;
