import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    '& div:first-child': {
      height: `${spacing(1.5)}px !important`,
    },
  },
}));
