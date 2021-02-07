import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  modal: {
    '& .MuiDialogContent-root': {
      paddingTop: spacing(1),
    },
  },
  col: {
    marginRight: '8.333333%',
    '& .MuiFormControl-root': {
      margin: 0,
    },
  },
  actions: {
    marginTop: spacing(1),
    padding: spacing(1.75, 2, 2, 2),
    borderTop: `${spacing(0.25)}px solid ${palette.gray.light}`,
  },
}));
