import { ButtonHTMLAttributes, createRef, FC, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegCopy, FaCheck } from 'react-icons/fa';
import cn from 'classnames';
import styled from '@emotion/styled';
import useCopy from 'core/hooks/useCopy';

interface CopyButtonTrans {
  copy: string;
  copied: string;
}

const defaultTrans = {
  copy: 'APPB2C.common.basic.copy',
  copied: 'APPB2C.common.basic.copied',
};

interface Props {
  copyValue?: any;
  i18n?: CopyButtonTrans;
}

export const CopyButton: FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  copyValue,
  i18n,
  ...props
}) => {
  const { t } = useTranslation();
  const trans = { ...defaultTrans, ...i18n };

  const copyRef = createRef<HTMLTextAreaElement>();
  const [copied, copy, setCopied] = useCopy(copyValue ?? '', copyRef);

  const handleCopyClick = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (!copyValue) return;

    copy(e);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <StyledLinkButton
        onClick={handleCopyClick}
        {...props}
        className={cn('btn-link', 'link', copied ? 'copied' : '', props.className)}
      >
        <div className="action">
          <span className="text">{t(trans.copy)}</span> <FaRegCopy />
        </div>
        <div className="info">
          <span className="text">{t(trans.copied)}</span>
          <span className="icon">
            {' '}
            <FaCheck />
          </span>
        </div>
      </StyledLinkButton>

      <GhostInput
        tabIndex={-1}
        spellCheck={false}
        readOnly
        ref={copyRef}
        value={copyValue}
        onChange={(value) => (value.currentTarget.value = copyValue!)}
      />
    </>
  );
};

/** It needs to be a textarea to support copying multiline values
 *  but it cannot be completely hidden using display nor visibility...
 */
const GhostInput = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  font-size: 0;
  border: none;
  outline: none;
  overflow: hidden;
  background: none;
  resize: none;
  z-index: -1;
`;

const StyledLinkButton = styled.button`
  text-decoration: none;
  outline: 0;
  white-space: nowrap;

  .info,
  .action {
    position: absolute;
  }

  .info {
    opacity: 0;
    transition: all 0.35s ease-out;
  }

  .action {
    opacity: 1;
    transition: all 0.35s ease-in;
  }

  &.copied {
    .info {
      opacity: 1;
      transition: all 0.15s ease-in;
    }

    .action {
      opacity: 0;
      transition: all 0.15s ease-out;
    }
  }

  &:focus,
  &:hover {
    text-decoration: none;

    .text {
      text-decoration: underline;
    }

    .icon {
      color: #169534;
    }
  }
`;
