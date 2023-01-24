import React from "react";
import "../Styles/rightPanelStyle.css";

export default function RightPanel(): JSX.Element {
  const myViewingOptions = [
    "Simple View",
    "Numbered",
    "Levels",
    "Cornel",
    "Flashcards",
  ];
  return (
    <div className="rightPanelStyle">
      <h1>How do you want to see your Notes?</h1>
      <ul>
        {myViewingOptions.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}
