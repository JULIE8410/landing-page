import React from "react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import {
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import "../../css/global.css";
import "../../css/context-menu.css";

const ContextMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <div className="ComponentBox">
      <ContextMenu.Root>
        <ContextMenu.Trigger className="ContextMenuTrigger">
          오른쪽 마우스를 클릭하세요.
        </ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenu.Content
            className="ContextMenuContent"
            sideOffset={5}
            align="end"
          >
            <ContextMenu.Item className="ContextMenuItem">
              뒤로가기 <div className="RightSlot">⌘+[</div>
            </ContextMenu.Item>
            <ContextMenu.Item className="ContextMenuItem" disabled>
              앞으로가기 <div className="RightSlot">⌘+]</div>
            </ContextMenu.Item>
            <ContextMenu.Item className="ContextMenuItem">
              다시로드 <div className="RightSlot">⌘+R</div>
            </ContextMenu.Item>
            <ContextMenu.Sub>
              <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                더보기
                <div className="RightSlot">
                  <ChevronRightIcon />
                </div>
              </ContextMenu.SubTrigger>
              <ContextMenu.Portal>
                <ContextMenu.SubContent
                  className="ContextMenuSubContent"
                  sideOffset={2}
                  alignOffset={-5}
                >
                  <ContextMenu.Item className="ContextMenuItem">
                    다른 이름으로 저장 <div className="RightSlot">⌘+S</div>
                  </ContextMenu.Item>
                  <ContextMenu.Item className="ContextMenuItem">
                    단축키 생성
                  </ContextMenu.Item>
                  <ContextMenu.Item className="ContextMenuItem">
                    설정
                  </ContextMenu.Item>
                  <ContextMenu.Separator className="ContextMenuSeparator" />
                  <ContextMenu.Item className="ContextMenuItem">
                    개발자 도구
                  </ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Portal>
            </ContextMenu.Sub>

            <ContextMenu.Separator className="ContextMenuSeparator" />

            <ContextMenu.CheckboxItem
              className="ContextMenuCheckboxItem"
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            >
              <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              북마크 <div className="RightSlot">⌘+B</div>
            </ContextMenu.CheckboxItem>
            <ContextMenu.CheckboxItem
              className="ContextMenuCheckboxItem"
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
            >
              <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              URL 확인
            </ContextMenu.CheckboxItem>

            <ContextMenu.Separator className="ContextMenuSeparator" />

            <ContextMenu.Label className="ContextMenuLabel">
              People
            </ContextMenu.Label>
            <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
              <ContextMenu.RadioItem
                className="ContextMenuRadioItem"
                value="pedro"
              >
                <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                  <DotFilledIcon />
                </ContextMenu.ItemIndicator>
                John Park
              </ContextMenu.RadioItem>
              <ContextMenu.RadioItem
                className="ContextMenuRadioItem"
                value="colm"
              >
                <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                  <DotFilledIcon />
                </ContextMenu.ItemIndicator>
                Uncertainty
              </ContextMenu.RadioItem>
            </ContextMenu.RadioGroup>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    </div>
  );
};

export default ContextMenuDemo;
