import React from "react";
import { TextInput } from "react-native";
import styles from './defaultInputStyles';

const defaultInput = props => {
  return (
    <TextInput
      underlineColorAndroid="transparent"
      {...props}
      style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]}
    />
  )
};

export default defaultInput;
