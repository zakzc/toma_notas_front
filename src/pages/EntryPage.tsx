import React, { useState } from "react";
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

export default function SidePanel(): JSX.Element {
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);
  // 0 for Write Mode, 1 for visualise mode
  const [appMode, setAppMode] = useState(0);
  return (
    <div className="entryPageStyle">
      <div className="leftPanelStyle">
        <button onClick={() => setIsOpenLeft(!isOpenLeft)}>
          {appMode === 1 ? <ArrowBack /> : <></>}
        </button>
        {isOpenLeft && <LeftPanel />}
      </div>
      <div className="textAreaStyle">
        {appMode === 0 ? (
          <button onClick={() => setAppMode(1)}>View Notes</button>
        ) : (
          <button onClick={() => setAppMode(0)}>Write</button>
        )}

        {appMode === 0 ? <TextArea /> : <Visualise />}
      </div>
      <div className="rightPanelStyle">
        <button onClick={() => setIsOpenRight(!isOpenRight)}>
          {appMode === 1 ? <ArrowForward /> : <></>}
        </button>
        {isOpenRight && <RightPanel />}
      </div>
    </div>
  );
}
