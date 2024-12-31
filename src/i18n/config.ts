import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      services: {
        title: "Our Services",
        translation: {
          title: "Translation",
          description: "Professional translation services between English, French, Spanish, and German"
        },
        interpreting: {
          title: "Interpreting",
          description: "Expert interpreting services between English and French"
        },
        transcription: {
          title: "Transcription",
          description: "Accurate transcription in English, French, Spanish, and German"
        },
        audiovisual: {
          title: "Audiovisual Translation",
          description: "Specialized audiovisual translation across multiple languages"
        },
        localization: {
          title: "Localization",
          description: "We adapt websites and software to align with target languages, cultures, and standards"
        }
      }
    }
  },
  fr: {
    translation: {
      services: {
        title: "Nos Services",
        translation: {
          title: "Traduction",
          description: "Services de traduction professionnelle entre anglais, français, espagnol et allemand"
        },
        interpreting: {
          title: "Interprétation",
          description: "Services d'interprétation experts entre anglais et français"
        },
        transcription: {
          title: "Transcription",
          description: "Transcription précise en anglais, français, espagnol et allemand"
        },
        audiovisual: {
          title: "Traduction Audiovisuelle",
          description: "Traduction audiovisuelle spécialisée dans plusieurs langues"
        },
        localization: {
          title: "Localisation",
          description: "Nous adaptons les sites web et les logiciels pour les aligner aux langues, cultures et normes cibles"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;