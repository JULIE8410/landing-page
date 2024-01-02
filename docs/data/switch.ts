// 1.0.3

const switchAPI: Object = {
  component: "switch",
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
            "스위치를 처음 렌더링할 때의 상태. 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "checked",
          type: "boolean",
          description:
            "스위치의 제어된 상태입니다. onCheckedChange와 함께 사용해야 합니다.",
        },
        {
          name: "onCheckedChange",
          type: "(checked: boolean) => void",
          typeSimple: "function",
          description: "스위치 상태가 변경될 때 이벤트 처리기가 호출됩니다.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "true일 경우 사용자가 스위치와 상호 작용하지 못하도록 합니다.",
        },
        {
          name: "required",
          type: "boolean",
          description:
            "true일 경우 소유 양식을 제출하기 전에 사용자가 스위치를 확인해야 함을 나타냅니다.",
        },
        {
          name: "name",
          type: "string",
          description:
            "스위치 이름. 이름/값 쌍의 일부로 고유 양식과 함께 제출됩니다.",
        },
        {
          name: "value",
          type: "string",
          defaultValue: "on",
          description: "이름과 함께 제출될 때 데이터로 제공되는 값입니다.",
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
          keys: ["Space"],
          description: "구성 요소의 상태를 전환합니다.",
        },
        {
          keys: ["Enter"],
          description: "구성 요소의 상태를 전환합니다.",
        },
      ],
    },
  ],
};

export default switchAPI;
