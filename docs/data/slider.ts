// 1.1.2
const sliderAPI: Object = {
  component: "slider",
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
          type: "number[]",
          description:
            "처음 렌더링할 때 슬라이더의 값입니다. 슬라이더의 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "value",
          required: false,
          type: "number[]",
          description:
            "슬라이더의 제어된 값입니다. onValueChange와 함께 사용해야 합니다.",
        },
        {
          name: "onValueChange",
          required: false,
          type: "onValueChange?(value: number[]): void",
          typeSimple: "function",
          description: "값이 변경될 때 이벤트 처리기가 호출됩니다.",
        },
        {
          name: "onValueCommit",
          required: false,
          type: "onValueCommit?(value: number[]): void",
          typeSimple: "function",
          description:
            "이벤트 핸들러는 상호 작용이 끝날 때 값이 변경될 때 호출됩니다. 예를 들면, 백엔드 서비스를 업데이트하기 위해 최종 값만 캡처해야 할 때 유용합니다.",
        },
        {
          name: "name",
          required: false,
          type: "string",
          description:
            "슬라이더의 이름. 이름/값 쌍의 일부로 소유 양식과 함께 제출됩니다.",
        },
        {
          name: "disabled",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "true일 경우 사용자가 슬라이더와 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "Slider의 방향",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "슬라이더의 판독 방향. 생략된 경우 DirectionProvider에서 전역적으로 상속되거나 LTR(좌-우) 판독 모드로 가정합니다.",
        },
        {
          name: "inverted",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description: "슬라이더가 시각적으로 반전되었는지 여부",
        },
        {
          name: "min",
          required: false,
          type: "number",
          defaultValue: "0",
          description: "범위의 최소값입니다.",
        },
        {
          name: "max",
          required: false,
          type: "number",
          defaultValue: "100",
          description: "범위의 최대값입니다.",
        },
        {
          name: "step",
          required: false,
          type: "number",
          defaultValue: "1",
          description: "한 스텝 간 간격입니다.",
        },
        {
          name: "minStepsBetweenThumbs",
          required: false,
          type: "number",
          defaultValue: "0",
          description: "여러 thumb 사이에 허용되는 최소 단계입니다.",
        },
      ],
      dataAttribute: [
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
      tag: "track",
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
      tag: "range",
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
          attribute: "[data-disabled]",
          values: "비활성화된 경우 표시됩니다.",
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
          keys: ["ArrowRight"],
          description: "방향에 따라 step value별로 증가/감소합니다.",
        },
        {
          keys: ["ArrowLeft"],
          description: "방향에 따라 step value별로 증가/감소합니다.",
        },
        {
          keys: ["ArrowUp"],
          description: "step value 만큼 값을 증가시킵니다.",
        },
        {
          keys: ["ArrowDown"],
          description: "step value 만큼 값을 감소시킵니다.",
        },
        {
          keys: ["PageUp"],
          description: "값을 큰 단계만큼 증가시킵니다.",
        },
        {
          keys: ["PageDown"],
          description: "값을 큰 단계만큼 감소시킵니다.",
        },
        {
          keys: ["Shift + ArrowUp"],
          description: "값을 큰 단계만큼 증가시킵니다.",
        },
        {
          keys: ["Shift + ArrowDown"],
          description: "값을 큰 단계만큼 감소시킵니다.",
        },
        {
          keys: ["Home"],
          description: "값을 최소값으로 설정합니다.",
        },
        {
          keys: ["End"],
          description: "값을 최대값으로 설정합니다.",
        },
      ],
    },
  ],
};

export default sliderAPI;
