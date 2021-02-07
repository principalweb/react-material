import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(3),
      flex: '1 0 auto',
    },
  },
}));
