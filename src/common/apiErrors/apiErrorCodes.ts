export enum regErrorCodes {
  UnableToDownloadFile = 'StorageRepository.UnableToDownloadFile',
  MissingFile = 'MinFileCountExceptionalScenarioNotMet',
  CancellationRequestAlreadyExists = 'CancellationRequestAlreadyExists',
  RegistrationBookingNotFound = 'RegistrationBookingNotFound',
  UnableToSubmitCancellationRequest = 'UnableToSubmitCancellationRequest',
  WrongPaymentConfig = 'NppResponseProcessor.NPP Response error',
  UnableToUpdateCandidate = 'UnableToUpdateCandidate',
}

export enum osrErrorCodes {
  NoAvailableSpeakingSlots = 'NoAvailableSpeakingSlots',
  MissingFile = 'FileSearcher.CannotFindFile',
}

export enum transferErrorCodes {
  SelfServeTransferDisabled = 'SelfServeTransferDisabled',
  SlotTaken = 'IBookingProvider.FreeSpeakingSlotIsNotFound',
  FreeLrwSlotIsNotAvailable = 'FreeLrwSlotIsNotAvailable',
}

export enum receivingOrgErrorCodes {
  ContactPersonMaxLength = 'ContactPersonMaxLength',
  CaseNumberMaxLength = 'CaseNumberMaxLength',
  MinScoreMissing = 'UnableToCreateExamScoreIncorrectFomrat',
  OrgLimitReached = 'MaximumNumberOfSelectedOrganisationReached',
  OrgLimitReachedIol = 'registrationStedOrganisation.registrationId',
  DeadlineReachedIol = 'AddReceivingOrganisationNotAllowedForResultsValidity',
  OrgLimitReachedUkvi = 'registrationStedOrganisation',
  WrongOrgName = 'registrationStedOrganisation.otherOrganisationName',
  WrongCaseNumber = 'registrationStedOrganisation.fileOrCaseNumber',
  WrongContactPerson = 'registrationStedOrganisation.nameOfPerson',
  WrongAddressLine1 = 'registrationStedOrganisation.addressLine1',
  WrongAddressLine2 = 'registrationStedOrganisation.addressLine2',
  WrongAddressLine3 = 'registrationStedOrganisation.addressLine3',
  WrongAddressLine4 = 'registrationStedOrganisation.addressLine4',
  WrongPostCode = 'registrationStedOrganisation.postCode',
}

export enum passwordErrorCodes {
  OldPasswordIsWrong = 'OldPasswordIsWrong',
  DifferentPasswords = 'DifferentPasswords',
  PasswordDoesntMeetRequirements = 'PasswordDoesntMeetRequirements',
}

export enum draftdErrorCodes {
  provisionalCandidateNotFound = 'provisionalCandidateNotFound',
}

export enum eorErrorCodes {
  selectedComponents = 'selectedComponents',
  trfNumber = 'trfNumber',

  /** mod */
  NoSelectedComponents = 'NoSelectedComponents',
  Email = 'Email',
  FirstNameNotEmpty = 'FirstNameNotEmpty',
  SurnameNotEmpty = 'SurnameNotEmpty',
  StreetAddress1NotEmpty = 'StreetAddress1NotEmpty',
  TownNotEmpty = 'TownNotEmpty',
  CountryIdNotEmpty = 'CountryIdNotEmpty',
  EorNoteMaxLength = 'EorNoteMaxLength',
  FirstNameMaxLength = 'FirstNameMaxLength',
  SurnameMaxLength = 'SurnameMaxLength',
  TelephoneMaxLength = 'TelephoneMaxLength',
  StreetAddress1MaxLength = 'StreetAddress1MaxLength',
  StreetAddress2MaxLength = 'StreetAddress2MaxLength',
  StreetAddress3MaxLength = 'StreetAddress3MaxLength',
  StreetAddress4MaxLength = 'StreetAddress4MaxLength',
  PostCodeMaxLength = 'PostCodeMaxLength',
  TownMaxLength = 'TownMaxLength',
}

export enum commonErrorProps {
  mobile = 'mobile',
  countryId = 'countryId',
  idTypeId = 'idTypeId',
  fileCount = 'fileCount',
  type = 'type',
  name = 'name',
  subTypeId = 'subTypeId',
}
