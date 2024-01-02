// 1.0.3
const avatarAPI: Object = {
  component: "avatar",
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
      ],
    },
    {
      tag: "image",
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
          name: "onLoadingStatusChange",
          type: '(status: "idle" | "loading" | "loaded" | "error") => void',
          typeSimple: "function",
          description:
            "이미지의 로드 상태에 대한 정보를 제공하는 콜백입니다. 이미지가 로드될 때 렌더링할 내용을 보다 정확하게 제어하려는 경우에 유용합니다.",
        },
      ],
    },
    {
      tag: "fallback",
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
          name: "delayMs",
          type: "number",
          description:
            "연결 속도가 느린 사람에게만 표시되도록 렌더링을 지연하는 데 유용합니다.",
        },
      ],
    },
  ],
};

export default avatarAPI;
