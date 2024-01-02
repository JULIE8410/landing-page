// 2.1.4
const contextMenuAPI: Object = {
  component: "contextMenu",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "해당되는 경우 하위 메뉴의 읽기 방향. 생략된 경우 DirectionProvider에서 전역적으로 상속되거나 LTR(좌-우) 읽기 모드로 가정합니다.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "Context menu의 열린 상태가 변경될 때 이벤트 처리기가 호출됩니다.",
        },
        {
          name: "modal",
          required: false,
          type: "boolean",
          defaultValue: "true",
          description:
            "Context menu의  모달리티(modality)입니다. true로 설정하면 외부 요소와의 상호 작용이 비활성화되고 화면 판독기에 메뉴 내용만 표시됩니다.",
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
        {
          name: "disabled",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "true이면 마우스 오른쪽 버튼을 클릭할 때 context menu가 열리지 않습니다. 이렇게 하면 기본 context menu도 복원됩니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
        },
      ],
    },
    {
      tag: "portal",
      props: [
        {
          name: "forceMount",
          type: "boolean",
          description:
            "더 많은 제어가 필요할 때 강제로 마운팅시키는 데 사용됩니다. React 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다. 이 부분에서 사용할 경우 ContextMenu.Content 및 ContextMenu.SubContent에서 각각 상속됩니다.",
        },
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
        },
        {
          name: "loop",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "true이면 키보드 탐색이 마지막 항목에서 첫 번째 항목으로, 그 반대로 루프됩니다.",
        },
        {
          name: "onCloseAutoFocus",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "닫힘 후 포커스가 뒤로 이동하면 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onEscapeKeyDown",
          type: "(event: KeyboardEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.",
        },
        {
          name: "onPointerDownOutside",
          type: "(event: PointerDownOutsideEvent) => void",
          typeSimple: "function",
          description:
            "escape key가 눌려졌을 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onFocusOutside",
          type: "(event: FocusOutsideEvent) => void",
          typeSimple: "function",
          description:
            "포커스가 컴포넌트의 경계 밖으로 이동할 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onInteractOutside",
          type: "(event: PointerDownOutsideEvent | FocusOutsideEvent) => void",
          typeSimple: "function",
          description:
            "상호 작용(포인트 또는 포커스 이벤트)이 컴포넌트의 경계 밖에서 발생할 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "forceMount",
          type: "boolean",
          description:
            "제어가 더 필요할 때 강제로 마운팅시키는 데 사용됩니다. React 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다. ContextMenu.Portal에서 상속됩니다.",
        },
        {
          name: "alignOffset",
          type: "number",
          defaultValue: "0",
          description: "Anchor로부터의 수직 거리(픽셀)입니다.",
        },
        {
          name: "avoidCollisions",
          type: "boolean",
          defaultValue: "true",
          description:
            "true일 경우, 경계 모서리와의 충돌을 방지하기 위해 측면을 재정의하고 설정을 정렬합니다.",
        },
        {
          name: "collisionBoundary",
          type: "Element | null | Array<Element | null>",
          typeSimple: "Boundary",
          defaultValue: "[]",
          description:
            "충돌 경계로 사용되는 요소입니다. 기본적으로 viewport이지만 이 체크에 포함될 추가 요소를 제공할 수 있습니다.",
        },
        {
          name: "collisionPadding",
          type: "number | Partial<Record<Side, number>>",
          typeSimple: "number | Padding",
          defaultValue: "0",
          description:
            "충돌 감지가 발생해야 하는 경계 가장자리로부터의 픽셀 간격입니다. 숫자(모든 변에 대해 동일함) 또는 부분 패딩 개체를 받아들입니다. (예:{top: 20, left: 20})",
        },
        {
          name: "sticky",
          type: '"partial" | "always"',
          typeSimple: "enum",
          defaultValue: '"partial"',
          description:
            '정렬 축의 들러붙는 동작. "partial"은 트리거가 적어도 부분적으로 경계에 있는 한 내용을 경계에 유지하고, "always"는 관계없이 내용을 경계에 유지합니다.',
        },
        {
          name: "hideWhenDetached",
          type: "boolean",
          defaultValue: "false",
          description:
            "트리거가 완전히 차단되었을 때 내용을 숨길지 여부입니다.",
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
          cssVariable: "--radix-context-menu-content-transform-origin",
          description: "내용 및 화살표 위치/오프셋에서 계산된 변환 원점입니다.",
        },
        {
          cssVariable: "--radix-context-menu-content-available-width",
          description: "트리거와 경계 모서리 사이의 나머지 너비입니다.",
        },
        {
          cssVariable: "--radix-context-menu-content-available-height",
          description: "트리거와 경계 모서리 사이의 나머지 높이입니다.",
        },
        {
          cssVariable: "--radix-context-menu-trigger-width",
          description: "트리거의 너비입니다.",
        },
        {
          cssVariable: "--radix-context-menu-trigger-height",
          description: "트리거의 높이입니다.",
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
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 항목과 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "onSelect",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "사용자가 (마우스 또는 키보드를 통해) 항목을 선택할 때 이벤트 처리기가 호출됩니다. 이 핸들러에서 event.preventDefault를 호출하면 해당 항목을 선택할 때 context menu가 닫히지 않습니다.",
        },
        {
          name: "textValue",
          type: "string",
          description:
            "선택적인 텍스트는 typeahead 목적으로 사용됩니다. 기본적으로 typeahead 동작은 항목의 .textContent를 사용합니다. 내용이 복잡하거나 내부에 텍스트가 아닌 내용이 있을 때 사용합니다.",
        },
      ],
      dataAttribute: [
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
      tag: "group",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "자식으로 전달된 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. 자세한 내용은 Composition 가이드를 참조하십시오.",
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
      tag: "checkboxitem",
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
          name: "checked",
          type: `boolean | 'indeterminate'`,
          description:
            "아이템의 제어된 체크된 상태입니다. onCheckedChange와 함께 사용해야 합니다.",
        },
        {
          name: "onCheckedChange",
          type: `(checked: boolean) => void`,
          typeSimple: "function",
          description: "체크 상태가 변경될 때 이벤트 처리기가 호출됩니다.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 항목과 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "onSelect",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "사용자가 (마우스 또는 키보드를 통해) 항목을 선택할 때 이벤트 핸들러가 호출됩니다. 이 처리기에서 event.preventDefault를 호출하면 해당 항목을 선택할 때 컨텍스트 메뉴가 닫히지 않습니다.",
        },
        {
          name: "textValue",
          type: "string",
          description:
            "사용자가 (마우스 또는 키보드를 통해) 항목을 선택할 때 이벤트 핸들러가 호출됩니다. 이 핸들러에서 event.preventDefault를 호출하면 해당 항목을 선택할 때 context menu가 닫히지 않습니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked", "indeterminate"],
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
      tag: "radiogroup",
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
          type: "string",
          description: "그룹에서 선택한 항목의 값입니다.",
        },
        {
          name: "onValueChange",
          type: "(value: string) => void",
          typeSimple: "function",
          description: "값이 변경될 때 이벤트 처리기가 호출됩니다.",
        },
      ],
    },
    {
      tag: "radioitem",
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
          type: "string",
          required: true,
          description: "항목의 고유 값입니다.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 항목과 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "onSelect",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "사용자가 (마우스 또는 키보드를 통해) 항목을 선택할 때 이벤트 핸들러가 호출됩니다. 이 처리기에서 event.preventDefault를 호출하면 해당 항목을 선택할 때 컨텍스트 메뉴가 닫히지 않습니다.",
        },
        {
          name: "textValue",
          type: "string",
          description:
            "사용자가 (마우스 또는 키보드를 통해) 항목을 선택할 때 이벤트 처리기가 호출됩니다. 이 핸들러에서 event.preventDefault를 호출하면 해당 항목을 선택할 때 context menu가 닫히지 않습니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked", "indeterminate"],
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
        {
          name: "forceMount",
          type: "boolean",
          description:
            "더 많은 제어가 필요할 때 강제로 마운팅시키는 데 사용됩니다. 리액트 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked", "indeterminate"],
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
      tag: "sub",
      props: [
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "처음 렌더링될 때 하위 메뉴의 열린 상태로, 열린 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "하위 메뉴의 제어된 열린 상태입니다. onOpenChange와 함께 사용해야 합니다.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "하위 메뉴의 열린 상태가 변경될 때 이벤트 처리기가 호출됩니다.",
        },
      ],
    },
    {
      tag: "subtrigger",
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
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 항목과 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "textValue",
          type: "string",
          description:
            "선택적인 텍스트는 typeahead 목적으로 사용됩니다. 기본적으로 typeahead 동작은 항목의 .textContent를 사용합니다. 내용이 복잡하거나 내부에 텍스트가 아닌 내용이 있을 때 사용합니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
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
      tag: "subcontent",
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
          name: "loop",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "true일 경우 키보드 탐색이 마지막 항목에서 첫 번째 항목으로, 그 반대로 루프됩니다.",
        },
        {
          name: "onEscapeKeyDown",
          type: "(event: KeyboardEvent) => void",
          typeSimple: "function",
          description:
            "escape key가 눌려졌을 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault 호출을 통해 방지할 수 있습니다.",
        },
        {
          name: "onPointerDownOutside",
          type: "(event: PointerDownOutsideEvent) => void",
          typeSimple: "function",
          description:
            "포인터 이벤트가 컴포넌트의 경계 밖에서 발생하면 이벤트 처리기가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onFocusOutside",
          type: "(event: FocusOutsideEvent) => void",
          typeSimple: "function",
          description:
            "포커스가 컴포넌트의 경계 밖으로 이동할 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onInteractOutside",
          type: "(event: PointerDownOutsideEvent | FocusOutsideEvent) => void",
          typeSimple: "function",
          description:
            "상호 작용(포인트 또는 포커스 이벤트)이 컴포넌트의 경계 밖에서 발생할 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "forceMount",
          type: "boolean",
          description:
            "제어가 더 필요할 때 강제로 마운팅시키는 데 사용됩니다. React 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다. ContextMenu.Portal에서 상속됩니다.",
        },
        {
          name: "sideOffset",
          type: "number",
          defaultValue: "0",
          description: "트리거에서 픽셀 단위로 표시된 거리입니다.",
        },
        {
          name: "alignOffset",
          type: "number",
          defaultValue: "0",
          description: '"start" 또는 "end" 정렬 옵션의 픽셀 단위 오프셋입니다.',
        },
        {
          name: "avoidCollisions",
          type: "boolean",
          defaultValue: "true",
          description:
            "true일 경우, 경계 모서리와의 충돌을 방지하기 위해 측면을 재정의하고 설정을 정렬합니다.",
        },
        {
          name: "collisionBoundary",
          type: "Element | null | Array<Element | null>",
          typeSimple: "Boundary",
          defaultValue: "[]",
          description:
            "충돌 경계로 사용되는 요소입니다. 기본적으로 viewport이지만 이 체크에 포함될 추가 요소를 제공할 수 있습니다.",
        },
        {
          name: "collisionPadding",
          type: "number | Partial<Record<Side, number>>",
          typeSimple: "number | Padding",
          defaultValue: "0",
          description:
            "충돌 감지가 발생해야 하는 경계 가장자리로부터의 픽셀 간격입니다. 숫자(모든 변에 대해 동일함) 또는 부분 패딩 개체를 받아들입니다. (예:{top: 20, left: 20})",
        },
        {
          name: "arrowPadding",
          type: "number",
          defaultValue: "0",
          description:
            "콘텐츠의 화살표와 가장자리 사이에 있는 패딩입니다. 콘텐츠에 테두리-반지름이 있는 경우에는 모서리가 넘치지 않도록 방지합니다.",
        },
        {
          name: "sticky",
          type: '"partial" | "always"',
          typeSimple: "enum",
          defaultValue: '"partial"',
          description:
            '정렬 축의 들러붙는 동작. "partial"은 트리거가 적어도 부분적으로 경계에 있는 한 내용을 경계에 유지하고, "always"는 관계없이 내용을 경계에 유지합니다.',
        },
        {
          name: "hideWhenDetached",
          type: "boolean",
          defaultValue: "false",
          description: "트리거가 완전히 차단될 때 내용을 숨길지 여부입니다.",
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
          cssVariable: "--radix-context-menu-content-transform-origin",
          description: "내용 및 화살표 위치/오프셋에서 계산된 변환 원점입니다.",
        },
        {
          cssVariable: "--radix-context-menu-content-available-width",
          description: "트리거와 경계 모서리 사이의 나머지 너비입니다.",
        },
        {
          cssVariable: "--radix-context-menu-content-available-height",
          description: "트리거와 경계 모서리 사이의 나머지 높이입니다.",
        },
        {
          cssVariable: "--radix-context-menu-trigger-width",
          description: "트리거의 너비입니다.",
        },
        {
          cssVariable: "--radix-context-menu-trigger-height",
          description: "트리거의 높이입니다.",
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
          description: "포커스된 항목을 활성화합니다.",
        },
        {
          keys: ["Enter"],
          description: "포커스된 항목을 활성화합니다.",
        },
        {
          keys: ["ArrowDown"],
          description: "포커스를 다음 항목으로 이동합니다.",
        },
        {
          keys: ["ArrowUp"],
          description: "포커스를 이전 항목으로 이동합니다.",
        },
        {
          keys: ["ArrowRight", "ArrowLeft"],
          description:
            "포커스가 ContextMenu.SubTrigger에 있을 경우 판독 방향에 따라 하위 메뉴를 열거나 닫습니다.",
        },
        {
          keys: ["Esc"],
          description: "Context menu를 닫습니다.",
        },
      ],
    },
  ],
};

export default contextMenuAPI;
