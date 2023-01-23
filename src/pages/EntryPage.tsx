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

export default function SidePanel(): JSX.Element {
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);
  return (
    <div className="entryPageStyle">
      <div className="leftPanelStyle">
        <button onClick={() => setIsOpenLeft(!isOpenLeft)}>
          {/* <svg data-testid="ArrowBack"></svg> */}
          <ArrowBack />
        </button>
        {isOpenLeft && <LeftPanel />}
      </div>
      <div className="textAreaStyle">
        <TextArea />
      </div>
      <div className="rightPanelStyle">
        <button onClick={() => setIsOpenRight(!isOpenRight)}>
          <ArrowForward />
        </button>
        {isOpenRight && <RightPanel />}
      </div>
    </div>
  );
}
