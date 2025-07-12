import { StyleSheet } from 'react-native';
import colors from '../../../core/constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tags: {
    flexDirection: 'row',
    marginTop: 4,
    gap: 10,
  },
  tag: {
    backgroundColor: colors.brand.lightPurple,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
    fontSize: 12,
  },
});

export default styles;
