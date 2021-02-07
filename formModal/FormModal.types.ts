import { ReactNode } from 'react';
import { Mutator } from 'final-form';

import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';

export type MutatorType<T> = {
  [key: string]: Mutator<T>;
};

export type FormModalProps<T> = ModalContainerProps & {
  title?: string;
  children?: ReactNode;
  onSubmit: PromiseFunction<T>;
  addText?: string | ReactNode;
  addIcon?: ReactNode;
  initialValues?: T;
  mutators?: MutatorType<T>;
};
