// 1.0.6
const hoverCardAPI: Object = {
  component: "hover-card",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "처음 렌더링될 때 호버 카드의 열린 상태입니다. 열린 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "제어된 호버 카드의 열린 상태입니다. onOpenChange와 함께 사용해야 합니다.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "호버 카드의 열린 상태가 변경될 때 이벤트 핸들러가 호출됩니다.",
        },
        {
          name: "openDelay",
          type: "number",
          defaultValue: 700,
          description:
            "마우스가 트리거에 들어갈 때부터 호버 카드가 열릴 때까지의 기간입니다.",
        },
        {
          name: "closeDelay",
          type: "number",
          defaultValue: 300,
          description:
            "마우스가 트리거 또는 내용을 종료한 후 호버 카드가 닫힐 때까지의 기간입니다.",
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
      ],
    },
    {
      tag: "portal",
      props: [
        {
          name: "forceMount",
          type: "boolean",
          description:
            "더 많은 제어가 필요할 때 강제로 마운트시키기 위해 사용됩니다. React 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다. 이 부분에 사용하면 HoverCard.Content에서 상속됩니다.",
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
          guide: "Composition 바로가기",
          url: "../guides/composition",
        },
        {
          name: "forceMount",
          type: "boolean",
          description:
            "제어가 더 필요할 때 강제로 마운트시키는 데 사용됩니다. React 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다. HoverCard.Portal에서 상속됩니다.",
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          typeSimple: "enum",
          defaultValue: '"bottom"',
          description:
            "열려 있을 때 렌더링할 트리거의 기본 설정. 충돌이 발생하고 충돌을 피하면 반전됩니다.",
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
          cssVariable: "--radix-hover-card-content-transform-origin",
          description: "내용 및 화살표 위치/오프셋에서 계산된 변환 원점입니다.",
        },
        {
          cssVariable: "--radix-hover-card-content-available-width",
          description: "트리거와 경계 모서리 사이의 나머지 너비입니다.",
        },
        {
          cssVariable: "--radix-hover-card-content-available-height",
          description: "트리거와 경계 모서리 사이의 나머지 높이입니다.",
        },
        {
          cssVariable: "--radix-hover-card-trigger-width",
          description: "트리거의 너비입니다.",
        },
        {
          cssVariable: "--radix-hover-card-trigger-height",
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
};

export default hoverCardAPI;
