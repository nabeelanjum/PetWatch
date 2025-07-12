import { StyleSheet } from 'react-native';
import colors from '../../core/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    rowGap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: colors.brand.lightPurple,
    width: '100%',
    padding: 20,
    borderRadius: 12,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    rowGap: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default styles;
