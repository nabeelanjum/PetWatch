import { StyleSheet } from 'react-native';
import colors from '../../../core/constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    rowGap: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tags: {
    flexDirection: 'row',
    columnGap: 10,
  },
  tag: {
    backgroundColor: colors.brand.lightPurple,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    fontSize: 12,
  },
});

export default styles;
