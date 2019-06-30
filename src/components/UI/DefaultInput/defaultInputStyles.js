import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../../utility/scaling';

const styles = StyleSheet.create({
  input: {
    width: "100%",
    color: '#000',
    fontSize: scale(16),
    borderTopWidth: 0,
    borderColor: "#aeb8b6",
    padding: scale(15),
    marginVertical: scale(8),
  },
  invalid: {
    borderColor: "red"
  }
});

export default styles;
