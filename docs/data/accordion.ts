// 1.1.2
const accordionAPI: Object = {
  component: "accordion",
  props: [
    {
      tag: "root",
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
          name: "type",
          required: true,
          type: '"single" | "multiple"',
          typeSimple: "enum",
          description:
            "하나 또는 여러 항목을 동시에 열 수 있는지 여부를 결정합니다.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            '타입이 "single"일 경우 확장할 항목의 제어된 값입니다. onValueChange와 함께 사용해야 합니다.',
        },
        {
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            '처음 렌더링될 때의 확장할 항목의 값과 타입이 "single"입니다.',
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description:
            '항목의 확장 상태가 변경되고 타입이 "single"인 경우 이벤트 핸들러가 호출됩니다.',
        },
        {
          name: "value",
          required: false,
          defaultValue: "[]",
          type: "string[]",
          description:
            '타입이 "multiple"일 경우 확장할 항목의 제어된 값입니다. onValueChange와 함께 사용해야 합니다.',
        },
        {
          name: "defaultValue",
          required: false,
          defaultValue: "[]",
          type: "string[]",
          description:
            '타입이 "multiple"일 때 처음 렌더링될 때 확장할 항목의 값입니다. 항목의 상태를 제어할 필요가 없을 때 사용합니다.',
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string[]) => void",
          typeSimple: "function",
          description:
            '항목의 확장 상태가 변경되고 타입이 "multiple"인 경우 이벤트 핸들러가 호출됩니다.',
        },
        {
          name: "collapsible",
          required: false,
          defaultValue: "false",
          type: "boolean",
          description:
            '타입이 "single"인 경우 열려 있는 항목에 대한 트리거를 클릭할 때 내용을 닫을 수 있습니다.',
        },
        {
          name: "disabled",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "true인 경우, 사용자가 아코디언 및 해당 항목과 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          defaultValue: '"ltr"',
          description:
            "해당되는 경우 아코디언의 판독 방향입니다. 생략된 경우에는 LTR(좌-우) 읽기 모드로 가정합니다.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: '"vertical"',
          description: "아코디언의 방향을 나타냅니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
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
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "true일 경우 사용자가 항목과 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "value",
          required: true,
          type: "string",
          description: "항목의 고유 값입니다.",
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
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
    },
    {
      tag: "header",
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
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
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
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
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
            "더 많은 제어가 필요할 때 강제로 마운팅시키는 데 사용됩니다. 리액트 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다.",
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
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
      cssVariable: [
        {
          cssVariable: "--radix-accordion-content-width",
          description: "내용이 열리거나 닫힐 때의 너비",
        },
        {
          cssVariable: "--radix-accordion-content-height",
          description: "내용이 열리거나 닫힐 때의 높이",
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
            "축소된 섹션의 Acordion.Trigger에 포커스가 맞추어져 있으면 섹션을 확장합니다.",
        },
        {
          keys: ["Enter"],
          description:
            "축소된 섹션의 Acordion.Trigger에 포커스가 맞추어져 있으면 섹션을 확장합니다.",
        },
        {
          keys: ["Tab"],
          description: "포커스를 다음 포커스 가능 요소로 이동합니다.",
        },
        {
          keys: ["Shift + Tab"],
          description: "포커스를 이전 포커스 가능 요소로 이동합니다.",
        },
        {
          keys: ["ArrowDown"],
          description:
            "방향이 수직일 때 포커스를 다음 Accordion.Trigger로 이동합니다.",
        },
        {
          keys: ["ArrowUp"],
          description:
            "방향이 수직일 때 포커스를 이전 Accordion.Trigger로 이동합니다.",
        },
        {
          keys: ["ArrowRight"],
          description:
            "방향이 수평일 때 포커스를 다음 Accordion.Trigger로 이동합니다.",
        },
        {
          keys: ["ArrowLeft"],
          description:
            "방향이 수평일 때 포커스를 이전 Accordion.Trigger로 이동합니다.",
        },
        {
          keys: ["Home"],
          description:
            "포커스가 아코디언에 있으면, 포커스를 첫 번째 Accordion.Trigger로 이동합니다.",
        },
        {
          keys: ["End"],
          description:
            "포커스가 아코디언에 있으면, 포커스를 마지막 Accordion.Trigger로 이동합니다.",
        },
      ],
    },
  ],
};

export default accordionAPI;
