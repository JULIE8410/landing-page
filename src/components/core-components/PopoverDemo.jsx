import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import "../../css/global.css";
import "../../css/popover.css";

const PopoverDemo = () => (
  <div className="ComponentBox">
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="PopoverIconButton" aria-label="Update dimensions">
          <MixerHorizontalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p className="PopoverText" style={{ marginBottom: 10 }}>
              치수
            </p>
            <fieldset className="PopoverFieldset">
              <label className="PopoverLabel" htmlFor="width">
                가로
              </label>
              <input className="PopoverInput" id="width" defaultValue="100%" />
            </fieldset>
            <fieldset className="PopoverFieldset">
              <label className="PopoverLabel" htmlFor="maxWidth">
                가로 최대
              </label>
              <input
                className="PopoverInput"
                id="maxWidth"
                defaultValue="300px"
              />
            </fieldset>
            <fieldset className="PopoverFieldset">
              <label className="PopoverLabel" htmlFor="height">
                세로
              </label>
              <input className="PopoverInput" id="height" defaultValue="25px" />
            </fieldset>
            <fieldset className="PopoverFieldset">
              <label className="PopoverLabel" htmlFor="maxHeight">
                세로 최대
              </label>
              <input
                className="PopoverInput"
                id="maxHeight"
                defaultValue="none"
              />
            </fieldset>
          </div>
          <Popover.Close className="PopoverClose" aria-label="Close">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  </div>
);

export default PopoverDemo;
