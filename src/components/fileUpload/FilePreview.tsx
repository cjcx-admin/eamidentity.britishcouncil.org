import { useCallback, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from '@emotion/styled';
import { UppyFile } from '@uppy/core';
import { LinkButton } from '@britishcouncil/react-solas-ors3';
import { Alert } from '@britishcouncil/react-solas';
import { UppyFileWithMeta } from './models';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

interface Props {
  file?: UppyFileWithMeta;
  removeFile: (file: UppyFile) => void;
  setRestrictions: (value: string) => void;
  disableRemove?: boolean;
}

export const FilePreview = ({ file, removeFile, setRestrictions, disableRemove }: Props) => {
  const { t } = useTranslation();
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  const isPdf = file?.type === 'application/pdf';

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => setNumPages(numPages);
  const onPdfPasswordProtected = () => {
    removeIdFile();
    setRestrictions(t('APPB2C.common.fileUpload.pdfPasswordMsg'));
  };

  const changePage = useCallback(
    (offset: number) => setPageNumber((prevPageNumber) => prevPageNumber + offset),
    []
  );

  const removeIdFile = useCallback(() => file && removeFile(file), [file, removeFile]);

  return (
    <Root>
      {file?.preview && <img src={file.preview} alt={t('APPB2C.common.fileUpload.imgAlt')} />}

      {file && isPdf && (
        <Document
          file={file.data}
          onLoadSuccess={onDocumentLoadSuccess}
          onPassword={onPdfPasswordProtected}
        >
          <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />
        </Document>
      )}

      {file && !file?.preview && !isPdf && (
        <Alert type="success">
          <Trans
            i18nKey="APPB2C.common.fileUpload.success"
            values={{ fileName: file?.name }}
            components={{ italic: <i />, bold: <strong /> }}
          />
        </Alert>
      )}
      <Actions>
        {file?.meta.isApproved
          ? t('APPB2C.common.fileUpload.fileApproved')
          : !disableRemove && (
              <LinkButton onClick={removeIdFile}>{t('APPB2C.common.fileUpload.remove')}</LinkButton>
            )}
        {isPdf && numPages > 1 && (
          <PdfNavigation>
            <button
              className="btn-link"
              type="button"
              disabled={pageNumber <= 1}
              onClick={() => changePage(-1)}
            >
              {`< ${t('APPB2C.common.general.previous')}`}
            </button>
            <p>
              {t('APPB2C.common.fileUpload.filesCount', { current: pageNumber, total: numPages })}
            </p>
            <button
              className="btn-link"
              type="button"
              disabled={pageNumber >= numPages}
              onClick={() => changePage(1)}
            >
              {`${t('APPB2C.common.general.next')} >`}
            </button>
          </PdfNavigation>
        )}
      </Actions>
    </Root>
  );
};

export const Root = styled.div`
  margin-left: 2em;
  margin-right: auto;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
`;

const PdfNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button,
  p {
    margin: 0 5px;
  }
  button:disabled {
    color: #999;
    cursor: not-allowed;
  }
`;
