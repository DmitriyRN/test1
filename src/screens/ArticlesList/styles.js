import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerComponent: {
    borderWidth: 2,
    borderColor: Colors.separatorGrey,
  },
  headerComponentIconsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Colors.lightGrey,
  },
  headerComponentIconText: {
    padding: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.greyForText,
  },
  headerComponentTitle: {
    textTransform: 'uppercase',
    padding: 12,
    color: Colors.greyForText,
  },
  iconWithTextBlock: {
    flexDirection: 'row',
  },
  headerComponentTitlesBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 70,
  },
  contentContainer: {
    flexGrow: 1,
  },
  footerComponent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  footerContainer: {
    borderWidth: 2,
    borderColor: Colors.separatorGrey,
    paddingVertical: 15,
    alignItems: 'center',
  },
  mainBlock: {
    borderWidth: 2,
    borderColor: Colors.blueGrey,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  footerText: {
    paddingVertical: 20,
    color: Colors.blueGrey,
    fontSize: 18,
    fontWeight: '500',
  },
});
