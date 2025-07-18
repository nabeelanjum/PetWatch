import { StyleSheet } from 'react-native';
import colors from '../../../core/constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: colors.brand.orange,
    width: '100%',
    height: 50,
  },
  title: {
    color: colors.monochrome.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
