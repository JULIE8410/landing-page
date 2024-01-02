// 1.1.3
const radioGroupAPI: Object = {
  component: "radio-group",
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
          type: "string",
          description:
            "처음 렌더링할 때 확인해야 하는 라디오 항목의 값. 라디오 항목의 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "value",
          type: "string",
          description:
            "확인할 라디오 항목의 제어된 값입니다. onValueChange와 함께 사용해야 합니다.",
        },
        {
          name: "onValueChange",
          type: "(value: string) => void",
          typeSimple: "function",
          description: "값이 변경될 때 이벤트 핸들러가 호출됩니다.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 라디오 항목과 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "name",
          type: "string",
          description:
            "그룹 이름. 이름/값 쌍의 일부로 소유 양식과 함께 제출됩니다.",
        },
        {
          name: "required",
          type: "boolean",
          description:
            "true일 경우 소유 양식을 제출하기 전에 사용자가 라디오 항목을 확인해야 함을 나타냅니다.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical" | undefined',
          typeSimple: "enum",
          defaultValue: "undefined",
          description: "컴포넌트의 방향",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "라디오 그룹의 읽기 방향. 생략된 경우 DirectionProvider에서 전역적으로 상속되거나 LTR(좌-우) 읽기 모드로 가정합니다.",
        },
        {
          name: "loop",
          required: false,
          type: "boolean",
          defaultValue: "true",
          description:
            "true일 경우 키보드 탐색이 마지막 항목에서 첫 번째 항목으로, 그 반대로 루프됩니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-disabled]",
          values: "비활성화된 경우 표시됩니다.",
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
          name: "value",
          type: "string",
          description: "이름과 함께 제출될 때 데이터로 제공되는 값입니다.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 라디오 항목과 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "required",
          type: "boolean",
          description:
            "true일 경우 소유 양식을 제출하기 전에 사용자가 라디오 항목을 확인해야 함을 나타냅니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked"],
        },
        {
          attribute: "[data-disabled]",
          values: "비활성화된 경우 표시됩니다.",
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
        {
          name: "forceMount",
          type: "boolean",
          description:
            "더 많은 제어가 필요할 때 강제로 마운트시키는 데 사용됩니다. 리액트 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked"],
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
          keys: ["Tab"],
          description:
            "포커스를 선택한 라디오 항목 또는 그룹의 첫 번째 라디오 항목으로 이동합니다.",
        },
        {
          keys: ["Space"],
          description:
            "선택되지 않은 라디오 항목에 초점이 맞추어져 있으면 확인합니다.",
        },
        {
          keys: ["ArrowDown"],
          description:
            "포커스를 이동하고 그룹의 다음 라디오 항목을 확인합니다.",
        },
        {
          keys: ["ArrowRight"],
          description:
            "포커스를 이동하고 그룹의 다음 라디오 항목을 확인합니다.",
        },
        {
          keys: ["ArrowUp"],
          description:
            "포커스를 이동하고 그룹의 이전 라디오 항목을 확인합니다.",
        },
        {
          keys: ["ArrowLeft"],
          description:
            "포커스를 이동하고 그룹의 이전 라디오 항목을 확인합니다.",
        },
      ],
    },
  ],
};
export default radioGroupAPI;
