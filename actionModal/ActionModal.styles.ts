import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  list: {
    flex: 1,
    paddingLeft: spacing(2),
    overflow: 'scroll',
    boxShadow: `inset -2px 0px 4px rgba(130, 141, 184, 0.2)`,
  },
  rightPanel: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    padding: spacing(2),
    borderTop: `2px solid ${palette.gray.light}`,
    borderBottom: `2px solid ${palette.gray.light}`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: spacing(2),
  },
}));
