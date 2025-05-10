import React from 'react';
import { useIntl } from 'react-intl';
import { FormattedPrice as FormattedPriceShared, FormattedPriceProps } from 'ors-ui';

export const FormattedPrice = (props: Omit<FormattedPriceProps, 'intl'>) => {
  const intl = useIntl();
  return <FormattedPriceShared {...props} intl={intl} className="price-value" />;
};
