import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    paddingTop: 0,
    '& > .MuiBox-root:last-child': {
      borderBottom: 0,
    },
  },
  badge: {
    right: -theme.spacing(1),
    top: theme.spacing(1),
  },
}));
