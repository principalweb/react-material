export type AutoCalculateModalProps = {
  isOpened: boolean;
  titleId: string;
  descriptionFirstId: string;
  descriptionSecondId: string;
  onSubmit: () => Promise<undefined | { error: boolean }>;
  onClose: VoidFunction;
};
