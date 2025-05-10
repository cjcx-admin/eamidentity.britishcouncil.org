import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { LoadingContainer } from '@britishcouncil/react-solas';
import { Quote } from '@britishcouncil/react-solas-ors3';
import { UnifiedFile } from 'ors-utils';
import { HtmlTextRaw, Modal, WideReadOnlyField } from 'ors-ui';

import { IdFileStatus } from 'common/models';
import { converters } from 'common';

interface Props {
  files: UnifiedFile[];
  loading: boolean;
  fileAlt: string;
  noFilesTitle?: string;
  noFilesBody?: string;
  docStatus?: IdFileStatus;
  docNote?: string;
}

export const FilePreview = ({
  files,
  loading,
  fileAlt,
  noFilesTitle,
  noFilesBody,
  docStatus,
  docNote,
}: Props) => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const [fileNumber, setFileNumber] = useState(1);

  const statusName = docStatus && converters.toFileStausName().fromFileStatus(docStatus);
  const docRejected = docStatus === 'rejected';

  const isImage = (url: string) =>
    url.includes('rsct=image') || url.includes('wip-placeholder-image.png');

  const toggleFile = (fileUrl: string, fileUrlNumber: number) => {
    setFileUrl(fileUrl);
    setFileNumber(fileUrlNumber);
    setShowModal((prev) => !prev);
  };

  const handleImagePreviewKeyPress = (
    e: React.KeyboardEvent<HTMLImageElement>,
    url: string,
    fileNumber: number
  ) => {
    if (e.key === 'Enter') toggleFile(url, fileNumber);
  };

  return (
    <LoadingContainer loading={loading}>
      {statusName && (
        <>
          <StatusField rejected={docRejected}>
            <WideReadOnlyField
              data-testid="id-status"
              label={t('APPB2C.common.filePreview.status')}
            >
              {statusName}
            </WideReadOnlyField>
          </StatusField>
          {docNote && docRejected && (
            <div className="small">
              <HtmlTextRaw htmlText={docNote} />
            </div>
          )}
        </>
      )}
      {(files.length &&
        files.map((file, index) => {
          const url = file.url || '';
          const fileNumber = index + 1;
          const isRejected = file.status === 'rejected' || file.status === 'reviewed';
          const fileStatusName = converters.toFileStausName().fromFileStatus(file.status);

          return (
            <div key={file.id}>
              <ImageField rejected={isRejected}>
                <div className="desc">
                  <p>{`${t('APPB2C.common.filePreview.label')} ${fileNumber}`}</p>
                  {!statusName && (
                    <>
                      {fileStatusName && (
                        <p className="file-status">
                          {t('APPB2C.common.filePreview.status')}: <b>{fileStatusName}</b>
                        </p>
                      )}
                      {file.note && isRejected && (
                        <div className="small">
                          <HtmlTextRaw htmlText={file.note || ''} />
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="file">
                  {isImage(url) ? (
                    <ImagePreview
                      onClick={() => toggleFile(url, fileNumber)}
                      onKeyDown={(e) => handleImagePreviewKeyPress(e, url, fileNumber)}
                      alt={fileAlt}
                      src={url}
                      tabIndex={0}
                    />
                  ) : (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {t('APPB2C.common.filePreview.pdfPreviewLink')}
                    </a>
                  )}
                </div>
              </ImageField>
            </div>
          );
        })) ||
        ((noFilesTitle || noFilesBody) && (
          <Quote intent="default" title={noFilesTitle ?? ''}>
            {noFilesBody}
          </Quote>
        )) || <></>}
      <Modal
        show={showModal}
        onExit={() => setShowModal((prev) => !prev)}
        title={`${t('APPB2C.common.filePreview.label')} ${fileNumber}`}
        intent="gray"
      >
        <img alt={fileAlt} src={fileUrl} />
      </Modal>
    </LoadingContainer>
  );
};

const ImagePreview = styled.img`
  cursor: pointer;
`;

const StatusField = styled.div<{ rejected?: boolean }>`
  color: ${(props) => props.rejected && '#a94442'};
`;

const ImageField = styled.div<{ rejected?: boolean }>`
  display: flex;
  margin: 15px 0;
  justify-content: space-between;
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p {
      width: 160px;
      margin: 0 0 10px;
      &.file-status {
        color: ${(props) => props.rejected && '#a94442'};
      }
      @media (min-width: 850px) {
        width: 300px;
      }
    }
    button.btn-link {
      padding: 0;
    }
  }
  .file {
    flex: 1 1 auto;

    img {
      border: ${(props) => props.rejected && `2px solid #a94442`};
    }
  }
`;
