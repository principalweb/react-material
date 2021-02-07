import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  image: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    height: spacing(16),
    width: spacing(21),
    marginTop: spacing(1),
    marginRight: spacing(1),
    borderRadius: spacing(1),
    border: `2px solid ${palette.gray.light}`,
    '&:hover .MuiBadge-root': {
      display: 'block',
    },
  },
  removeBadge: {
    position: 'absolute',
    right: 0,
    cursor: 'pointer',
    display: 'none',
    '& svg': {
      color: palette.white.main,
      fontSize: '0.75rem',
    },
    '& path': {
      fill: palette.white.main,
    },
  },
}));
