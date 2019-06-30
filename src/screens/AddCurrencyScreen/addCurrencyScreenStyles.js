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
    marginTop: scale(30),
    backgroundColor: "#f8a11b",
    height: scale(50),
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(10)
  },
  buttonText: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: "white"
  },
  scrollViewInner: {
    width: "70%",
    marginLeft: "15%",
    paddingTop: scale(30)
  },
  input: {
    height: scale(50),
    backgroundColor: "#eee",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc"
  },
  currencyItemSingle: {
    backgroundColor: "#eee",
    padding: scale(10)
  },
  row: {
    height: scale(50),
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
})

export default styles;
