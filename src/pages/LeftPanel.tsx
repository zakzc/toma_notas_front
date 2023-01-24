import React from "react";
import "../Styles/LogInPageStyle.css";

interface myNotesInterface {
  noteName: string;
  noteNumber: number;
}

export default function LeftPanel(): JSX.Element {
  // dummy value, actual values will come from DB
  const myNotes: myNotesInterface[] = [
    { noteName: "note 1", noteNumber: 12343 },
    { noteName: "note 2", noteNumber: 14343 },
    { noteName: "note 3", noteNumber: 22343 },
  ];

  return (
    <div>
      <h1>Your notes</h1>
      {myNotes.map((n) => (
        <li key={n.noteNumber}>{n.noteName}</li>
      ))}
    </div>
  );
}
