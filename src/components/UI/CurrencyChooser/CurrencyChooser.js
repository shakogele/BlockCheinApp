import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './currencyChooserStyles';

import ClickableElement from '../ClickableElement/ClickableElement';
import DsproIcons from '../DsproIcons/DsproIcons';

import gotoScreen from '../GotoScreen/gotoScreen';

const CurrencyChooser = props => {
  return (
    <ClickableElement
      inner={
        <View style={styles.currencyChooser}>
          <Text style={styles.currencyChooserText}>Choose Currency</Text>
          <DsproIcons
            icon="arrowRight"
            width={20}
            height={20}
            color="#f8a11b"
            strokeColor="#f8a11b"
            fillColor="#f8a11b"
            strokeWidth={0.5}
            />
        </View>

      }
      onPress={() => gotoScreen(props.componentId, 'BlockChainPortfolioApp.CurrencyChooserScreen', {
        onSelectElement: props.onSelectElement
      })}
    />
  )
}

export default CurrencyChooser;
