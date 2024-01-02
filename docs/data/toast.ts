// 1.1.4

const toastAPI: Object = {
  component: "toast",
  props: [
    {
      tag: "provider",
      props: [
        {
          name: "duration",
          type: "number",
          defaultValue: 5000,
          description:
            "각 토스트를 자동으로 닫기 전에 경과해야 하는 시간(밀리초)입니다.",
        },
        {
          name: "label",
          required: true,
          type: "string",
          defaultValue: '"Notification"',
          description:
            "각 토스트에 대해 저자에 맞춤화된 라벨입니다. 화면 판독기 사용자가 중단을 토스트와 연관시키는 데 사용됩니다.",
        },
        {
          name: "swipeDirection",
          type: '"right" | "left" | "up" | "down"',
          typeSimple: "enum",
          defaultValue: '"right"',
          description: "토스트를 닫아야 하는 포인터 스와이프의 방향입니다.",
        },
        {
          name: "swipeThreshold",
          type: "number",
          defaultValue: 50,
          description:
            "닫기가 트리거되기 전에 스와이프 제스처가 이동해야 하는 거리(픽셀)입니다.",
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
        {
          name: "hotkey",
          type: "string[]",
          defaultValue: '["F8"]',
          description: "",
          guide: "keycode.info",
          url: "https://keycode.info/",
        },
        {
          name: "label",
          type: "string",
          defaultValue: '"Notifications ({hotkey})"',
          description:
            "An author-localized label for the toast region to provide context for screen reader users when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you.",
        },
      ],
    },
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
          type: '"foreground" | "background"',
          typeSimple: "enum",
          defaultValue: '"foreground"',
          description:
            "접근성을 위해 토스트의 감도를 조절합니다. 사용자 작업의 결과인 토스트는 전경(foreground)을 선택합니다. 배경 작업에서 생성된 토스트는 배경을 사용해야 합니다.",
          guide: "sensitivity",
          url: "/primitives/docs/components/toast#sensitivity",
        },
        {
          name: "duration",
          type: "number",
          description:
            "자동으로 토스트를 닫기 전에 경과해야 하는 시간(밀리초)입니다. 그러면 공급자에게 제공된 값이 재정의됩니다.",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          defaultValue: "true",
          description:
            "대화상자가 처음 렌더링될 때 열려 있는 상태입니다. 열려 있는 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "대화상자의 제어된 열린 상태입니다. onOpenChange와 함께 사용해야 합니다.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "대화 상자의 열린 상태가 변경될 때 이벤트 핸들러가 호출됩니다.",
        },
        {
          name: "onEscapeKeyDown",
          type: "(event: KeyboardEvent) => void",
          typeSimple: "function",
          description:
            "escape key가 눌러졌을 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onPause",
          type: "() => void",
          typeSimple: "function",
          description: "",
        },
        {
          name: "onResume",
          type: "() => void",
          typeSimple: "function",
          description:
            "해제 타이머가 일시 중지되면 이벤트 핸들러가 호출됩니다. 이는 포인터가 viewport 위로 이동하거나 viewport가 초점이 맞춰지거나 창이 흐려질 때 발생합니다.",
        },
        {
          name: "onSwipeStart",
          type: "(event: SwipeEvent) => void",
          typeSimple: "function",
          description:
            "스와이프 상호 작용을 시작할 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onSwipeMove",
          type: "(event: SwipeEvent) => void",
          typeSimple: "function",
          description:
            "이벤트 핸들러가 스와이프 상호 작용 중에 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onSwipeEnd",
          type: "(event: SwipeEvent) => void",
          typeSimple: "function",
          description:
            "이벤트 핸들러가 스와이프 상호 작용의 마지막에 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
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
          values: ["open", "closed"],
        },
        {
          attribute: "[data-swipe]",
          values: ["start", "move", "cancel", "end"],
        },
        {
          attribute: "[data-swipe-direction]",
          values: ["up", "down", "left", "right"],
        },
      ],
      cssVariable: [
        {
          cssVariable: "--radix-toast-swipe-move-x",
          description: "수평으로 스와이프할 때 토스트의 오프셋 위치입니다.",
        },
        {
          cssVariable: "--radix-toast-swipe-move-y",
          description: "수직으로 스와이프할 때 토스트의 오프셋 위치입니다.",
        },
        {
          cssVariable: "--radix-toast-swipe-end-x",
          description: "수평으로 스와이프한 후 토스트의 오프셋 끝 위치입니다.",
        },
        {
          cssVariable: "--radix-toast-swipe-end-y",
          description: "수직으로 스와이프한 후 토스트의 오프셋 끝 위치입니다.",
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
    {
      tag: "action",
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
          name: "altText",
          required: true,
          type: "string",
          description:
            "토스트에 쉽게 접근할 수 없는 스크린 리더 사용자를 위해 조치를 취할 수 있는 대체 방법을 설명합니다.",
          guide: "액션을 달성하기 위한 대안적인 방법",
          url: "./toast#alternative-action",
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
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["F8"],
          description: "Viewport에 초점을 맞춥니다.",
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
          keys: ["Space"],
          description:
            "Toast.Action 또는 Toast.Close에 초점이 맞추어져 있으면 토스트를 닫습니다.",
        },
        {
          keys: ["Enter"],
          description:
            "Toast.Action 또는 Toast.Close에 초점이 맞추어져 있으면 토스트를 닫습니다.",
        },
        {
          keys: ["Esc"],
          description: "토스트에 초점이 맞춰지면, 토스트를 닫습니다.",
        },
      ],
    },
  ],
};

export default toastAPI;
