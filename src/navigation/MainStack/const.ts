import { Pet } from '../../core/types';
import { SCREENS } from '../routes';

export type MainStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.PET_DETAILS]: { pet: Pet };
  [SCREENS.ADOPT]: { pet: Pet };
};
