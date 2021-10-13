import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
    borderBottomColor: Colors.separatorGrey,
    borderBottomWidth: 2,
  },
  imageBlock: {
    padding: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  image: {
    height: 70,
    width: 70,
  },
  colorSizeBlock: {
    flexDirection: 'row',
  },
  mainBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionBlock: {
    justifyContent: 'space-evenly',
    height: '100%',
  },
  commonText: {
    color: Colors.black,
  },
  sizeText: {
    paddingLeft: 25,
    color: Colors.black,
  },
  descriptionText: {
    color: Colors.greyForText,
  },
  countBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  countWrapper: {
    backgroundColor: Colors.green,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
  },
  countText: {
    color: Colors.white,
  },
  arrowBlock: {
    padding: 20,
  },
  separator: {
    backgroundColor: Colors.separatorGrey,
    height: 2,
  },
});
