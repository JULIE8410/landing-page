import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import "../../css/global.css";
import "../../css/dropdown-menu.css";

const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <div className="ComponentBox">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="DropdownIconButton" aria-label="Customise options">
            <HamburgerMenuIcon />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
            <DropdownMenu.Item className="DropdownMenuItem">
              새탭열기 <div className="RightSlot">⌘+T</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              새창열기 <div className="RightSlot">⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem" disabled>
              시크릿모드 열기 <div className="RightSlot">⇧+⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                더 많은 툴
                <div className="RightSlot">
                  <ChevronRightIcon />
                </div>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  className="DropdownMenuSubContent"
                  sideOffset={2}
                  alignOffset={-5}
                >
                  <DropdownMenu.Item className="DropdownMenuItem">
                    저장 <div className="RightSlot">⌘+S</div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="DropdownMenuItem">
                    단축키 생성
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="DropdownMenuItem">
                    설정
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="DropdownMenu.Separator" />
                  <DropdownMenu.Item className="DropdownMenuItem">
                    개발자도구
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator className="DropdownMenuSeparator" />

            <DropdownMenu.CheckboxItem
              className="DropdownMenuCheckboxItem"
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              북마크보기 <div className="RightSlot">⌘+B</div>
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              className="DropdownMenuCheckboxItem"
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              URL 확인
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.Separator className="DropdownMenuSeparator" />

            <DropdownMenu.Label className="DropdownMenuLabel">
              People
            </DropdownMenu.Label>
            <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
              <DropdownMenu.RadioItem
                className="DropdownMenuRadioItem"
                value="pedro"
              >
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <DotFilledIcon />
                </DropdownMenu.ItemIndicator>
                John Park
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem
                className="DropdownMenuRadioItem"
                value="colm"
              >
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <DotFilledIcon />
                </DropdownMenu.ItemIndicator>
                Uncertainty
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>

            <DropdownMenu.Arrow className="DropdownMenuArrow" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuDemo;
