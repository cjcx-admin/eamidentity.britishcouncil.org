import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useForm } from '@britishcouncil/react-forms';
import { registrationClient } from 'ors-api/iol';
import { HelpRequestType, registrationClient as registrationClientMod } from 'ors-api/mod';
import { includesInUrl } from 'ors-utils';
import { extractApiErrors, ApiErrorsList } from 'ors-ui';

import { FormParams } from 'pages/HelpAndContact/HelpForm/models';
import { useTranslateFormErrors } from './useTranslateFormErrors';
import i18next from 'common/i18n';

interface UseHelpForm extends FormParams {
  regId?: number;
  setError: (val: ApiErrorsList | null) => void;
}

interface HelpForm {
  queryText: string;
  formType: HelpRequestType;
}

export const useHelpForm = ({ regId, setProcessing, setShowThanks, setError }: UseHelpForm) => {
  const { t } = useTranslation();
  const isIol = includesInUrl('/iol/');
  const client = isIol ? registrationClient : registrationClientMod;

  const getSchema = () =>
    yup.object().shape({
      queryText: yup
        .string()
        .required(t('APPB2C.common.helpAndContact.form.validation'))
        .max(10000, i18next.t('APPB2C.common.basic.forms.maxLengthMessage', { count: 10000 })),
      formType: yup.string().required(t('APPB2C.common.helpAndContact.form.validation')),
    });
  const { formik, fields } = useForm<HelpForm>(
    getSchema(),
    { queryText: '', formType: HelpRequestType.OtherEnquiry },
    async ({ queryText, formType }) => {
      if (regId) {
        try {
          setProcessing(true);
          setError(null);
          await client.createHelpRequest(regId, queryText, formType, {
            headers: { 'Content-Type': 'application/json' },
          });

          setShowThanks(true);
        } catch (e) {
          setError(extractApiErrors(e));
        } finally {
          setProcessing(false);
        }
      }
    }
  );
  useTranslateFormErrors(formik);

  const handleSelectFormType = (option: HelpRequestType) => {
    formik.setFieldValue('formType', option);
  };

  return { formik, fields, handleSelectFormType };
};
