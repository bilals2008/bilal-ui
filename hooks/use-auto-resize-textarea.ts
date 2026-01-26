import { useRef, useCallback, useEffect } from "react";

interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

export function useAutoResizeTextarea({
  minHeight,
  maxHeight,
}: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset: boolean = false) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }

      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      const newHeight = maxHeight
        ? Math.min(scrollHeight, maxHeight)
        : scrollHeight;
      textarea.style.height = `${Math.max(newHeight, minHeight)}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    adjustHeight();
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}
