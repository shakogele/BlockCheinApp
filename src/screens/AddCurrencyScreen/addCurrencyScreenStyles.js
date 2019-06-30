import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const styles = StyleSheet.create({
  headerText: {
    fontSize: scale(18),
    color: "#000",
    textAlign: "center"
  },
  customButton: {
    padding: scale(10)
  },
  bigButton: {
    backgroundColor: "#f8a11b",
    height: scale(50),
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

export default styles;
