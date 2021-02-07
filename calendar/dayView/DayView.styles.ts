import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    height: spacing(7.5),
    lineHeight: `${spacing(7.5)}px`,
    width: spacing(11),
    minWidth: spacing(11),
  },
  empty: {
    height: spacing(3.75),
  },
  day: {
    '& td.MuiTableCell-body:first-child': {
      height: spacing(7.5),
      '& div:first-child': {
        height: spacing(3.75),
      },
    },
  },
}));
