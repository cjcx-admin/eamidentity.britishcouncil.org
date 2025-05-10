import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { FileUploadConfig } from 'ors-utils';

interface Props {
  uploadConfig: FileUploadConfig;
}

export const FileRequirements = ({ uploadConfig }: Props) => {
  const { t } = useTranslation();
  const { allowedFileTypes, maxFileSize } = uploadConfig;

  return (
    <Root>
      <span>{t('APPB2C.common.fileUpload.requirements')}</span>
      <ul>
        <li>
          {allowedFileTypes?.map((f, index) =>
            index === 0 ? f.split('.')[1].toUpperCase() : f.replace('.', ', ').toUpperCase()
          )}
        </li>
        <li>
          {t('APPB2C.common.fileUpload.fileSize', { size: Number(maxFileSize) / (1024 * 1024) })}
        </li>
      </ul>
    </Root>
  );
};

const Root = styled.div`
  font-size: 0.8em;
  margin: 0 0 0 3em;

  [dir='rtl'] & {
    margin: 0 3em 0 0;
  }

  & ul {
    margin: 0;
    list-style-position: inside;
    & li {
      margin: 0;
    }
  }
`;
