import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const styles = StyleSheet.create({
  headerText: {
    fontSize: scale(18),
    color: "#000"
  },
  customButton: {
    padding: scale(10)
  }
})

export default styles;
