import { useRef, useState, useCallback } from "react";

interface UseFileInputProps {
  accept?: string;
  maxSize?: number; // In MB
}

export function useFileInput({ accept, maxSize }: UseFileInputProps = {}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        if (maxSize && selectedFile.size > maxSize * 1024 * 1024) {
          alert(`File size exceeds ${maxSize}MB`);
          return;
        }
        setFile(selectedFile);
        setFileName(selectedFile.name);
      }
    },
    [maxSize]
  );

  const clearFile = useCallback(() => {
    setFile(null);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  return { fileName, file, fileInputRef, handleFileSelect, clearFile };
}
