import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: spacing(22),
    color: palette.gray.main,
    backgroundColor: palette.gray.light,
    border: `1px solid ${palette.gray.main}`,
    borderRadius: spacing(1.25),
    '& svg': {
      width: spacing(6),
      height: spacing(6),
      marginBottom: spacing(1),
    },
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    opacity: 0,
  },
}));
