import React, { useState } from "react";
import "../Styles/EntryPageStyle.css";
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
      <div>
        <button onClick={() => setIsOpenLeft(!isOpenLeft)}>
          {/* <svg data-testid="ArrowBack"></svg> */}
          <ArrowBack />
        </button>
        {isOpenLeft && <LeftPanel />}
      </div>
      <TextArea />
      <div>
        <button onClick={() => setIsOpenRight(!isOpenRight)}>
          <ArrowForward />
        </button>
        {isOpenRight && <RightPanel />}
      </div>
    </div>
  );
}
