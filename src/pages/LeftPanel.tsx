import React from "react";
import { useTranslation } from "react-i18next";

import "../Styles/leftPanelStyle.css";

interface myNotesInterface {
  noteName: string;
  noteNumber: number;
}

export default function LeftPanel(): JSX.Element {
  const { t } = useTranslation();
  // dummy value, actual values will come from DB
  const myNotes: myNotesInterface[] = [
    { noteName: "note 1", noteNumber: 12343 },
    { noteName: "note 2", noteNumber: 14343 },
    { noteName: "note 3", noteNumber: 22343 },
  ];

  return (
    <div className="leftPanelStyle">
      <h1>{t("yourNotes")}</h1>
      <ul>
        {myNotes.map((n) => (
          <li key={n.noteNumber}>{n.noteName}</li>
        ))}
      </ul>
    </div>
  );
}
