import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { extractApiError } from '@britishcouncil/react-common';
import {
  examResultClient,
  getRegistrationResultDeliveryDetailsClient,
  registrationReceivingOrganisationsClient,
  AwardingBodySystem,
} from 'ors-api/ors2';
import {
  examResultClient as examResultClientUkvi,
  registrationClient as registrationClientUkvi,
  registrationStedOrganisationClient,
} from 'ors-api/ukvi';
import {
  registrationReceivingOrganisationsClient as registrationReceivingOrganisationsClientMod,
  ReceivingOrganisationMethodOfDelivery,
  receivingOrganisationsClient,
  ApiResponseOfCentreConfigurationDto,
  ApiResponseOfOrganisationCountryConfigurationDto,
} from 'ors-api/mod';
import {
  RegistrationReceivingOrganisationDto,
  registrationReceivingOrganisationsClient as registrationReceivingOrganisationsClientIol,
} from 'ors-api/iol';
import { includesInUrl } from 'ors-utils';
import { extractApiErrors } from 'ors-ui';

import { converters, RegOrigin, UnifiedResultDetails } from 'common';
import { getReceivingOrgsDetails } from '../../pages/TestDetails/RecognisingOrganisations/utils';
import { receivingOrgs, ReceivingOrgsAllowedActions } from '../receivingOrgs';
import { registration, registrationIol } from '../registration';
import { AppThunk } from '..';

/**
 *  Get Receiving Organisations Data
 */
export const getReceivingOrgsData =
  ({
    resultsRequest,
    orgCountryConfig,
    centreConfig,
  }: {
    resultsRequest: UnifiedResultDetails;
    orgCountryConfig?: ApiResponseOfOrganisationCountryConfigurationDto;
    centreConfig?: ApiResponseOfCentreConfigurationDto;
  }): AppThunk =>
  async (dispatch, getState) => {
    dispatch(receivingOrgs.actions.setProcessing(true));
    const isCmds = resultsRequest.awardingBodySystem === AwardingBodySystem.CMDS;
    const isUkviCmds = isCmds && includesInUrl('/ukvi/');

    isCmds &&
      (await dispatch(
        receivingOrgs.api.getReceivingOrgsAllowedActionsMod(resultsRequest.registrationId)
      ));

    const { currentLanguage: locale } = getState().language;
    const { receivingOrgsAllowedActions } = getState().receivingOrgs;

    try {
      const [
        deliveryDetails,
        regResultDeliveryDetails,
        receivingOrganisationsMod,
        receivingOrgLimits,
      ] = await Promise.all([
        !isUkviCmds
          ? examResultClient.getExamResultDeliveryDetails(resultsRequest.registrationId, {
              cache: true,
            })
          : Promise.resolve(undefined),

        !isUkviCmds
          ? getRegistrationResultDeliveryDetailsClient.getRegistrationResultDeliveryDetails(
              resultsRequest.registrationId
            )
          : Promise.resolve(undefined),

        isCmds
          ? registrationReceivingOrganisationsClientMod.getReceivingOrganisations(
              resultsRequest.registrationId
            )
          : Promise.resolve(undefined),

        resultsRequest.organisationCountryId
          ? receivingOrganisationsClient.getLimits(resultsRequest.organisationCountryId)
          : Promise.resolve(undefined),
      ]);

      dispatch(
        receivingOrgs.actions.setReceivingOrgsDetails(
          getReceivingOrgsDetails(
            resultsRequest,
            {
              centreConfig: centreConfig?.value,
              orgCountryConfig: orgCountryConfig?.value,
              deliveryDetails: deliveryDetails?.data,
              regResultDeliveryDetails: regResultDeliveryDetails?.data,
              receivingOrganisationsMod: receivingOrganisationsMod?.data,
              receivingOrgsAllowedActions: receivingOrgsAllowedActions.data,
              receivingOrgLimits: receivingOrgLimits?.data,
            },
            locale
          )
        )
      );
    } catch (error) {
      const err = extractApiErrors(error);
      dispatch(receivingOrgs.actions.setError(err));
    }
    dispatch(receivingOrgs.actions.setProcessing(false));
  };

/**
 *  Get Receiving Organisations Data UKVI
 */
export const getReceivingOrgsDataUkvi =
  ({
    resultsRequest,
    centreConfig,
  }: {
    resultsRequest: UnifiedResultDetails;
    centreConfig?: ApiResponseOfCentreConfigurationDto;
  }): AppThunk =>
  async (dispatch, getState) => {
    dispatch(receivingOrgs.actions.setProcessing(true));
    const { currentLanguage: locale } = getState().language;

    try {
      const [deliveryDetails, regResultDeliveryDetails] = await Promise.all([
        examResultClientUkvi.getExamResultDeliveryDetails(resultsRequest.registrationId, {
          cache: true,
        }),
        registrationClientUkvi.getRegistrationResultDeliveryDetails(resultsRequest.registrationId),
      ]);

      dispatch(
        receivingOrgs.actions.setReceivingOrgsDetails(
          getReceivingOrgsDetails(
            resultsRequest,
            {
              centreConfig: centreConfig?.value,
              deliveryDetails: deliveryDetails.data as any,
              regResultDeliveryDetailsUkvi: regResultDeliveryDetails.data,
            },
            locale
          )
        )
      );
    } catch (error) {
      const err = extractApiErrors(error);
      dispatch(receivingOrgs.actions.setError(err));
    }
    dispatch(receivingOrgs.actions.setProcessing(false));
  };

/**
 *  Get list of selected Receiving Organisations IOL
 */
export const getSelectedReceivingOrgs =
  (regDetails: UnifiedResultDetails): AppThunk =>
  async (dispatch, getState) => {
    dispatch(receivingOrgs.actions.setProcessing(true));
    try {
      const res = await registrationReceivingOrganisationsClientIol.getReceivingOrganisations(
        regDetails.registrationId
      );
      await dispatch(
        receivingOrgs.api.getReceivingOrgsAllowedActionsIol(regDetails.registrationId)
      );
      const { receivingOrgsAllowedActions } = getState().receivingOrgs;

      let orgsWithDetails: RegistrationReceivingOrganisationDto[] = [];
      orgsWithDetails = res.data;
      dispatch(
        receivingOrgs.actions.setReceivingOrgsDetails(
          getReceivingOrgsDetails(regDetails, {
            receivingOrganisationsIol: orgsWithDetails,
            receivingOrgsAllowedActions: receivingOrgsAllowedActions.data,
          })
        )
      );
    } catch (error) {
      const err = extractApiErrors(error);
      dispatch(receivingOrgs.actions.setError(err));
    }
    dispatch(receivingOrgs.actions.setProcessing(false));
  };

/**
 *  Select Receiving Organisation
 */
/** TODO: Think of a way to simplify it into AsyncThunks */
export const selectReceivingOrganisation =
  (
    registrationId: number,
    addRequest: any,
    origin?: RegOrigin,
    methodOfDelivery?: ReceivingOrganisationMethodOfDelivery
  ): AppThunk =>
  async (dispatch, getState) => {
    dispatch(receivingOrgs.actions.setEditError(undefined));

    dispatch(receivingOrgs.actions.setEditProcessing(true));
    const addRecOrg =
      origin === 'ors'
        ? registrationReceivingOrganisationsClient
        : origin === 'ukvi'
        ? registrationStedOrganisationClient
        : origin === 'mod'
        ? registrationReceivingOrganisationsClientMod
        : registrationReceivingOrganisationsClientIol;
    try {
      const organisationId = await addRecOrg.addReceivingOrganisation(registrationId, addRequest);
      dispatch(receivingOrgs.actions.setEditProcessing(false));

      dispatch(receivingOrgs.actions.setSelectProcessing(true));
      try {
        if (origin === 'iol') {
          await Promise.all([
            dispatch(registrationIol.api.getAllowedActions(registrationId)),
            dispatch(receivingOrgs.api.getReceivingOrgsAllowedActionsIol(registrationId)),
          ]);
        }
        if (origin === 'mod') {
          await Promise.all([
            dispatch(registration.api.getAllowedActionsMod(registrationId)),
            dispatch(receivingOrgs.api.getReceivingOrgsAllowedActionsMod(registrationId)),
          ]);
        }
        const { receivingOrgsAllowedActions } = getState().receivingOrgs;

        await getRecOrganisationDetails(
          registrationId,
          organisationId.data,
          dispatch,
          origin,
          receivingOrgsAllowedActions.data
        );

        updateSlots(-1, dispatch, origin, methodOfDelivery);
      } catch (error) {
        const err = extractApiError(error);
        dispatch(
          receivingOrgs.actions.setSpecificReceivingOrgError({
            orgId: organisationId.data,
            error: err,
          })
        );
      }
    } catch (error) {
      const err = extractApiErrors(error);
      dispatch(receivingOrgs.actions.setEditError(err));
    }

    dispatch(receivingOrgs.actions.setEditProcessing(false));
    dispatch(receivingOrgs.actions.setSelectProcessing(false));
  };

/**
 *  Edit Receiving Organisation
 */
/** TODO: Think of a way to simplify it into AsyncThunks */
export const editReceivingOrganisation =
  (
    registrationId: number,
    organisationId: number,
    editRequest: any,
    origin?: RegOrigin
  ): AppThunk =>
  async (dispatch, getState) => {
    dispatch(receivingOrgs.actions.setEditError(undefined));
    dispatch(
      receivingOrgs.actions.setSpecificReceivingOrgError({
        orgId: organisationId,
        error: undefined,
      })
    );

    dispatch(receivingOrgs.actions.setEditProcessing(true));
    const editRecOrg =
      origin === 'ors'
        ? registrationReceivingOrganisationsClient.updateReceivingOrganisation
        : origin === 'ukvi'
        ? registrationStedOrganisationClient.updateReceivingOrganisation
        : origin === 'mod'
        ? registrationReceivingOrganisationsClientMod.editReceivingOrganisation
        : registrationReceivingOrganisationsClientIol.editReceivingOrganisation;
    try {
      await editRecOrg(registrationId, organisationId, editRequest);
      dispatch(receivingOrgs.actions.setEditProcessing(false));

      dispatch(
        receivingOrgs.actions.setSpecificReceivingOrgLoading({
          orgId: organisationId,
          loading: true,
        })
      );

      try {
        const { receivingOrgsAllowedActions } = getState().receivingOrgs;
        await getRecOrganisationDetails(
          registrationId,
          organisationId,
          dispatch,
          origin,
          receivingOrgsAllowedActions.data
        );
      } catch (error) {
        const err = extractApiError(error);
        dispatch(
          receivingOrgs.actions.setSpecificReceivingOrgError({ orgId: organisationId, error: err })
        );
      }
    } catch (error) {
      const err = extractApiErrors(error);
      dispatch(receivingOrgs.actions.setEditError(err));
    }

    dispatch(receivingOrgs.actions.setEditProcessing(false));
    dispatch(
      receivingOrgs.actions.setSpecificReceivingOrgLoading({
        orgId: organisationId,
        loading: false,
      })
    );
  };

/**
 *  Cancel Receiving Organisation
 */
/** TODO: Think of a way to simplify it into AsyncThunks */
export const cancelReceivingOrganisation =
  (
    registrationId: number,
    organisationId: number,
    origin?: RegOrigin,
    methodOfDelivery?: ReceivingOrganisationMethodOfDelivery
  ): AppThunk =>
  async (dispatch, getState) => {
    dispatch(receivingOrgs.actions.setEditError(undefined));
    dispatch(
      receivingOrgs.actions.setSpecificReceivingOrgError({
        orgId: organisationId,
        error: undefined,
      })
    );

    dispatch(receivingOrgs.actions.setEditProcessing(true));
    const cancelRecOrg =
      origin === 'ors'
        ? registrationReceivingOrganisationsClient
        : origin === 'ukvi'
        ? registrationStedOrganisationClient
        : origin === 'mod'
        ? registrationReceivingOrganisationsClientMod
        : registrationReceivingOrganisationsClientIol;
    try {
      await cancelRecOrg.cancelReceivingOrganisation(registrationId, organisationId);
      dispatch(receivingOrgs.actions.setEditProcessing(false));

      origin === 'mod' && (await dispatch(registration.api.getAllowedActionsMod(registrationId)));
      origin === 'iol' && (await dispatch(registrationIol.api.getAllowedActions(registrationId)));
      dispatch(
        receivingOrgs.actions.setSpecificReceivingOrgLoading({
          orgId: organisationId,
          loading: true,
        })
      );
      /** Manually update organisation's status to cancelled, reducing the number of API requests */
      dispatch(
        receivingOrgs.actions.updateReceivingOrg({
          referenceId: organisationId,
          registrationId: registrationId,
          hasConditions: false,
          registrationCancelled: false,
          status: 'cancel-requested',
        })
      );

      updateSlots(1, dispatch, origin, methodOfDelivery);
    } catch (error) {
      const err = extractApiErrors(error);
      dispatch(receivingOrgs.actions.setEditError(err));
    }

    dispatch(receivingOrgs.actions.setEditProcessing(false));
    dispatch(
      receivingOrgs.actions.setSpecificReceivingOrgLoading({
        orgId: organisationId,
        loading: false,
      })
    );
  };

const getRecOrganisationDetails = async (
  registrationId: number,
  organisationId: number,
  dispatch: ThunkDispatch<any, unknown, Action>,
  origin?: RegOrigin,
  receivingOrgsAllowedActions?: ReceivingOrgsAllowedActions
) => {
  if (origin === 'ors' || origin === 'ukvi') {
    const client =
      origin === 'ors'
        ? registrationReceivingOrganisationsClient
        : registrationStedOrganisationClient;
    const details = await client.getReceivingOrganisationDetails(registrationId, organisationId);
    dispatch(
      receivingOrgs.actions.updateReceivingOrg(
        converters
          .toUnifiedReceivingOrgs(registrationId, false)
          .fromIwasROs([details.data], AwardingBodySystem.IWAS, origin)[0]
      )
    );
  } else {
    const client =
      origin === 'mod'
        ? registrationReceivingOrganisationsClientMod
        : registrationReceivingOrganisationsClientIol;
    const details = await client.getReceivingOrganisationDetails(registrationId, organisationId);
    dispatch(
      receivingOrgs.actions.updateReceivingOrg(
        converters
          .toUnifiedReceivingOrgs(registrationId, false)
          .fromCmdsROs([details.data], origin, receivingOrgsAllowedActions)[0]
      )
    );
  }
};

const updateSlots = (
  count: -1 | 1,
  dispatch: ThunkDispatch<any, unknown, Action>,
  origin?: RegOrigin,
  methodOfDelivery?: ReceivingOrganisationMethodOfDelivery
) => {
  if (origin === 'mod') {
    methodOfDelivery === ReceivingOrganisationMethodOfDelivery.Postal
      ? dispatch(receivingOrgs.actions.updateAvailablePostalOrganisationSlots(count))
      : dispatch(receivingOrgs.actions.updateAvailableEdeliveryOrganisationSlots(count));
  }

  dispatch(receivingOrgs.actions.updateAvailableOrganisationSlots(count));
};
