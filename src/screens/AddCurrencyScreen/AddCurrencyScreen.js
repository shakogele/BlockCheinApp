import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './addCurrencyScreenStyles';
import { addCurrencyScreenOptions } from './addCurrencyScreenOptions';

import CustomHeader from '../../components/UI/CustomHeader/CustomHeader';
import DsproIcons from '../../components/UI/DsproIcons/DsproIcons';
import ClickableElement from '../../components/UI/ClickableElement/ClickableElement';
import gotoScreen from '../../components/UI/GotoScreen/gotoScreen';

class AddCurrencyScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      myCurrencies: []
    }
  };

  static options(){
    return addCurrencyScreenOptions;
  };

  addCurrency(){
    alert("add currency");
  };

  render(){
    const header = <Text style={styles.headerText}>{("Add your currency").toUpperCase()}</Text>;

    return (
      <View style={styles.background}>
        <CustomHeader
          centerBlock={header}
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
        />
        <ClickableElement
          inner={
            <View style={styles.bigButton}>
              <Text>Add Currency</Text>
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
          onPress={this.addCurrency}
        />
      </View>
    )
  }
}
export default AddCurrencyScreen;
