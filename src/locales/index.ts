import i18n from 'i18next';
import LanguaeDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { ko, en } from './languages';

i18n
  .use(LanguaeDetector)
  .use(initReactI18next)
  .init({
    // for all options read: https://www.i18next.com/overview/configuration-options
    // debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ko: { translation: ko },
      en: { translation: en },
    },
  });

export default i18n;
