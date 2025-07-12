import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import { AppText } from '../../atoms';
import styles from './styles';
import colors from '../../../core/constants/colors';

export type AppButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

const AppButton: React.FC<AppButtonProps> = ({
  title,
  style,
  isLoading,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={StyleSheet.flatten([styles.container, style])}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <AppText style={styles.title}>{title}</AppText>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
