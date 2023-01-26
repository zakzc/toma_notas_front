import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "../Styles/LogInPageStyle.css";

export default function TextArea(): JSX.Element {
  const [inputText, setInputText] = useState("");
  const { t } = useTranslation();
  console.log("Input: ", inputText);

  return (
    <div>
      <h2>{t("inputText")}</h2>
      <br />
      <textarea
        name="Text Input"
        rows={50}
        cols={80}
        placeholder="enter your note"
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
}
