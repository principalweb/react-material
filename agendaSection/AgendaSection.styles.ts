import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  tabs: {
    '& .MuiTab-root': {
      minWidth: 90,
    },
  },
  scrollable: {
    right: -theme.spacing(1),
  },
  group: {
    paddingRight: theme.spacing(2),
  },
  moreButton: {
    justifyContent: 'left',
  },
}));
