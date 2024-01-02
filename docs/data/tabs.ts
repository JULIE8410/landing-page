// 1.0.4

const tabsAPI: Object = {
  component: "tabs",
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
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            "처음 렌더링할 때 활성화되어야 하는 탭의 값입니다. 탭의 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            "활성화할 탭의 제어된 값입니다. onValueChange와 함께 사용해야 합니다.",
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description: "값이 변경될 때 이벤트 핸들러가 호출됩니다.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical" | undefined',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "Component의 방향",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "탭의 읽기 방향. 생략된 경우 DirectionProvider에서 전역적으로 상속되거나 LTR(좌-우) 읽기 모드로 가정합니다.",
        },
        {
          name: "activationMode",
          required: false,
          type: '"automatic" | "manual"',
          typeSimple: "enum",
          defaultValue: '"automatic"',
          description:
            '"automatic"인 경우 탭은 포커스를 받을 때 활성화됩니다. "manual"인 경우 탭은 클릭할 때 활성화됩니다.',
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
      tag: "list",
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
          name: "value",
          required: true,
          type: "string",
          description: "트리거를 콘텐츠와 연결하는 고유 값입니다.",
        },
        {
          name: "disabled",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "true일 경우 사용자가 탭과 상호 작용하지 못하도록 합니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["active", "inactive"],
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
          name: "value",
          required: true,
          type: "string",
          description: "내용을 트리거와 연결하는 고유 값입니다.",
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
          values: ["active", "inactive"],
        },
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
          description:
            "포커스가 탭으로 이동하면 활성 트리거에 포커스를 맞춥니다. 트리거가 포커스되면 포커스를 활성 컨텐츠로 이동합니다.",
        },
        {
          keys: ["ArrowDown"],
          description:
            " 방향에 따라 포커스를 다음 트리거로 이동하고 관련 내용을 활성화합니다.",
        },
        {
          keys: ["ArrowRight"],
          description:
            " 방향에 따라 포커스를 다음 트리거로 이동하고 관련 내용을 활성화합니다.",
        },
        {
          keys: ["ArrowUp"],
          description:
            "방향에 따라 포커스를 이전 트리거로 이동하고 관련 내용을 활성화합니다.",
        },
        {
          keys: ["ArrowLeft"],
          description:
            "방향에 따라 포커스를 이전 트리거로 이동하고 관련 내용을 활성화합니다.",
        },
        {
          keys: ["Home"],
          description:
            "포커스를 첫 번째 트리거로 이동하고 관련 내용을 활성화합니다.",
        },
        {
          keys: ["End"],
          description:
            "포커스를 마지막 트리거로 이동하고 관련 내용을 활성화합니다.",
        },
      ],
    },
  ],
};

export default tabsAPI;
