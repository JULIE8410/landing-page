import React from "react";
import * as Toggle from "@radix-ui/react-toggle";
import { FontItalicIcon } from "@radix-ui/react-icons";
// import "../css/global.css";
import "../../css/toggle.css";

const ToggleDemo = () => (
  <Toggle.Root className="Toggle" aria-label="Toggle italic">
    <FontItalicIcon />
  </Toggle.Root>
);

export default ToggleDemo;
