import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { FormFields } from '@britishcouncil/react-forms';
import { Button } from '@britishcouncil/react-solas';
import { FC, ReactNode } from 'react';

type ButtonProps = Omit<React.ComponentProps<typeof Button>, 'children'>;

type Props = ButtonProps & {
  processing?: boolean;
  fields?: FormFields<any>;
  buttonTestid?: string;
  errorTestId?: string;
  hasError?: boolean;
  children?: ReactNode;
};

export const isErrorVisible = (fields: FormFields<any>): boolean => {
  const errField = Object.keys(fields).find((f) => fields[f].error && fields[f].touched);
  return !!errField;
};

export const ProceedBtn: FC<Props> = ({
  processing,
  fields,
  errorTestId = 'form-validation-error',
  hasError = false,
  children,
  ...props
}) => {
  const { t } = useTranslation();
  const showError = hasError || (fields ? isErrorVisible(fields) : false);
  return (
    <Root>
      <Button
        type="submit"
        intent="primary"
        role="button"
        loading={props.loading || processing}
        disabled={props.disabled || processing}
        {...props}
      >
        {children}
      </Button>
      {showError && (
        <ValError data-testid={errorTestId}>{t('APPB2C.common.basic.validationError')}</ValError>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  button {
    margin-right: 30px;
  }
`;

export const ValError = styled.span`
  border-left: 5px solid #a94442;
  color: #a94442;
  padding: 3px 10px;
  max-width: 300px;
  height: 46px;
  line-height: 20px;
`;
