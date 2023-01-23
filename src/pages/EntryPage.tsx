import React, { useState } from "react";
import "../Styles/EntryPageStyle.css";
import TextArea from "./TextArea";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function SidePanel(): JSX.Element {
  // State to keep track of whether the panel is open or closed
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);

  return (
    <div className="entryPageStyle">
      <div>
        <button onClick={() => setIsOpenLeft(!isOpenLeft)}>
          Toggle panel Left
        </button>
        {/* The panel itself */}
        {isOpenLeft && <LeftPanel />}
      </div>
      <TextArea />
      <div>
        <button onClick={() => setIsOpenRight(!isOpenRight)}>
          Toggle panel Right
        </button>
        {isOpenRight && <RightPanel />}
      </div>
    </div>
  );
}
