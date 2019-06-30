import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../../utility/scaling';
const styles = StyleSheet.create({
  currencyChooser: {
    height: scale(50),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(10),
    backgroundColor: "#eee",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc"
  },
  currencyChooserText: {
    color: '#000',
    fontSize: scale(16),
  }
})

export default styles;
