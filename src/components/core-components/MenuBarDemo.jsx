import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import "../../css/global.css";
import "../../css/menu-bar.css";

const RADIO_ITEMS = ["이형선", "김현주", "장산"];
const CHECK_ITEMS = ["북마크바 항상 보이기", "전체 URL 항상 표시"];

const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <div className="ComponentBox">
      <Menubar.Root className="MenubarRoot">
        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">파일</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="MenubarContent"
              align="start"
              sideOffset={5}
              alignOffset={-3}
            >
              <Menubar.Item className="MenubarItem">
                새탭열기<div className="RightSlot">⌘ T</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem">
                새창열기 <div className="RightSlot">⌘ N</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem" disabled>
                시크릿모드열기
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Sub>
                <Menubar.SubTrigger className="MenubarSubTrigger">
                  공유
                  <div className="RightSlot">
                    <ChevronRightIcon />
                  </div>
                </Menubar.SubTrigger>
                <Menubar.Portal>
                  <Menubar.SubContent
                    className="MenubarSubContent"
                    alignOffset={-5}
                  >
                    <Menubar.Item className="MenubarItem">이메일</Menubar.Item>
                    <Menubar.Item className="MenubarItem">메시지</Menubar.Item>
                    <Menubar.Item className="MenubarItem">메모</Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Portal>
              </Menubar.Sub>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem">
                인쇄 <div className="RightSlot">⌘ P</div>
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">수정</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="MenubarContent"
              align="start"
              sideOffset={5}
              alignOffset={-3}
            >
              <Menubar.Item className="MenubarItem">
                취소 <div className="RightSlot">⌘ Z</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem">
                재실행 <div className="RightSlot">⇧ ⌘ Z</div>
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Sub>
                <Menubar.SubTrigger className="MenubarSubTrigger">
                  찾기
                  <div className="RightSlot">
                    <ChevronRightIcon />
                  </div>
                </Menubar.SubTrigger>

                <Menubar.Portal>
                  <Menubar.SubContent
                    className="MenubarSubContent"
                    alignOffset={-5}
                  >
                    <Menubar.Item className="MenubarItem">
                      웹에서 검색
                    </Menubar.Item>
                    <Menubar.Separator className="MenubarSeparator" />
                    <Menubar.Item className="MenubarItem">찾기</Menubar.Item>
                    <Menubar.Item className="MenubarItem">
                      다음 찾기
                    </Menubar.Item>
                    <Menubar.Item className="MenubarItem">
                      이전 찾기
                    </Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Portal>
              </Menubar.Sub>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem">자르기</Menubar.Item>
              <Menubar.Item className="MenubarItem">복사</Menubar.Item>
              <Menubar.Item className="MenubarItem">붙여넣기</Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">보기</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="MenubarContent"
              align="start"
              sideOffset={5}
              alignOffset={-14}
            >
              {CHECK_ITEMS.map((item) => (
                <Menubar.CheckboxItem
                  className="MenubarCheckboxItem inset"
                  key={item}
                  checked={checkedSelection.includes(item)}
                  onCheckedChange={() =>
                    setCheckedSelection((current) =>
                      current.includes(item)
                        ? current.filter((el) => el !== item)
                        : current.concat(item)
                    )
                  }
                >
                  <Menubar.ItemIndicator className="MenubarItemIndicator">
                    <CheckIcon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.CheckboxItem>
              ))}
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem inset">
                로드 <div className="RightSlot">⌘ R</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem inset" disabled>
                강제로드 <div className="RightSlot">⇧ ⌘ R</div>
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem inset">
                폴스크린
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem inset">
                사이드바 숨기기
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">프로필</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="MenubarContent"
              align="start"
              sideOffset={5}
              alignOffset={-14}
            >
              <Menubar.RadioGroup
                value={radioSelection}
                onValueChange={setRadioSelection}
              >
                {RADIO_ITEMS.map((item) => (
                  <Menubar.RadioItem
                    className="MenubarRadioItem inset"
                    key={item}
                    value={item}
                  >
                    <Menubar.ItemIndicator className="MenubarItemIndicator">
                      <DotFilledIcon />
                    </Menubar.ItemIndicator>
                    {item}
                  </Menubar.RadioItem>
                ))}
                <Menubar.Separator className="MenubarSeparator" />
                <Menubar.Item className="MenubarItem inset">
                  수정하기
                </Menubar.Item>
                <Menubar.Separator className="MenubarSeparator" />
                <Menubar.Item className="MenubarItem inset">
                  프로필 추가
                </Menubar.Item>
              </Menubar.RadioGroup>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </div>
  );
};

export default MenubarDemo;
