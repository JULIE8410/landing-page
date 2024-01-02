// 1.0.3

const separatorAPI: Object = {
  component: "separator",
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
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "Separator의 방향",
        },
        {
          name: "decorative",
          type: "boolean",
          description:
            "true일 경우 순수하게 시각적이고 의미론적 의미를 갖지 않으며 접근성 트리에 존재하지 않음을 의미합니다.",
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
};

export default separatorAPI;
