// 1.0.4
const scrollAreaAPI: Object = {
  component: "scroll-area",
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
          type: '"auto" | "always" | "scroll" | "hover"',
          typeSimple: "enum",
          defaultValue: '"hover"',
          description:
            'MacOS의 스크롤바 기본 설정이 기본 스크롤바의 가시성을 제어하는 것과 유사한 스크롤바 가시성의 특성을 설명합니다. "auto"는 해당 방향에 콘텐츠가 넘쳐날 때 스크롤 막대가 보이는 것을 의미합니다. "always"는 내용이 넘치는지 여부에 관계없이 스크롤 막대가 항상 표시됨을 의미합니다. "scroll"은 사용자가 해당 방향을 따라 스크롤할 때 스크롤 막대가 보이는 것을 의미합니다. "hover"는 사용자가 해당 방향을 따라 스크롤할 때와 스크롤 영역 위를 맴도는 경우를 의미합니다.',
        },
        {
          name: "scrollHideDelay",
          type: "number",
          defaultValue: "600",
          description:
            '유형이 "scroll" 또는 "hover"로 설정된 경우, 이 prop은 사용자가 스크롤바와의 상호 작용을 중지한 후 스크롤바가 숨겨지기 전까지의 시간(밀리초 단위)을 결정합니다.',
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "스크롤 영역의 판독 방향. 생략된 경우 DirectionProvider에서 전역적으로 상속되거나 LTR(좌-우) 판독 모드로 가정합니다.",
        },
      ],
    },
    {
      tag: "viewport",
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
      tag: "scrollbar",
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
            "더 많은 제어가 필요할 때 강제로 마운트시키는 데 사용됩니다. 리액트 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: "vertical",
          description: "스크롤 바의 방향",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["visible", "hidden"],
        },
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
    },
    {
      tag: "thumb",
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
          values: ["visible", "hidden"],
        },
      ],
    },
    {
      tag: "corner",
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
  ],
};

export default scrollAreaAPI;
