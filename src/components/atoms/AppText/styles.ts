import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { AppTextProps } from '.';

const useStyles = ({
  color,
  center,
}: {
  color?: AppTextProps['color'];
  center?: boolean;
}) => {
  const { colors } = useTheme();
  return StyleSheet.create({
    default: {
      color: color ?? colors.text,
      textAlign: center ? 'center' : 'left',
    },
  });
};

export default useStyles;
