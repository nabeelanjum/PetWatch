import { StyleSheet } from 'react-native';
import colors from '../../core/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: colors.brand.lightOrange,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    rowGap: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: colors.font.light,
  },
  resultBox: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.brand.lightGreen,
    borderRadius: 20,
    rowGap: 15,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.brand.green,
  },
});

export default styles;
