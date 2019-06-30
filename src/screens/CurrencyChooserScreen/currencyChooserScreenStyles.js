import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  headerText: {
    fontSize: scale(18),
    color: "#000",
    textAlign: "center"
  },
  customButton:{
    padding: scale(10)
  }
})

export default styles;
