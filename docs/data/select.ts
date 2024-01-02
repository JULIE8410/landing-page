// 1.2.2
const selectAPI: Object = {
  component: "select",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            "처음 렌더링할 때 선택 항목의 값입니다. 선택 항목의 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            "선택 항목의 제어된 값입니다. onValueChange와 함께 사용해야 합니다.",
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description: "값이 변경될 때 이벤트 처리기가 호출됩니다.",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "처음 렌더링될 때 선택 항목의 열린 상태. 열린 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "선택 항목의 제어된 열린 상태입니다. onOpenChange와 함께 사용해야 합니다.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "선택 항목의 열린 상태가 변경될 때 이벤트 처리기가 호출됩니다.",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "해당되는 경우 선택한 영역의 읽기 방향입니다. 생략된 경우 DirectionProvider에서 전역적으로 상속되거나 LTR(좌-우) 읽기 모드로 가정합니다.",
        },
        {
          name: "name",
          type: "string",
          description:
            "선택자의 이름. 이름/값 쌍의 일부로 소유 양식과 함께 제출됩니다.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 선택 항목과 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "required",
          type: "boolean",
          description:
            "true일 경우 소유 양식을 제출하기 전에 사용자가 값을 선택해야 함을 나타냅니다.",
        },
      ],
    },
    {
      tag: "trigger",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
        },
        {
          attribute: "[data-disabled]",
          values: "비활성화된 경우 표시됩니다.",
        },
        {
          attribute: "[data-placeholder]",
          values: "Placeholder가 있는 경우 표시됩니다.",
        },
      ],
    },
    {
      tag: "value",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
        {
          name: "placeholder",
          required: false,
          type: "ReactNode",
          description:
            "값이 설정되지 않거나 기본값이 설정되지 않은 경우 Select.Value 내부에서 렌더링될 내용입니다.",
        },
      ],
    },
    {
      tag: "icon",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
      ],
    },
    {
      tag: "portal",
      props: [
        {
          name: "container",
          type: "HTMLElement",
          defaultValue: "document.body",
          description: "내용을 포탈할 컨테이너 요소를 지정합니다.",
        },
      ],
    },
    {
      tag: "content",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
        {
          name: "onCloseAutoFocus",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "닫힘 후 포커스가 트리거로 이동하면 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onEscapeKeyDown",
          type: "(event: KeyboardEvent) => void",
          typeSimple: "function",
          description:
            "escape key가 눌러졌을 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onPointerDownOutside",
          type: "(event: PointerDownOutsideEvent) => void",
          typeSimple: "function",
          description:
            "포인터 이벤트가 컴포넌트의 경계 밖에서 발생하면 이벤트 처리기가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "position",
          type: '"item-aligned" | "popper"',
          typeSimple: "enum",
          defaultValue: '"item-aligned"',
          description:
            "사용할 위치 지정 모드(항목 정렬)는 기본이며 활성 항목에 상대적으로 내용을 위치 지정하여 기본 MacOS 메뉴와 유사하게 작동합니다. popper는 다른 프리미티브(예: Popover 또는 DropoutMenu)와 같은 방식으로 내용을 위치 지정합니다.",
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          typeSimple: "enum",
          defaultValue: '"bottom"',
          description:
            "열려 있을 때 상대로 렌더링할 앵커의 선호하는 면입니다. 충돌이 발생하면 반전되고 충돌을 피합니다. 위치가 popper로 설정된 경우에만 사용할 수 있습니다.",
        },
        {
          name: "sideOffset",
          type: "number",
          defaultValue: "0",
          description:
            "앵커로부터의 거리(픽셀). 위치가 popper로 설정되어 있을 때만 사용할 수 있습니다.",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          typeSimple: "enum",
          defaultValue: '"start"',
          description:
            "앵커에 대한 선호 정렬. 충돌 시 변경될 수 있습니다. 위치가 popper로 설정된 경우에만 사용할 수 있습니다.",
        },
        {
          name: "alignOffset",
          type: "number",
          defaultValue: "0",
          description:
            '"start" 또는 "end" 정렬 옵션의 픽셀 단위 오프셋입니다. 위치가 popper로 설정된 경우에만 사용할 수 있습니다.',
        },
        {
          name: "avoidCollisions",
          type: "boolean",
          defaultValue: "true",
          description:
            "true일 경우, 측면을 재정의하고 경계 가장자리와의 충돌을 방지하기 위해 환경설정을 정렬합니다. 위치가 popper로 설정된 경우에만 사용할 수 있습니다.",
        },
        {
          name: "collisionBoundary",
          type: "Element | null | Array<Element | null>",
          typeSimple: "Boundary",
          defaultValue: "[]",
          description:
            "충돌 경계로 사용되는 요소입니다. 기본적으로 viewport이지만 이 체크에 포함될 추가 요소를 제공할 수 있습니다. 위치가 popper로 설정된 경우에만 사용할 수 있습니다.",
        },
        {
          name: "collisionPadding",
          type: "number | Partial<Record<Side, number>>",
          typeSimple: "number | Padding",
          defaultValue: "10",
          description:
            "충돌 감지가 발생해야 하는 경계 가장자리로부터의 픽셀 간격입니다. 숫자(모든 변에 대해 동일함) 또는 부분 패딩 개체를 받아들입니다. (예:{top: 20, left: 20}),",
        },
        {
          name: "arrowPadding",
          type: "number",
          defaultValue: "0",
          description:
            "콘텐츠의 화살표와 가장자리 사이에 있는 패딩입니다. 콘텐츠에 테두리-반지름이 있는 경우, 모서리가 넘치지 않도록 방지합니다. 위치가 popper로 설정된 경우에만 사용할 수 있습니다.",
        },
        {
          name: "sticky",
          type: '"partial" | "always"',
          typeSimple: "enum",
          defaultValue: '"partial"',
          description:
            '정렬 축의 들러붙는 동작. "partial"은 트리거가 적어도 부분적으로 경계에 있는 한 내용을 경계에 유지하고, "always"는 관계없이 내용을 경계에 유지합니다. 위치가 popper로 설정된 경우에만 사용할 수 있습니다.',
        },
        {
          name: "hideWhenDetached",
          type: "boolean",
          defaultValue: "false",
          description:
            "트리거가 완전히 가려졌을 때 내용을 숨길지 여부. 위치가 popper로 설정된 경우에만 사용 가능합니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
        },
        {
          attribute: "[data-side]",
          values: ["left", "right", "bottom", "top"],
        },
        {
          attribute: "[data-align]",
          values: ["start", "end", "center"],
        },
      ],
      cssVariable: [
        {
          cssVariable: "--radix-select-content-transform-origin",
          description:
            '콘텐츠 및 화살표 위치/offsets에서 계산된 transform-origin입니다. position="popper" 일 때만 표시됩니다.',
        },
        {
          cssVariable: "--radix-select-content-available-width",
          description:
            'Trigger와 boundary edge 사이의 나머지 너비입니다. position="popper" 일 때만 표시됩니다.',
        },
        {
          cssVariable: "--radix-select-content-available-height",
          description:
            'Trigger와 boundary edge 사이의 나머지 높이입니다. position="popper" 일 때만 표시됩니다.',
        },
        {
          cssVariable: "--radix-select-trigger-width",
          description:
            'Trigger의 너비입니다. position="popper" 일 때만 표시됩니다.',
        },
        {
          cssVariable: "--radix-select-trigger-height",
          description:
            'Trigger의 높이입니다. position="popper" 일 때만 표시됩니다.',
        },
      ],
    },
    {
      tag: "viewport",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
      ],
    },
    {
      tag: "item",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
        {
          name: "value",
          required: true,
          type: "string",
          description: "이름과 함께 제출될 때 데이터로 제공되는 값입니다.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 항목과 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "textValue",
          type: "string",
          description:
            "선택적인 텍스트는 미리 입력할 목적으로 사용됩니다. 기본적으로 미리 입력하는 동작은 Select.ItemText 부분의 .textContent를 사용합니다. 내용이 복잡하거나 내부에 텍스트가 아닌 내용이 있을 때 사용합니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked"],
        },
        {
          attribute: "[data-highlighted]",
          values: "강조 표시된 경우 표시됩니다.",
        },
        {
          attribute: "[data-disabled]",
          values: "비활성화된 경우 표시됩니다.",
        },
      ],
    },
    {
      tag: "itemtext",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
      ],
    },
    {
      tag: "itemindicator",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
      ],
    },
    {
      tag: "scrollupbutton",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
      ],
    },
    {
      tag: "scrolldownbutton",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
      ],
    },
    {
      tag: "group",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
      ],
    },
    {
      tag: "label",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
      ],
    },
    {
      tag: "separator",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
      ],
    },
    {
      tag: "arrow",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
        {
          name: "width",
          type: "number",
          defaultValue: 10,
          description: "화살표의 너비(픽셀)입니다.",
        },
        {
          name: "height",
          type: "number",
          defaultValue: 5,
          description: "화살표의 높이(픽셀)입니다.",
        },
      ],
    },
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["Space"],
          description:
            "포커스가 Select.Trigger에 있을 때 선택 항목을 열고 포커스를 맞춥니다. 포커스가 항목에 있으면 포커스가 있는 항목을 선택합니다.",
        },
        {
          keys: ["Enter"],
          description:
            "포커스가 Select.Trigger에 있을 때 선택 항목을 열고 포커스를 맞춥니다. 포커스가 항목에 있으면 포커스가 있는 항목을 선택합니다.",
        },
        {
          keys: ["ArrowDown"],
          description:
            "포커스가  Select.Trigger에 있을 때 선택을 엽니다. 포커스가 항목에 있으면 포커스를 다음 항목으로 이동합니다.",
        },
        {
          keys: ["ArrowUp"],
          description:
            "포커스가  Select.Trigger에 있을 때 선택을 엽니다. 포커스가 항목에 있으면 포커스를 이전 항목으로 이동합니다.",
        },
        {
          keys: ["Esc"],
          description: "선택을 닫고 포커스를  Select.Trigger로 이동합니다.",
        },
      ],
    },
  ],
};

export default selectAPI;
