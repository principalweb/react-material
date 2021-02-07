import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  listLabel: {
    marginTop: spacing(2),
    display: 'inline-block',
  },
  list: {
    maxHeight: spacing(28),
    overflow: 'scroll',
    '& > .MuiBox-root:last-child': {
      marginBottom: 0,
    },
  },
  highlight: {
    color: 'red',
  },
}));
