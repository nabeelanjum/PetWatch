import { StyleSheet } from 'react-native';
import colors from '../../core/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    rowGap: 18,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
  },
  nameContainer: {
    rowGap: 6,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  tags: {
    flexDirection: 'row',
    gap: 12,
  },
  tag: {
    backgroundColor: colors.brand.lightPurple,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
  },
  detail: {
    fontSize: 15,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
