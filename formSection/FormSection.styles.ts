import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ typography, palette, spacing }) => ({
  root: {
    border: `double ${spacing(0.125)}px transparent`,
    borderRadius: spacing(1),
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    backgroundImage: ({ bordered }: { bordered: boolean }) =>
      bordered
        ? 'linear-gradient(#ffffff, #ffffff), radial-gradient(circle at top left, #9fc0ff, #0a57e9)'
        : 'linear-gradient(#ffffff, #ffffff)',
  },
  content: {
    padding: `${spacing(2)}px 0`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    '&.edit-mode': {
      color: palette.primary.main,
    },
    '& .icon-reversed': {
      transform: 'rotate(180deg)',
    },
  },
  actions: {
    '& > *': {
      marginLeft: spacing(3),
    },
  },
  editLabel: {
    '& .MuiFormControlLabel-label': {
      fontSize: typography.h5.fontSize,
      fontWeight: 'normal',
    },
  },
  options: {
    backgroundColor: palette.gray.light,
  },
  title: {
    alignItems: 'center',
    display: 'flex',
  },
  titleBadge: {
    display: 'flex',
    borderRadius: spacing(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: spacing(3),
    height: spacing(3),
    width: 'auto',
    padding: spacing(0, 1),
    background: palette.gray.light,
    marginLeft: spacing(0.5),
    color: palette.gray.main,
    fontSize: typography.h4.fontSize,
  },
}));
