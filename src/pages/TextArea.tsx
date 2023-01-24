import React, { useState } from "react";
import "../Styles/LogInPageStyle.css";

export default function TextArea(): JSX.Element {
  const [inputText, setInputText] = useState("");
  console.log("-> ", inputText);
  return (
    <div>
      <h1> Write - Visualize </h1>
      <h2>Input text for your note : </h2>
      <br />
      <textarea
        name="Text Input"
        rows={40}
        cols={80}
        placeholder="enter your note"
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
}
