import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import hi from './locales/hi.json';
import { getEnv } from '../utils/env';

const supported = (getEnv('REACT_APP_SUPPORTED_LOCALES') || 'en,hi').split(',');
const fallback = getEnv('REACT_APP_DEFAULT_LOCALE') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, hi: { translation: hi } },
    lng: fallback,
    fallbackLng: fallback,
    interpolation: { escapeValue: false },
    supportedLngs: supported
  });

export default i18n;
