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
      yourNotes: "Your notes: ",
      viewNotes: "How do you want to visualise your notes?",
      viewOptions: [
        "Simple View",
        "Numbered",
        "Levels",
        "Cornel",
        "Flashcards",
      ],
    },
  },
  pt: {
    translation: {
      write: "Escreva",
      view: "Visualise as notas",
      visualise: "Visualise suas notas",
      inputText: "Adicione texto à sua nota",
      yourNotes: "Suas notas",
      viewNotes: "Como você quer visualisar as suas notas?",
      viewOptions: ["Simples", "Numerada", "Em níveis", "Cornel", "Cartões"],
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
