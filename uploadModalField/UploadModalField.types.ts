import { ReactNode } from 'react';

export type UploadModalFieldProps = {
  onFileParse: (files: File[]) => void;
  onSetError: (error: boolean) => void;
  title: ReactNode;
};
