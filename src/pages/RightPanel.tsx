import React from "react";
import { useTranslation } from "react-i18next";

import "../Styles/rightPanelStyle.css";

export default function RightPanel(): JSX.Element {
  const { t } = useTranslation();
  const myViewingOptions = [
    "Simple View",
    "Numbered",
    "Levels",
    "Cornel",
    "Flashcards",
  ];
  return (
    <div className="rightPanelStyle">
      <h1>{t("view")}</h1>
      <ul>
        {myViewingOptions.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}
