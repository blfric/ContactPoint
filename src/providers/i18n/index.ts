import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { spanishContent } from './spanish';
import { englishContent } from './english';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            ...englishContent
        }
      },
      es: {
        translation: {
          ...spanishContent
        }
      },
      // Add more languages as needed...
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
