import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    height: `${spacing(15)}px !important`,
  },
  container: {
    marginTop: spacing(-5),
  },
}));
