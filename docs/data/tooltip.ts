// 1.0.6
const tooltipAPI: Object = {
  component: "tooltip",
  props: [
    {
      tag: "provider",
      props: [
        {
          name: "delayDuration",
          type: "number",
          defaultValue: 700,
          description:
            "마우스가 도구 설명 트리거를 입력할 때부터 도구 설명이 열릴 때까지의 기간입니다.",
        },
        {
          name: "skipDelayDuration",
          type: "number",
          defaultValue: 300,
          description:
            "사용자가 다시 지연을 일으키지 않고 다른 트리거를 입력해야 하는 시간입니다.",
        },
        {
          name: "disableHoverableContent",
          type: "boolean",
          description:
            '호버링 시 "Tooltip.Content"가 열려 있는 상태로 유지되지 않도록 합니다. 이 기능을 사용하지 않도록 설정하면 액세스 가능성에 영향을 미칩니다.',
        },
      ],
    },
    {
      tag: "root",
      props: [
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "처음 렌더링할 때 도구 설명의 열린 상태입니다. 열린 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "제어된 Tooltip의 열린 상태입니다. onOpenChange와 함께 사용해야 합니다.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "도구 설명의 열린 상태가 변경될 때 이벤트 핸들러가 호출됩니다.",
        },
        {
          name: "delayDuration",
          type: "number",
          defaultValue: 700,
          description: "",
        },
        {
          name: "disableHoverableContent",
          type: "boolean",
          defaultValue: false,
          description:
            "Provider에 주어진 기간을 무시하고 특정 툴팁에 대한 열린 지연을 사용자 정의합니다.",
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
          values: ["closed", "delayed-open", "instant-open"],
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
            "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by Tooltip.Content.",
        },
        {
          name: "container",
          type: "HTMLElement",
          defaultValue: "document.body",
          description:
            "Specify a container element to portal the content into.",
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
          name: "aria-label",
          type: "string",
          description:
            "기본적으로 화면 판독기는 구성 요소 내부에 내용을 공지합니다. 이것이 충분히 설명적이지 않거나 공지할 수 없는 내용이 있을 경우 aria-label을 더 설명적인 레이블로 사용하십시오.",
        },
        {
          name: "onEscapeKeyDown",
          type: "(event: KeyboardEvent) => void",
          typeSimple: "function",
          description:
            "escape key가 눌러졌을 때 이벤트 핸들러가 호출되었습니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onPointerDownOutside",
          type: "(event: PointerDownOutsideEvent) => void",
          typeSimple: "function",
          description:
            "포인터 이벤트가 컴포넌트의 경계 밖에서 발생하면 이벤트 처리기가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "forceMount",
          type: "boolean",
          description:
            "제어가 더 필요할 때 강제로 마운트시키는 데 사용됩니다. React 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다. Tooltip.Portal에서 상속됩니다.",
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          typeSimple: "enum",
          defaultValue: '"top"',
          description:
            "열려 있을 때 렌더링할 트리거의 기본적인 측면입니다. 충돌이 발생하고 충돌 방지가 활성화되면 반전됩니다.",
        },
        {
          name: "sideOffset",
          type: "number",
          defaultValue: "0",
          description: "트리거에서 픽셀 단위로 표시된 거리입니다.",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          typeSimple: "enum",
          defaultValue: '"center"',
          description:
            "트리거에 대한 선호 정렬. 충돌이 발생하면 변경될 수 있습니다.",
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
            "충돌 감지가 발생해야 하는 경계 가장자리로부터의 픽셀 간격입니다. 숫자(모든 변에 대해 동일함) 또는 부분 패딩 개체를 받아들입니다. (예:{top: 20, left: 20}),",
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
          values: ["closed", "delayed-open", "instant-open"],
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
          cssVariable: "--radix-tooltip-content-transform-origin",
          description:
            "콘텐츠 및 화살표 위치/오프셋에서 계산된 변환 원점입니다.",
        },
        {
          cssVariable: "--radix-tooltip-content-available-width",
          description: "트리거와 경계 모서리 사이의 나머지 너비입니다.",
        },
        {
          cssVariable: "--radix-tooltip-content-available-height",
          description: "트리거와 경계 모서리 사이의 나머지 높이입니다.",
        },
        {
          cssVariable: "--radix-tooltip-trigger-width",
          description: "트리거의 너비입니다.",
        },
        {
          cssVariable: "--radix-tooltip-trigger-height",
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
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["Tab"],
          description: "Tooltip을 지체없이 여닫습니다.",
        },
        {
          keys: ["Space"],
          description: "Tooltip이 열려있으면 지체없이 닫습니다.",
        },
        {
          keys: ["Enter"],
          description: "Tooltip이 열려있으면 지체없이 닫습니다.",
        },
        {
          keys: ["Escape"],
          description: "Tooltip이 열려있으면 지체없이 닫습니다.",
        },
      ],
    },
  ],
};

export default tooltipAPI;
