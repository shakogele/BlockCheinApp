import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../../utility/scaling';

const styles = StyleSheet.create({
  background: {
    height: scale(65),
  },
  topBorder: {
    height: scale(10),
    backgroundColor: '#f8a21b',
    borderBottomWidth: scale(1),
    borderColor: '#d1d3d4'
  },
  headerView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftBlock: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  centerBlock: {
    flex: 3,
  },
  rightBlock: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }

})

export default styles;
