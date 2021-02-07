import { DialogProps } from '@material-ui/core/Dialog';

export type UploadModalProps = Omit<DialogProps, 'open' | 'onClose'> & {
  isOpened: boolean;
  isSubmitting?: boolean;
  onClose: VoidFunction;
  onUpload: (files: File[]) => void;
};
