import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      write: "Write",
      view: "View notes",
      visualise: "Visualise your notes",
      inputText: "Input text for your note",
    },
  },
  pt: {
    translation: {
      write: "Escreva",
      view: "Visualise as notas",
      visualise: "Visualise suas notas",
      inputText: "Adicione texto à sua nota",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
