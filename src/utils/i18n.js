import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          write: "Write",
          view: "View notes",
          visualise: "Visualise your notes",
          inputText: "Input text for your note",
        },
        pt: {
          translation: {
            write: "Escreva",
            view: "Visualise as notas",
            visualise: "Visualise suas notas",
            inputText: "Adicione texto à sua nota",
          },
        },
      },
    },
    fallbackLng: "en",
  });
