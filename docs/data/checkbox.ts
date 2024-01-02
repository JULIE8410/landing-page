// 1.0.4
const checkboxAPI: Object = {
  component: "checkbox",
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
          name: "defaultChecked",
          type: "boolean",
          description:
            "처음 렌더링할 때 체크박스의 체크된 상태입니다. 체크박스의 체크된 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "checked",
          type: "boolean",
          description:
            "체크박스의 제어된 체크 상태입니다. onCheckedChange와 함께 사용해야 합니다.",
        },
        {
          name: "onCheckedChange",
          type: `(checked: boolean | 'indeterminate') => void`,
          typeSimple: "function",
          description:
            "체크박스의 체크된 상태가 변경될 때 이벤트 처리기가 호출됩니다.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 체크박스와 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "required",
          type: "boolean",
          description:
            "true일 경우 사용자가 소유하고 있는 양식을 제출하기 전에 체크박스를 체크해야 함을 나타냅니다.",
        },
        {
          name: "name",
          type: "string",
          description:
            "확인란의 이름. name/value 쌍의 일부로 소유하고 있는 양식과 함꼐 제출됩니다.",
        },
        {
          name: "value",
          type: "string",
          defaultValue: "on",
          description: "이름과 함께 제출된 경우 데이터로 지정된 값",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked", "indeterminate"],
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
            "더 많은 제어가 필요할 때 강제로 마운팅시키는 데 사용됩니다. 리액트 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked", "indeterminate"],
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
          description: "Checkbox를 선택 또는 선택 취소합니다.",
        },
      ],
    },
  ],
};

export default checkboxAPI;
