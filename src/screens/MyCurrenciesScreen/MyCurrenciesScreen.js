import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './myCurrenciesScreenStyles';
import { myCurrenciesScreenOptions } from './myCurrenciesScreenOptions';

class AddCurrencyScreen extends Component{

  static options(){
    return myCurrenciesScreenOptions;
  };

  render(){

    return (
      <Text>AddCurrencyScreen</Text>
    )
  }
}
export default AddCurrencyScreen;
