import { useEffect } from 'react';
import { FormikContextType } from 'formik';

import { useLocale } from 'common';

export const useTranslateFormErrors = (formik: FormikContextType<any>) => {
  const { locale } = useLocale();
  const { errors, touched, setFieldTouched } = formik;

  useEffect(() => {
    Object.keys(errors).forEach((fieldName) => {
      if (Object.keys(touched).includes(fieldName)) {
        setFieldTouched(fieldName);
      }
    });
  }, [locale]);
};
