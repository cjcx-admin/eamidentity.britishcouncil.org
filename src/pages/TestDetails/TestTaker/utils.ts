export const getIdName = (idTypeId?: number): string => {
  switch (idTypeId) {
    case 1:
      return 'APPB2C.registration.testTaker.id.typeNames.passport';
    case 2:
      return 'APPB2C.registration.testTaker.id.typeNames.card';
    default:
      return 'APPB2C.registration.testTaker.id.typeNames.other';
  }
};
