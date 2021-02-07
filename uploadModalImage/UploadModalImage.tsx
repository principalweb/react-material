import React, { useEffect, useState } from 'react';

import { Badge, Box } from 'ui/atoms';
import { CloseIcon } from 'ui/atoms/icons';
import { readFileAsync } from '../uploadModal/UploadModal.helpers';

import { useStyles } from './UploadModalImage.styles';
import { UploadModalImageProps } from './UploadModalImage.types';

export const UploadModalImage = ({ file, onRemove }: UploadModalImageProps) => {
  const classes = useStyles();
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    readFileAsync(file).then(setImage);
  }, [file, setImage]);

  return image ? (
    <Box className={classes.image} style={{ backgroundImage: `url(${image})` }}>
      <Badge className={classes.removeBadge} onClick={onRemove} badgeContent={<CloseIcon />} color="error" />
    </Box>
  ) : null;
};
