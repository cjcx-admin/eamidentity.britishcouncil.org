import { BandScoreType, ComponentType } from 'ors-api/ors2';

export const getBandScoreType = (componentType?: ComponentType) => {
  switch (componentType) {
    case ComponentType.Listening:
      return BandScoreType.Listening;
    case ComponentType.Reading:
      return BandScoreType.Reading;
    case ComponentType.Writing:
      return BandScoreType.Writing;
    case ComponentType.Speaking:
      return BandScoreType.Speaking;
    default:
      return BandScoreType.Listening;
  }
};

export const getComponentType = (bandScoreType?: BandScoreType) => {
  switch (bandScoreType) {
    case BandScoreType.Listening:
      return ComponentType.Listening;
    case BandScoreType.Reading:
      return ComponentType.Reading;
    case BandScoreType.Writing:
      return ComponentType.Writing;
    case BandScoreType.Speaking:
      return ComponentType.Speaking;
    default:
      return ComponentType.Listening;
  }
};
