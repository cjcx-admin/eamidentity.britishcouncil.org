import { FC, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMobileAlt } from 'react-icons/fa';
import styled from '@emotion/styled';
import { BcAlert } from '@britishcouncil/react-solas';
import { breakpoints } from 'ors-ui';

export const UploadMobileInfo: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <MobileInfo
      type="note"
      aria-live="polite"
      title={t('APPB2C.registration.testTaker.files.upload.mobile.title')}
      {...props}
    >
      <div className="intro">
        <FaMobileAlt aria-hidden="true" />
        <div>
          <div style={{ marginBottom: '10px' }}>
            {t('APPB2C.registration.testTaker.files.upload.mobile.line1')}
          </div>
        </div>
      </div>
      <div>{t('APPB2C.registration.testTaker.files.upload.mobile.line2')}</div>
    </MobileInfo>
  );
};

const MobileInfo = styled(BcAlert)`
  @media (min-width: ${breakpoints['screen-xs-max']}px) {
    display: none;
  }

  border-radius: 3px;

  h2.alert-title {
    color: unset;
    font-weight: bold;

    [dir='rtl'] & {
      font-weight: 500;
    }
  }

  .intro {
    display: flex;
    align-items: flex-start;

    > svg {
      width: 3em;
      height: 3em;
      margin-right: 1em;
    }
  }
`;
