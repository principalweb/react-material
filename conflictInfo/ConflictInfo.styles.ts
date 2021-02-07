import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  info: {
    paddingTop: theme.spacing(3),
    color: theme.palette.black.main,
    '& strong': {
      color: theme.palette.red.main,
    },
  },
}));
