// 1.0.3

const toggletAPI: Object = {
  component: "toggle",
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
          name: "defaultPressed",
          type: "boolean",
          description:
            "토글이 처음 렌더링될 때 토글이 눌린 상태입니다. 눌린 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "pressed",
          type: "boolean",
          description:
            "제어된 토글의 눌림 상태. onPressedChange와 함께 사용해야 합니다.",
        },
        {
          name: "onPressedChange",
          type: "(pressed: boolean) => void",
          typeSimple: "function",
          description:
            "토글의 눌림 상태가 변경되면 이벤트 핸들러가 호출됩니다.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 토글과 상호 작용하지 못하도록 합니다.",
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
      ],
    },
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["Space"],
          description: "토글을 활성화/비활성화합니다.",
        },
        {
          keys: ["Enter"],
          description: "토글을 활성화/비활성화합니다.",
        },
      ],
    },
  ],
};

export default toggletAPI;
