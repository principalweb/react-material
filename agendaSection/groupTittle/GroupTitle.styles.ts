import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: theme.typography.h4.lineHeight,
    color: theme.palette.gray.main,
  },
  day: {
    marginLeft: 'auto',
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    color: theme.palette.gray.main,
  },
}));
