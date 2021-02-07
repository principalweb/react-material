import { AppLocale } from 'context/locale/AppLocale.enum';

export const LocaleOptions = Object.values(AppLocale).map(locale => ({
  label: `language.${locale}`,
  value: locale,
}));
