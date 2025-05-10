import { forwardRef } from 'react';
import { UppyFile } from '@uppy/core';
import styled from '@emotion/styled';
import { Divider, ErrorMessage } from '@britishcouncil/react-solas-ors3';
import { defUploadConfig, FileUploadConfig } from 'ors-utils';

import { FilePreview } from './FilePreview';
import { FileRequirements } from './FileRequirements';

interface Props {
  title?: string;
  file?: UppyFile;
  count?: number;
  removeFile?: (file: UppyFile) => void;
  testid?: string;
  errorMsg?: string;
  visible?: boolean;
  uploadConfig?: FileUploadConfig;
  setRestrictions: (value: string) => void;
  disableRemove?: boolean;
}

export const ChooseFile = forwardRef<HTMLDivElement, Props>(
  (
    {
      title = 'File',
      count,
      file,
      testid,
      removeFile = () => null,
      errorMsg,
      visible = true,
      uploadConfig,
      setRestrictions,
      disableRemove,
    },
    ref
  ) => {
    return (
      <Root data-testid={testid} visible={visible}>
        <Title>
          {count && <span>{count}</span>}
          <i>{title}</i>
        </Title>
        <RequirementsWrapper>
          <label>
            <UploadBtn ref={ref} hide={!!file} />
          </label>
          {file ? (
            <FilePreview
              file={file}
              removeFile={removeFile}
              setRestrictions={setRestrictions}
              disableRemove={disableRemove}
            />
          ) : (
            <FileRequirements uploadConfig={{ ...uploadConfig, ...defUploadConfig }} />
          )}
        </RequirementsWrapper>
        <ErrorMessage className="has-error help-block">{errorMsg}</ErrorMessage>
        <Divider />
      </Root>
    );
  }
);

export const Root = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  margin: 2em 0;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  span {
    display: inline-block;
    min-width: 26px;
    height: 26px;
    text-align: center;
    background: #005cb9;
    border-radius: 50%;
    line-height: 26px;
    color: white;
    margin-right: 10px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 10px;
    }
  }
`;

export const RequirementsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  & > label {
    margin: 0.5em 0;
  }
`;

export const UploadBtn = styled.div<{ hide: boolean }>`
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  button {
    border: 3px solid #005cb9;
    color: #005cb9;
    background: #fff;
    line-height: 1.3;
    border-radius: 100px;
    padding: 0.96em 35px;
    min-width: 16.4em;
    cursor: pointer;
    font-size: 0.9em;
    font-weight: 700;

    [dir='rtl'] & {
      font-weight: 500;
    }
  }
`;
