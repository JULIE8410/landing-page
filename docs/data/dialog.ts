// 1.0.4
const dialogAPI: Object = {
  component: "dialog",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "Dialog가 처음 렌더링될 때 열려 있는 상태입니다. 열려 있는 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "Dialog의 제어된 열린 상태입니다. onOpenChange와 함께 사용해야 합니다.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "Dialog의 열린 상태가 변경될 때 이벤트 처리기가 호출됩니다.",
        },
        {
          name: "modal",
          required: false,
          type: "boolean",
          defaultValue: "true",
          description:
            "Dialog의 모달리티(modality) 입니다. true일 경우 외부 요소와의 상호 작용이 비활성화되고 dialog 내용만 화면 판독기에 표시됩니다.",
        },
      ],
    },
    {
      tag: "trigger",
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
          values: ["open", "closed"],
        },
      ],
    },
    {
      tag: "portal",
      props: [
        {
          name: "forceMount",
          type: "boolean",
          description:
            "더 많은 제어가 필요할 때 강제로 마운트시키기 위해 사용됩니다. React 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다. 이 부분에 사용되면 Dialog.Overlay 및 Dialog.Content에 의해 상속됩니다.",
        },
        {
          name: "container",
          type: "HTMLElement",
          defaultValue: "document.body",
          description: "내용을 포탈할 컨테이너 요소를 지정합니다.",
        },
      ],
    },
    {
      tag: "overlay",
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
            "제어가 더 필요할 때 강제로 마운팅시키는 데 사용됩니다. React 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다. Dialog.Portal에서 상속됩니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
        },
      ],
    },
    {
      tag: "content",
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
            "제어가 더 필요할 때 강제로 마운팅시키는 데 사용됩니다. React 애니메이션 라이브러리로 애니메이션을 제어할 때 유용합니다. Dialog.Portal에서 상속됩니다.",
        },
        {
          name: "onOpenAutoFocus",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "열린 후 포커스가 컴포넌트로 이동할 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onCloseAutoFocus",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "닫힘 후 포커스가 트리거로 이동하면 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onEscapeKeyDown",
          type: "(event: KeyboardEvent) => void",
          typeSimple: "function",
          description:
            "escape key가 눌려졌을 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onPointerDownOutside",
          type: "(event: PointerDownOutsideEvent) => void",
          typeSimple: "function",
          description:
            "포인터 이벤트가 컴포넌트의 경계 밖에서 발생하면 이벤트 처리기가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onInteractOutside",
          type: "(event: React.FocusEvent | MouseEvent | TouchEvent) => void",
          typeSimple: "function",
          description:
            "상호 작용(포인트 또는 포커스 이벤트)이 컴포넌트의 경계 밖에서 발생할 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
        },
      ],
    },
    {
      tag: "close",
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
      tag: "title",
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
      tag: "description",
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
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["Space"],
          description: "대화 상자를 엽니다/닫습니다.",
        },
        {
          keys: ["Enter"],
          description: "대화 상자를 엽니다/닫습니다.",
        },
        {
          keys: ["Tab"],
          description: "포커스를 다음 포커스 가능 요소로 이동합니다.",
        },
        {
          keys: ["Shift + Tab"],
          description: "포커스를 이전 포커스 가능 요소로 이동합니다.",
        },
        {
          keys: ["Esc"],
          description: "대화 상자를 닫고 포커스를 Dialog.Trigger로 이동합니다.",
        },
      ],
    },
  ],
};

export default dialogAPI;
