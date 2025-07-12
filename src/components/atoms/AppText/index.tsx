import React from 'react';
import {
  ColorValue,
  Text as RNText,
  StyleSheet,
  TextProps,
} from 'react-native';
import useStyles from './styles';

export interface AppTextProps extends TextProps {
  color?: ColorValue;
  center?: boolean;
}

const AppText: React.FC<AppTextProps> = ({
  style,
  children,
  color,
  center,
  ...props
}) => {
  const styles = useStyles({ center, color });

  return (
    <RNText {...props} style={StyleSheet.flatten([styles.default, style])}>
      {children}
    </RNText>
  );
};

export default AppText;
