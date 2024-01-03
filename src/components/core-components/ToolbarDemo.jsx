import React from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from "@radix-ui/react-icons";
import "../../css/global.css";
import "../../css/toolbar.css";

const ToolbarDemo = () => (
  <div className="ComponentBox">
    <Toolbar.Root className="ToolbarRoot" aria-label="Formatting options">
      <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
        <Toolbar.ToggleItem
          className="ToolbarToggleItem"
          value="bold"
          aria-label="Bold"
        >
          <FontBoldIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className="ToolbarToggleItem"
          value="italic"
          aria-label="Italic"
        >
          <FontItalicIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className="ToolbarToggleItem"
          value="strikethrough"
          aria-label="Strike through"
        >
          <StrikethroughIcon />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator className="ToolbarSeparator" />
      <Toolbar.ToggleGroup
        type="single"
        defaultValue="center"
        aria-label="Text alignment"
      >
        <Toolbar.ToggleItem
          className="ToolbarToggleItem"
          value="left"
          aria-label="Left aligned"
        >
          <TextAlignLeftIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className="ToolbarToggleItem"
          value="center"
          aria-label="Center aligned"
        >
          <TextAlignCenterIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className="ToolbarToggleItem"
          value="right"
          aria-label="Right aligned"
        >
          <TextAlignRightIcon />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator className="ToolbarSeparator" />
      <Toolbar.Link
        className="ToolbarLink"
        href="#"
        target="_blank"
        style={{ marginRight: 10 }}
      >
        2시간 전에 수정됨
      </Toolbar.Link>
      <Toolbar.Button className="ToolbarButton" style={{ marginLeft: "auto" }}>
        공유
      </Toolbar.Button>
    </Toolbar.Root>
  </div>
);

export default ToolbarDemo;
