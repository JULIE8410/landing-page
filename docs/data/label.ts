// 2.0.2
const labelAPI: Object = {
  component: "label",
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
          name: "htmlFor",
          type: "string",
          description: "레이블이 연결된 요소의 ID입니다.",
        },
      ],
    },
  ],
};

export default labelAPI;
