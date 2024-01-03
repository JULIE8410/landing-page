import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import "../../css/global.css";
import "../../css/radio-group.css";

const RadioGroupDemo = () => (
  <div className="ComponentBox">
    <form>
      <RadioGroup.Root
        className="RadioGroupRoot"
        defaultValue="default"
        aria-label="View density"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r1">
            기본
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioGroup.Item
            className="RadioGroupItem"
            value="comfortable"
            id="r2"
          >
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r2">
            편안하게
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r3">
            촘촘하게
          </label>
        </div>
      </RadioGroup.Root>
    </form>
  </div>
);

export default RadioGroupDemo;
