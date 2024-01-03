import React from "react";
import * as Switch from "@radix-ui/react-switch";
import "../../css/global.css";
import "../../css/switch.css";

const SwitchDemo = () => (
  <div className="ComponentBox">
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label
          className="SwitchLabel"
          htmlFor="airplane-mode"
          style={{ paddingRight: 15 }}
        >
          비행기 모드
        </label>
        <Switch.Root className="SwitchRoot" id="airplane-mode">
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      </div>
    </form>
  </div>
);

export default SwitchDemo;
