// 0.0.3
const formAPI: Object = {
  component: "form",
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
          name: "onClearServerErrors",
          required: false,
          type: "() => void",
          typeSimple: "function",
          description:
            "양식이 제출되거나 재설정되고 서버 오류를 지울 필요가 있을 때 이벤트 핸들러가 호출됩니다.",
        },
      ],
    },
    {
      tag: "field",
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
          name: "name",
          required: true,
          type: "string",
          description:
            "제어부로 전달되어 유효성 확인 메시지와 일치하는 데 사용될 필드의 이름입니다.",
        },
        {
          name: "serverInvalid",
          required: false,
          type: "boolean",
          description:
            "이 prop을 사용하여 서버에서 필드를 유효하지 않은 것으로 표시합니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-invalid]",
          values: "필드가 유효하지 않을 때 표시됩니다.",
        },
        {
          attribute: "[data-valid]",
          values: "필드가 유효할 때 표시됩니다.",
        },
      ],
    },
    {
      tag: "label",
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
          attribute: "[data-invalid]",
          values: "필드가 유효하지 않을 때 표시됩니다.",
        },
        {
          attribute: "[data-valid]",
          values: "필드가 유효할 때 표시됩니다.",
        },
      ],
    },
    {
      tag: "control",
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
          attribute: "[data-invalid]",
          values: "필드가 유효하지 않을 때 표시됩니다.",
        },
        {
          attribute: "[data-valid]",
          values: "필드가 유효할 때 표시됩니다.",
        },
      ],
    },
    {
      tag: "message",
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
          name: "match",
          required: false,
          type: " 'badInput' | 'patternMismatch' | 'rangeOverflow' | 'rangeUnderflow' | 'stepMismatch' | 'tooLong' | 'tooShort' | 'typeMismatch' | 'valid' | 'valueMissing' | {`((value: string, formData: FormData) => boolean)`} | {`((value: string, formData: FormData) => Promise<boolean>)`}",
          typeSimple: "Matcher",
          description:
            "메시지가 표시되어야 하는 조건을 나타내는 데 사용됩니다.",
        },
        {
          name: "forceMatch",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "메시지를 강제로 표시합니다. 이는 서버측 검증을 사용할 때 유용합니다.",
        },
        {
          name: "name",
          required: false,
          type: "string",
          description:
            "필드 부분 외부에서 렌더링할 때 특정 필드를 이름으로 대상으로 지정하는 데 사용됩니다.",
        },
      ],
    },
    {
      tag: "validitystte",
      props: [
        {
          name: "children",
          required: false,
          type: "(validity: ValidityState | undefined) => React.ReactNode",
          typeSimple: "function",
          description: "필드의 유효성 상태를 수신하는 렌더 함수입니다.",
        },
        {
          name: "name",
          required: false,
          type: "string",
          description:
            "필드 부분 외부에서 렌더링할 때 특정 필드를 이름으로 대상으로 지정하는 데 사용됩니다.",
        },
      ],
    },
    {
      tag: "submit",
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

export default formAPI;
