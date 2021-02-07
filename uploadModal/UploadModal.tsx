import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Alert, Box, DialogActions, DialogContent, Typography } from 'ui/atoms';
import { UploadIcon } from 'ui/atoms/icons';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { UploadModalField, UploadModalImage } from 'ui/organisms';

import { UploadModalProps } from './UploadModal.types';
import { useStyles } from './UploadModal.styles';

export const UploadModal = ({ onClose, onUpload, isSubmitting, ...props }: UploadModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [fileList, setFileList] = useState<File[]>([]);
  const [isError, setError] = useState(false);

  const removeImage = (removedFile: File) => {
    setFileList(files => files.filter(file => file !== removedFile));
  };

  const isFile = !!fileList.length;

  return (
    <Modal title={formatMessage({ id: 'upload_modal.upload_file' })} onClose={onClose} fullWidth {...props}>
      <DialogContent>
        <UploadModalField
          onFileParse={parsedFiles => setFileList(files => [...files, ...parsedFiles])}
          onSetError={setError}
          title={
            <>
              <strong>{formatMessage({ id: 'upload_modal.add_files' })}</strong>{' '}
              {formatMessage({ id: 'upload_modal.or_drag_and_drop' })}
            </>
          }
        />
        {isFile && (
          <>
            <Typography className={classes.previewTitle}>{formatMessage({ id: 'upload_modal.preview' })}</Typography>
            <Box display="flex" flexWrap="wrap">
              {fileList.map((file, index) => (
                <UploadModalImage key={file.name + index} file={file} onRemove={() => removeImage(file)} />
              ))}
            </Box>
          </>
        )}

        {!!isError && (
          <Box mt={3}>
            <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>
          </Box>
        )}
      </DialogContent>

      <DialogActions className={classes.actions}>
        <CancelButton variant="outlined" size="large" onClick={onClose}>
          {formatMessage({ id: 'common.cancel' })}
        </CancelButton>
        <SubmitButton
          type="submit"
          startIcon={<UploadIcon color="inherit" />}
          size="large"
          color="primary"
          variant="contained"
          disabled={!isFile || isError}
          onClick={() => fileList && onUpload(fileList)}
          isLoading={isSubmitting}
        >
          {formatMessage({ id: 'common.upload' })}
        </SubmitButton>
      </DialogActions>
    </Modal>
  );
};
