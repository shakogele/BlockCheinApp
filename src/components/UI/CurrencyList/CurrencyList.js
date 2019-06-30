import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './currencyListStyles';
import ClickableElement from '../ClickableElement/ClickableElement';

import { formatPrice, formatPercentage } from '../../../utility/helpers';

const listItem = (index, item) => {
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
  );
};

const CurrencyList = props => {

  return (
    <FlatList
      data={props.items}
      keyExtractor={(item, index) => item.slug}
      renderItem={
        ({item, index}) => {
          return props.onClickItem ? (
                    <ClickableElement
                      inner={listItem(index, item)}
                      onPress={() => props.onClickItem(item)}
                    />
                  ) : listItem(index, item);
        }
      }
    />
  )
}

export default CurrencyList;
