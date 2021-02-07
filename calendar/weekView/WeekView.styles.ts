import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    height: spacing(7.5),
    lineHeight: `${spacing(7.5)}px`,
  },
  empty: {
    height: spacing(3.75),
  },
  week: {
    '& td:first-child': {
      '& div:first-child': {
        height: spacing(3.75),
      },
    },
  },
}));
