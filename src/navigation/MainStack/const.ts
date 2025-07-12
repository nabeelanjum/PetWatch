import { SCREENS } from '../routes';

export type MainStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.PET_DETAILS]: { petId: string };
};
