import { useIolRoSettings } from './useIolRoSettings';
import { useInCentreRoDetails } from './useInCentreRoDetails';

export const useRecognisingOrgsDetails = () => {
  useIolRoSettings();
  useInCentreRoDetails();
};
