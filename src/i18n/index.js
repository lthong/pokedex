import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en-US';
import zh from './zh-TW';

const resources = {
  en: {
    translation: en,
  },
  'zh-TW': {
    translation: zh,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh-TW',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
