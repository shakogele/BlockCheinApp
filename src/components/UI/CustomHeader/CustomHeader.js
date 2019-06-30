import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './customHeaderStyles.js';
import headerBackground from '../../../assets/images/header.png';

const CustomHeader = props => {
  const headerInner = (
    <View style={ [styles.headerView, {height: (props.height) ? props.height : styles.headerView.height}] }>
      <View style={styles.leftBlock}>
        {props.leftBlock}
      </View>
      <View style={styles.centerBlock}>
        {props.centerBlock}
      </View>
      <View style={styles.rightBlock}>
        {props.rightBlock}
      </View>
    </View>
  );
  return (
    props.topBorder ? (
      <View style={styles.background}>
        <View style={ styles.topBorder }></View>
        {headerInner}
      </View>
    ) : (
      <ImageBackground
        source={headerBackground}
        style={styles.background}>
        {headerInner}
      </ImageBackground>
    )
  );
}

export default CustomHeader;
