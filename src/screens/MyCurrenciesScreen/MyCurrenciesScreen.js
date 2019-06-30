import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import styles from './myCurrenciesScreenStyles';
import { myCurrenciesScreenOptions } from './myCurrenciesScreenOptions';

import CustomHeader from '../../components/UI/CustomHeader/CustomHeader';
import DsproIcons from '../../components/UI/DsproIcons/DsproIcons';
import CurrencyList from '../../components/UI/CurrencyList/CurrencyList';

class MyCurrenciesScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      myCurrencies: []
    };
  };

  static options(){
    return myCurrenciesScreenOptions;
  };

  componentDidMount(){
    AsyncStorage.getItem("ap:myCurrencies")
      .catch(err => reject())
      .then(myCurrencies => {
        console.log("myCurrencies", JSON.parse(myCurrencies));
        const currencies = JSON.parse(myCurrencies);
        if(currencies){
          this.setState({
            myCurrencies: currencies
          })
        }
    })
  }

  render(){
    const centerBlock = <Text style={styles.headerText}>My Currencies</Text>;
    const myCurrencies = this.state.myCurrencies.length > 0 ?
                          <CurrencyList items={this.state.myCurrencies}/> :
                          null

    return (
      <View style={styles.background}>
        <CustomHeader
          centerBlock={centerBlock}
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
        />
        <View>
          {myCurrencies}
        </View>
      </View>
    )
  }
}
export default MyCurrenciesScreen;
