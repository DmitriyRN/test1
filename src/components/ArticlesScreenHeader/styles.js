import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingTop: 15,
  },
  iconsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
  },
  iconWithTextBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
  },
  iconText: {
    fontSize: 20,
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.blue,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkGrey,
  },
});
