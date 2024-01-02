// 1.0.3
const progressAPI: Object = {
  component: "progress",
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
          name: "value",
          type: "number | null",
          description: "Progress의 값",
        },
        {
          name: "max",
          type: "number",
          description: "Progress의 최대값",
        },
        {
          name: "getValueLabel",
          type: "(value: number, max: number) => string",
          typeSimple: "function",
          description:
            "현재 값을 나타내는 접근 가능한 레이블 텍스트를 사람이 읽을 수 있는 형식으로 가져오는 함수입니다. 제공되지 않은 경우 값 레이블은 최대값의 백분율로 숫자 값으로 읽힙니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["complete", "indeterminate", "loading"],
        },
        {
          attribute: "[data-value]",
          values: "현재값",
        },
        {
          attribute: "[data-max]",
          values: "최대값",
        },
      ],
    },
    {
      tag: "indicator",
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
          values: ["complete", "indeterminate", "loading"],
        },
        {
          attribute: "[data-value]",
          values: "현재값",
        },
        {
          attribute: "[data-max]",
          values: "최대값",
        },
      ],
    },
  ],
};

export default progressAPI;
