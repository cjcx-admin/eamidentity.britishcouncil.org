import { useState, useRef, useEffect, useCallback, FormEvent } from 'react';

export default function useCopy(
  str: string,
  ref: React.RefObject<HTMLTextAreaElement>
): [boolean, (e: FormEvent<HTMLElement>) => void, (value: boolean) => void] {
  const copyableString = useRef(str);
  const [copied, setCopied] = useState(false);
  const copyAction = useCallback(
    (e: FormEvent<HTMLElement>) => {
      copyTextToClipboard(copyableString.current, ref, e);
      setCopied(true);
    },
    [ref]
  );

  useEffect(() => {
    copyableString.current = str;
  }, [str]);

  return [copied, copyAction, setCopied];
}

function copyTextToClipboard(
  text: string,
  ref: React.RefObject<HTMLTextAreaElement>,
  e: FormEvent<HTMLElement>
) {
  if ('clipboard' in navigator) {
    navigator.clipboard.writeText(text);
  } else {
    ref.current!.select();
    document.execCommand('copy');
    e.currentTarget.focus();
  }
}
