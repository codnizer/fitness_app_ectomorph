// src/i18n/capacitorLanguageDetector.js
import { Preferences } from '@capacitor/preferences';

const capacitorLanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    const { value } = await Preferences.get({ key: 'user-language' });
    const lang = value || 'en'; // Default to English if no language is set
    callback(lang);
  },
  init: () => {},
  cacheUserLanguage: async (lng) => {
    await Preferences.set({ key: 'user-language', value: lng });
  },
};

export default capacitorLanguageDetector;
