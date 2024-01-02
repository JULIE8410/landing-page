import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "../../css/global.css";
import "../../css/checkbox.css";

const CheckboxDemo = () => (
  <div className="ComponentBox">
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
          <Checkbox.Indicator className="CheckboxIndicator">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="Label" htmlFor="c1" style={{ width: "auto" }}>
          이용약관에 동의합니다.
        </label>
      </div>
    </form>
  </div>
);

export default CheckboxDemo;
