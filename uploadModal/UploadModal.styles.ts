import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  previewTitle: {
    marginTop: spacing(3),
    fontSize: typography.h5.fontSize,
    fontWeight: typography.fontWeightBold,
    color: palette.gray.main,
  },
  actions: {
    padding: spacing(2),
    margin: spacing(0, 1),
    borderTop: `1px solid ${palette.gray.light}`,
  },
}));
