import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiErrorDetailed } from '@britishcouncil/react-common';
import { ApiErrorsList } from 'ors-ui';

import { apiExtraReducer } from '../_common/apiExtraReducer';
import {
  getResultSettingsIol,
  getReceivingOrgsAllowedActionsIol,
  getReceivingOrgsAllowedActionsMod,
} from './api';
import { ReceivingOrg, ReceivingOrgsState } from './models';
import { converters } from 'common';

export const sliceName = 'receivingOrgs';

export const initialState: ReceivingOrgsState = {
  resultSettingsIol: { isLoading: false, data: undefined },
  receivingOrgsAllowedActions: { isLoading: false, data: undefined },
  deliveryDetails: undefined,
  maxReceivingOrgsCount: 0,
  selectedReceivingOrgs: [],
  additionalTextForTestReportForm: '',
  isReceivingOrgsDisabled: false,
  receivingOrgsDisabledNote: '',
  displayReceivingOrgsNote: false,
  availableOrganisationSlots: 0,
  receivingOrgsSelectionDeadline: '',
  showLimitReachedOrDeadlinePassedNote: false,
  canAddOrEditReceivingOrganisation: false,
  editProcessing: false,
  editError: undefined,
  selectProcessing: false,
  processing: false,
  error: undefined,
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setError(state, action: PayloadAction<ApiErrorsList | undefined>) {
      state.error = converters.tErrorMessage(action.payload);
    },
    setProcessing(state, action: PayloadAction<boolean>) {
      state.processing = action.payload;
    },
    setEditError(state, action: PayloadAction<ApiErrorsList | undefined>) {
      state.editError = action.payload;
    },
    setEditProcessing(state, action: PayloadAction<boolean>) {
      state.editProcessing = action.payload;
    },
    setSelectProcessing(state, action: PayloadAction<boolean>) {
      state.selectProcessing = action.payload;
    },
    setReceivingOrgsDetails(state, action: PayloadAction<ReceivingOrgsState>) {
      state.deliveryDetails = action.payload.deliveryDetails;
      state.maxReceivingOrgsCount = action.payload.maxReceivingOrgsCount;
      state.maxPostalReceivingOrgsCount = action.payload.maxPostalReceivingOrgsCount;
      state.selectedReceivingOrgs = action.payload.selectedReceivingOrgs;
      state.additionalTextForTestReportForm = action.payload.additionalTextForTestReportForm;
      state.isReceivingOrgsDisabled = action.payload.isReceivingOrgsDisabled;
      state.receivingOrgsDisabledNote = action.payload.receivingOrgsDisabledNote;
      state.displayReceivingOrgsNote = action.payload.displayReceivingOrgsNote;
      state.availableOrganisationSlots = action.payload.availableOrganisationSlots;
      state.availablePostalOrganisationSlots = action.payload.availablePostalOrganisationSlots;
      state.availableEdeliveryOrganisationSlots =
        action.payload.availableEdeliveryOrganisationSlots;
      state.receivingOrgsSelectionDeadline = action.payload.receivingOrgsSelectionDeadline
      state.showLimitReachedOrDeadlinePassedNote =
        action.payload.showLimitReachedOrDeadlinePassedNote;
      state.canAddOrEditReceivingOrganisation = action.payload.canAddOrEditReceivingOrganisation;
    },
    updateReceivingOrgs(state, action: PayloadAction<ReceivingOrg[]>) {
      state.selectedReceivingOrgs = action.payload;
    },
    updateReceivingOrg(state, action: PayloadAction<ReceivingOrg>) {
      const updatedOrg = state.selectedReceivingOrgs.find(
        (org) => org.referenceId === action.payload.referenceId
      );
      state.selectedReceivingOrgs = !!updatedOrg
        ? state.selectedReceivingOrgs?.map((org) =>
            org.referenceId === action.payload.referenceId ? { ...org, ...action.payload } : org
          )
        : [...state.selectedReceivingOrgs, action.payload];
    },
    updateAvailableOrganisationSlots(state, action: PayloadAction<number>) {
      const availableOrganisationSlots = state.availableOrganisationSlots + action.payload;
      state.availableOrganisationSlots = availableOrganisationSlots;
      state.showLimitReachedOrDeadlinePassedNote = availableOrganisationSlots <= 0;
    },
    updateAvailablePostalOrganisationSlots(state, action: PayloadAction<number>) {
      if (state.availablePostalOrganisationSlots !== undefined)
        state.availablePostalOrganisationSlots += action.payload;
    },
    updateAvailableEdeliveryOrganisationSlots(state, action: PayloadAction<number>) {
      if (state.availableEdeliveryOrganisationSlots !== undefined)
        state.availableEdeliveryOrganisationSlots += action.payload;
    },
    setSpecificReceivingOrgLoading(
      state,
      action: PayloadAction<{ orgId: number; loading: boolean }>
    ) {
      const specificOrg = state.selectedReceivingOrgs.find(
        (org) => org.referenceId === action.payload.orgId
      );
      state.selectedReceivingOrgs = !!specificOrg
        ? state.selectedReceivingOrgs?.map((org) =>
            org.referenceId === action.payload.orgId
              ? { ...org, processing: action.payload.loading }
              : org
          )
        : state.selectedReceivingOrgs;
    },
    setSpecificReceivingOrgError(
      state,
      action: PayloadAction<{ orgId: number; error?: ApiErrorDetailed }>
    ) {
      const specificOrg = state.selectedReceivingOrgs.find(
        (org) => org.referenceId === action.payload.orgId
      );
      state.selectedReceivingOrgs = !!specificOrg
        ? state.selectedReceivingOrgs?.map((org) =>
            org.referenceId === action.payload.orgId ? { ...org, error: action.payload.error } : org
          )
        : state.selectedReceivingOrgs;
    },
  },
  extraReducers: (builder) => {
    /**
     * Get result settings IOL
     */
    apiExtraReducer(builder, getResultSettingsIol, 'resultSettingsIol');
    /**
     * Get allowed actions IOL
     */
    apiExtraReducer(builder, getReceivingOrgsAllowedActionsIol, 'receivingOrgsAllowedActions');
    /**
     * Get allowed actions MOD
     */
    apiExtraReducer(builder, getReceivingOrgsAllowedActionsMod, 'receivingOrgsAllowedActions');
  },
});

export default slice;
