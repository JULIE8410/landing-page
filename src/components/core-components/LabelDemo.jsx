import React from "react";
import * as Label from "@radix-ui/react-label";
import "../../css/global.css";
import "../../css/label.css";

const LabelDemo = () => (
  <div className="ComponentBox">
    <div
      style={{
        display: "flex",
        padding: "0 20px",
        flexWrap: "wrap",
        gap: 15,
        alignItems: "center",
      }}
    >
      <Label.Root className="LabelRoot" htmlFor="firstName">
        이름
      </Label.Root>
      <input
        className="LabelInput"
        type="text"
        id="firstName"
        defaultValue="홍길동"
      />
    </div>
  </div>
);

export default LabelDemo;
