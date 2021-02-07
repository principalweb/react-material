import React from 'react';
import { Field } from 'react-final-form';

import { AppLocale } from 'context/locale/AppLocale.enum';
import { useAuthDispatch, useAuthState, useLocale } from 'hooks';
import { SelectBox } from 'ui/atoms';
import { SET_AUTHORIZED } from 'context/auth/authReducer/authReducer';

import { LocaleOptions } from './dictionaries';
import { LocaleSwitchProps } from './LocaleSwitch.types';
import { useStyles } from './LocaleSwitch.styles';

export const LocaleSwitch = ({ name = 'language', isFormField = true, ...props }: LocaleSwitchProps) => {
  const classes = useStyles();
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();
  const { setLocale, locale, formatMessage } = useLocale();
  const options = LocaleOptions.map(option => ({ ...option, label: formatMessage({ id: option.label }) }));

  return (
    <>
      {isFormField && (
        <Field name={name} value={locale}>
          {inputProps => (
            <SelectBox
              placeholder={formatMessage({ id: 'language.placeholder' })}
              {...props}
              {...inputProps.input}
              items={options}
              onChange={language => {
                user && dispatch({ type: SET_AUTHORIZED, user: { ...user, language: language.toString() } });
                inputProps.input.onChange(language);
              }}
              classes={{ inputValue: classes.input }}
            />
          )}
        </Field>
      )}
      {!isFormField && (
        <SelectBox
          {...props}
          items={options}
          placeholder={formatMessage({ id: 'language.placeholder' })}
          value={locale}
          onChange={language => setLocale(language as AppLocale)}
          classes={{ inputValue: classes.input }}
        />
      )}
    </>
  );
};
