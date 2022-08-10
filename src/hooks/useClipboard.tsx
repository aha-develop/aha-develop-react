import { useState } from "react";

interface UseClipboardOptions {
  timeout?: number;
}

export const useClipboard = (options: UseClipboardOptions = {}) => {
  const [copied, setCopied] = useState<Boolean>(false);

  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), options.timeout || 1000);
  };

  return [onCopy, copied] as const;
};
