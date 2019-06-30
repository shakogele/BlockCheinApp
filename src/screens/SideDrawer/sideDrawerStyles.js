import { StyleSheet, Dimensions } from 'react-native'
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f1",
    flex: 1,
    width: Dimensions.get("window").width * 0.8
  },
  closeMenuIconContainer: {
    paddingHorizontal: scale(10),
    paddingTop: scale(10)
  },
  sideMenuTopBar:{
    height: scale(80),
    backgroundColor: '#f0f0f1',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: {
    height: scale(25),
    fontSize: scale(18),
    // fontFamily: 'LLVPTX+Segan-Light',
    color: '#333',
    width: '100%'
  },
  logoView: {
    textAlign: 'left',
    justifyContent: 'flex-end',
    padding: scale(10),
    paddingLeft: scale(20)
  },
  hamburgerButtonView: {
    textAlign: 'right',
    justifyContent: 'center',
    padding: scale(10),
    paddingBottom: scale(20)
  },
  logoImage: {
    width: scale(45),
    height: scale(45),
  },
  drawerItemMultiple: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f1",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#fba339',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f1",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  iconsView: {
    width: scale(60),
    height: scale(60),
    backgroundColor:'#b9bbbe',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textViewForDropDown: {
    flexDirection: 'row',
    height: scale(60),
    width: "84%",
    padding: scale(20),
    paddingLeft: scale(40),
  },
  textView: {
    width: 'auto',
    height: scale(60),
    padding: scale(20),
    paddingLeft: scale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  textSide: {
    width: "75%",
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  arrowSide: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    width: "23%",
  },
  expandeble: {
    flexDirection: 'column'
  },
  drawerItemIcon: {
    marginRight: scale(10)
  }
})

export default styles;
