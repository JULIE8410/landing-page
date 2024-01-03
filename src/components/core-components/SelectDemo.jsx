import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "../../css/global.css";
import "../../css/select.css";

const SelectDemo = () => (
  <div className="ComponentBox">
    <Select.Root>
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="원하는 품목을 선택하세요.." />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Label className="SelectLabel">과일</Select.Label>
              <SelectItem value="apple">사과</SelectItem>
              <SelectItem value="banana">바나나</SelectItem>
              <SelectItem value="blueberry">블루베리</SelectItem>
              <SelectItem value="grapes">포도</SelectItem>
              <SelectItem value="pineapple">파인애플</SelectItem>
            </Select.Group>

            <Select.Separator className="SelectSeparator" />

            <Select.Group>
              <Select.Label className="SelectLabel">채소</Select.Label>
              <SelectItem value="aubergine">가지</SelectItem>
              <SelectItem value="broccoli">브로콜리</SelectItem>
              <SelectItem value="carrot" disabled>
                당근
              </SelectItem>
              <SelectItem value="courgette">애호박</SelectItem>
              <SelectItem value="leek">파</SelectItem>
            </Select.Group>

            <Select.Separator className="SelectSeparator" />

            <Select.Group>
              <Select.Label className="SelectLabel">육류</Select.Label>
              <SelectItem value="beef">소고기</SelectItem>
              <SelectItem value="chicken">치킨</SelectItem>
              <SelectItem value="lamb">양</SelectItem>
              <SelectItem value="pork">돼지</SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
);

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames("SelectItem", className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectDemo;
