import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "../Styles/entryPageStyle.css";
import "../Styles/rightPanelStyle.css";
import "../Styles/leftPanelStyle.css";
import "../Styles/textAreaStyle.css";

import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TextArea from "./TextArea";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Visualise from "./Visualise";

export default function EntryPage(): JSX.Element {
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);
  // 0 for Write Mode, 1 for visualise mode
  const [appMode, setAppMode] = useState(0);
  const { t, i18n } = useTranslation();

  const LeftPanelView = () => (
    <div className="leftPanelStyle">
      <button onClick={() => setIsOpenLeft(!isOpenLeft)}>
        {appMode === 1 ? <ArrowBack /> : <></>}
      </button>
      {isOpenLeft && <LeftPanel />}
    </div>
  );

  const RightPanelView = () => (
    <div className="rightPanelStyle">
      <button onClick={() => setIsOpenRight(!isOpenRight)}>
        {appMode === 1 ? <ArrowForward /> : <></>}
      </button>
      {isOpenRight && <RightPanel />}
    </div>
  );

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const WriteViewPanel = () => (
    <>
      {appMode === 0 ? (
        <button onClick={() => setAppMode(1)}>{t("view")}</button>
      ) : (
        <button onClick={() => setAppMode(0)}>{t("write")}</button>
      )}
    </>
  );

  const ChangeLanguageSwitch = () => (
    <>
      <button onClick={() => changeLanguage("en")}> EN </button>
      <span> - </span>
      <button onClick={() => changeLanguage("pt")}> PT </button>
    </>
  );

  return (
    <div className="entryPageStyle">
      {appMode === 1 ? <LeftPanelView /> : <></>}
      <div className="textAreaStyle">
        <WriteViewPanel />
        {appMode === 0 ? <TextArea /> : <Visualise />}
        <ChangeLanguageSwitch />
      </div>
      {appMode === 1 ? <RightPanelView /> : <></>}
    </div>
  );
}
