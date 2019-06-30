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
  listItem: {
    flexDirection: "row",
    marginVertical: scale(5)
  },
  itemIndexBlock: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  itemDescriptionBlock: {
    flex: 8,
    textAlign: "left",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  itemPercentageBlock: {
    flex: 2,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  descriptionBlockItem: {
    flexDirection: "row"
  },
  blockChainTitle: {
    fontSize: scale(18),
    color: "#f8a21b"
  },
  descriptionTitle: {
    fontSize: scale(16),
    color: "black"
  },
  blockChainPositive: {
    color: "green"
  },
  blockChainNegative: {
    color: "red"
  },
})

export default styles;
