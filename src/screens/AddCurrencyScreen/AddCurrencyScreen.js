import React, { Component } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';

import styles from './addCurrencyScreenStyles';
import { addCurrencyScreenOptions } from './addCurrencyScreenOptions';

import CustomHeader from '../../components/UI/CustomHeader/CustomHeader';
import DsproIcons from '../../components/UI/DsproIcons/DsproIcons';
import ClickableElement from '../../components/UI/ClickableElement/ClickableElement';
import gotoScreen from '../../components/UI/GotoScreen/gotoScreen';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import CurrencyChooser from '../../components/UI/CurrencyChooser/CurrencyChooser';
import validate from '../../utility/validation';

import {generateRandomSessionTokenForGoogle} from '../../utility/helpers';

class AddCurrencyScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      controls: {
        curQuantity: {
          value: "",
          valid: false,
          validationRules: {
            isNumeric: true
          },
          touched: false
        },
        curCurrency: {
          value: "",
          valid: false,
          validationRules: {
            isObject: true
          },
          touched: false
        },
      },
      myCurrencies: []
    }
  };

  static options(){
    return addCurrencyScreenOptions;
  };

  addCurrency = () => {
    const currenctCurrencyItem = {...this.state.controls};
    const myCurrencies = [...this.state.myCurrencies];

    currenctCurrencyItem.curQuantity.value = "";
    currenctCurrencyItem.curQuantity.valid = false;
    currenctCurrencyItem.curCurrency.value = "";
    currenctCurrencyItem.curCurrency.valid = false;
    currenctCurrencyItem.id = generateRandomSessionTokenForGoogle();

    myCurrencies.push(currenctCurrencyItem);
    console.log("myCurrencies", myCurrencies);
    this.setState({
      myCurrencies: myCurrencies
    })
  };

  notifyOnRemoveCurrencyItem = index => {
    Alert.alert(
      'Remove Currency',
      'Are you sure you want to remove currency?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.removeCurrencyItem(index)},
      ],
      {cancelable: true},
    );
  };

  removeCurrencyItem = index => {
    const myCurrencies = [...this.state.myCurrencies];
    myCurrencies.splice(index, 1);
    this.setState({
      myCurrencies: myCurrencies
    })
  };

  onSelectElement = (index, item) => {
    this.updateInputState("curCurrency", item, index)
    console.log("Selected Eleement", index, item);
  };

  updateInputState = (key, value, index) => {
    console.log("updateInputState", key, value, index);
    const myCurrencies = [...this.state.myCurrencies];
    const currentCurrency = {...myCurrencies[index]};
    currentCurrency[key].value = value;
    currentCurrency[key].touched = true;
    currentCurrency[key].valid = validate(
      value,
      currentCurrency[key].validationRules,
    );

    this.setState({
      myCurrencies: myCurrencies
    }, () => console.log(this.state));

  };

  render(){
    const myCurrencyItems = this.state.myCurrencies.map((currency, index) => {
      return (
        <View style={styles.currencyItemSingle} key={currency.id}>
          <View style={styles.row}>
            <ClickableElement
              inner={
                <View style={styles.customButton}>
                  <DsproIcons
                    icon="clear"
                    width={20}
                    height={20}
                    color="#f8a11b"
                    strokeColor="#f8a11b"
                    fillColor="#f8a11b"
                    strokeWidth={0.5}
                    />
                </View>
              }
              onPress={() => this.notifyOnRemoveCurrencyItem(index)}
            />
          </View>

          <CurrencyChooser
            componentId={this.props.componentId}
            onSelectElement={(item) => this.onSelectElement(index, item)}
          />
          <DefaultInput
                placeholder="Enter Quantity"
                style={styles.input}
                placeholderTextColor="#000"
                value={this.state.controls.curQuantity.value}
                onChangeText={val => this.updateInputState("curQuantity", val, index)}
                valid={this.state.controls.curQuantity.valid}
                touched={this.state.controls.curQuantity.touched}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
              />
        </View>
      )
    });

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
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollViewInner}
          style={styles.scrollView}>

          {myCurrencyItems}

          <ClickableElement
            inner={
              <View style={styles.bigButton}>
                <Text style={styles.buttonText}>Add Currency</Text>
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
        </ScrollView>
      </View>
    )
  }
}
export default AddCurrencyScreen;
