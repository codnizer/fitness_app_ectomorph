// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import capacitorLanguageDetector from './capacitorLanguageDetector';

i18n
  .use(HttpApi)
  .use(capacitorLanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es', 'ar','fr'], // add Arabic here
    fallbackLng: 'en',
    debug: false,
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
