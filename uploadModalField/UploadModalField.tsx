import React, { useRef } from 'react';

import { UploadIcon } from 'ui/atoms/icons';
import { Box, Typography } from 'ui/atoms';
import { pdfToImages } from '../uploadModal/UploadModal.helpers';

import { UploadModalFieldProps } from './UploadModalField.types';
import { useStyles } from './UploadModalField.styles';

const validTypes = 'image/*,application/pdf';

export const UploadModalField = ({ onFileParse, onSetError, title }: UploadModalFieldProps) => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);

  const isFileValid = (file: File) => {
    return validTypes.split(',').reduce((valid, type) => {
      return valid || !!file.type.match(type);
    }, false);
  };

  const parseFiles = async (files: File[]): Promise<File[]> => {
    const parsedFiles = await Promise.all(
      files.map(async (file: File) => {
        if (file.type === 'application/pdf') {
          return await pdfToImages(file);
        }

        return [file];
      }),
    );

    return parsedFiles.flat();
  };

  const handleChange = async ({ target: { validity, files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (validity.valid && files && files.length && Array.from(files).every(isFileValid)) {
      const parsedFiles = await parseFiles(Array.from(files));
      onFileParse(parsedFiles);

      onSetError(false);
    } else {
      onSetError(true);
    }
  };

  return (
    <Box className={classes.container}>
      <UploadIcon />
      <Typography>{title}</Typography>
      <input
        ref={inputRef}
        className={classes.input}
        accept={validTypes}
        type="file"
        onChange={handleChange}
        multiple
      />
    </Box>
  );
};
