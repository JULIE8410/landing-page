import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import "../../css/global.css";
import "../../css/collapsible.css";

const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="ComponentBox">
      <Collapsible.Root
        className="CollapsibleRoot"
        open={open}
        onOpenChange={setOpen}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="Text" style={{ color: "white" }}>
            @홍길동님이 보유한 3개의 저장소
          </span>
          <Collapsible.Trigger asChild>
            <button className="CollapsibleIconButton">
              {open ? <Cross2Icon /> : <RowSpacingIcon />}
            </button>
          </Collapsible.Trigger>
        </div>

        <div className="Repository">
          <span className="Text">@radix-ui/primitives</span>
        </div>

        <Collapsible.Content>
          <div className="Repository">
            <span className="Text">@radix-ui/colors</span>
          </div>
          <div className="Repository">
            <span className="Text">@stitches/react</span>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};

export default CollapsibleDemo;
