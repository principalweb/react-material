import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),

    '& > div:last-child > div:first-child': {
      display: 'none',
    },

    '& > div:last-child > button': {
      marginLeft: theme.spacing(3),
      padding: theme.spacing(0.5),
      background: theme.palette.gray.light,
      borderRadius: theme.spacing(1),
    },
  },
}));
