// 1.0.4

const toolbarAPI: Object = {
  component: "toolbar",
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
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical" | undefined',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "Toolbar의 방향",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "도구 모음의 읽기 방향. 생략된 경우 DirectionProvider에서 전역적으로 상속되거나 LTR(좌-우) 읽기 모드로 가정합니다.",
        },
        {
          name: "loop",
          required: false,
          type: "boolean",
          defaultValue: "true",
          description:
            "true일 경우 키보드 탐색이 마지막 탭에서 첫 번째 탭으로, 그 반대로 루프됩니다.",
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
      tag: "button",
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
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
    },
    {
      tag: "link",
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
      tag: "togglegroup",
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
            "한 번에 단일 또는 여러 항목을 누를 수 있는지 여부를 결정합니다.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            '타입이 "single"일 때 눌린 항목의 제어된 값입니다. onValueChange와 함께 사용해야 합니다.',
        },
        {
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            '처음 렌더링하고 입력할 때 눌러진 대로 표시할 항목의 값은 "single"입니다. 항목의 상태를 제어할 필요가 없을 때 사용합니다.',
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description:
            '항목의 눌림 상태가 변경되고 유형이 "single"일 때 이벤트 핸들러가 호출됩니다.',
        },
        {
          name: "value",
          required: false,
          defaultValue: "[]",
          type: "string[]",
          description:
            'xkdlq이 "multiple"일 때 눌린 항목의 제어된 값입니다. onValueChange와 함께 사용해야 합니다.',
        },
        {
          name: "defaultValue",
          required: false,
          defaultValue: "[]",
          type: "string[]",
          description:
            '초기 렌더링 및 입력 시 눌려진 상태로 표시되는 항목의 값은 "multiple"입니다. 항목의 상태를 제어할 필요가 없을 때 사용합니다.',
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string[]) => void",
          typeSimple: "function",
          description:
            '항목의 눌림 상태가 변경되고 유형이 "multiple"일 때 이벤트 핸들러가 호출됩니다.',
        },
        {
          name: "disabled",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "true일 경우 사용자가 토글 그룹 및 해당 항목과 상호 작용하지 못하도록 합니다.",
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
      tag: "toggleitem",
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
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["on", "off"],
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
      dataAttribute: [
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
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
          description: "포커스를 그룹의 첫번째 항목으로 이동합니다.",
        },
        {
          keys: ["Space"],
          description: "항목을 활성화/비활성화합니다.",
        },
        {
          keys: ["Enter"],
          description: "항목을 활성화/비활성화합니다.",
        },
        {
          keys: ["ArrowDown"],
          description: "방향에 따라 포커스를 다음 항목으로 이동합니다",
        },
        {
          keys: ["ArrowRight"],
          description: "방향에 따라 포커스를 다음 항목으로 이동합니다",
        },
        {
          keys: ["ArrowUp"],
          description: "방향에 따라 포커스를 이전 항목으로 이동합니다.",
        },
        {
          keys: ["ArrowLeft"],
          description: "방향에 따라 포커스를 이전 항목으로 이동합니다.",
        },
        {
          keys: ["Home"],
          description: "첫 번째 항목으로 포커스를 이동합니다.",
        },
        {
          keys: ["End"],
          description: "포커스를 마지막 항목으로 이동합니다.",
        },
      ],
    },
  ],
};

export default toolbarAPI;
