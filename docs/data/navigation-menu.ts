// 1.1.3
const navigationMenuAPI: Object = {
  component: "navigation-menu",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            "처음 렌더링할 때 활성화해야 하는 메뉴 항목의 값입니다. 값 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            "활성화할 메뉴 항목의 제어된 값입니다. onValueChange와 함께 사용해야 합니다.",
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description: "값이 변경될 때 이벤트 핸들러가 호출됩니다.",
        },
        {
          name: "delayDuration",
          type: "number",
          defaultValue: 200,
          description:
            "마우스가 트리거를 입력할 때부터 내용이 열릴 때까지의 기간입니다.",
        },
        {
          name: "skipDelayDuration",
          type: "number",
          defaultValue: 300,
          description:
            "사용자가 다시 지연을 일으키지 않고 다른 트리거를 입력해야 하는 시간입니다.",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "해당되는 경우 메뉴의 읽기 방향. 생략된 경우 DirectionProvider에서 전역적으로 상속되거나 LTR(좌-우) 읽기 모드로 가정합니다.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "메뉴의 방향",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
    },
    {
      tag: "sub",
      props: [
        {
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            "처음 렌더링할 때 활성화해야 하는 메뉴 항목의 값입니다. 값 상태를 제어할 필요가 없을 때 사용합니다.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            "활성화할 하위 메뉴 항목의 제어된 값입니다. onValueChange와 함께 사용해야 합니다.",
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description: "값이 변경될 때 이벤트 처리기가 호출됩니다.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "메뉴의 방향.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
    },
    {
      tag: "list",
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
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
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
          required: false,
          type: "string",
          description:
            "탐색 메뉴를 제어할 때 항목을 활성 값과 연결하는 고유 값입니다. 이 prop은 제어되지 않을 때 자동으로 관리됩니다.",
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
        {
          attribute: "[data-disabled]",
          values: "비활성화된 경우 표시됩니다.",
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
          name: "disableOutsidePointerEvents",
          type: "boolean",
          defaultValue: "false",
          description:
            "true인 경우, 구성 요소의 경계 밖에 있는 요소에서 호버/포커스/클릭 상호 작용이 비활성화됩니다. 사용자는 외부 요소와 상호 작용하려면 두 번 클릭해야 합니다. 탐색 메뉴를 닫고 요소를 활성화하려면 한 번 클릭합니다.",
        },
        {
          name: "onEscapeKeyDown",
          type: "(event: KeyboardEvent) => void",
          typeSimple: "function",
          description:
            "escape key가 눌러졌을때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onPointerDownOutside",
          type: "(event: PointerDownOutsideEvent) => void",
          typeSimple: "function",
          description:
            "포인터 이벤트가 컴포넌트의 경계 밖에서 발생하면 이벤트 처리기가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onFocusOutside",
          type: "(event: FocusOutsideEvent) => void",
          typeSimple: "function",
          description:
            "포커스가 컴포넌트의 경계 밖으로 이동할 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
        },
        {
          name: "onInteractOutside",
          type: "(event: React.FocusEvent | MouseEvent | TouchEvent) => void",
          typeSimple: "function",
          description:
            "상호 작용(포인트 또는 포커스 이벤트)이 컴포넌트의 경계 밖에서 발생할 때 이벤트 핸들러가 호출됩니다. 이는 event.preventDefault를 호출하여 방지할 수 있습니다.",
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
          attribute: "[data-motion]",
          values: ["to-start", "to-end", "from-start", "from-end"],
        },
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
    },
    {
      tag: "link",
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
          name: "active",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description: "링크를 현재 활성 페이지로 식별하는 데 사용됩니다.",
        },
        {
          name: "onSelect",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "사용자가 (마우스 또는 키보드를 통해) 링크를 선택할 때 이벤트 핸들러가 호출됩니다. 이 핸들러에서 event.proventDefault를 호출하면 해당 링크를 선택할 때 탐색 메뉴가 닫히지 않습니다.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-active]",
          values: "활성화된 경우 표시됩니다.",
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
          values: ["visible", "hidden"],
        },
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
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
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
      cssVariable: [
        {
          cssVariable: "--radix-navigation-menu-viewport-width",
          description:
            "표시/숨겨진 경우 뷰포트의 너비로, 활성 컨텐츠에서 계산됩니다.",
        },
        {
          cssVariable: "--radix-navigation-menu-viewport-height",
          description:
            "표시/숨겨진 경우 뷰포트의 높이로, 활성 컨텐츠에서 계산됩니다.",
        },
      ],
    },
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["Space", "Enter"],
          description:
            "NavigationMenu.Trigger에 포커스가 있을 때.트리거, 콘텐츠를 엽니다.",
        },
        {
          keys: ["Tab"],
          description: "포커스를 다음 포커스 가능한 요소로 이동합니다.",
        },
        {
          keys: ["ArrowDown"],
          description:
            "수평 및 포커스가 열린 NavigationMenu.Trigger에 있을 때 트리거, 포커스를 NavigationMenu.Content로 이동합니다. 포커스를 다음 NavigationMenu.Trigger또는NavigationMenu.Link로 이동합니다.",
        },
        {
          keys: ["ArrowUp"],
          description:
            "포커스를 이전 NavigationMenu.Trigger또는NavigationMenu.Link로 이동합니다.",
        },
        {
          keys: ["ArrowRight", "ArrowLeft"],
          description:
            "수직 및 포커스가 열린 NavigationMenu.Trigger에 있을 때.트리거, 포커스를 해당 NavigationMenu.Content로 이동합니다.포커스를 다음/이전 NavigationMenu.Trigger또는NavigationMenu.Link로 이동합니다.",
        },
        {
          keys: ["Home", "End"],
          description:
            "포커스를 첫 번째 NavigationMenu.Trigger또는NavigationMenu.Link로 이동합니다.",
        },
        {
          keys: ["Esc"],
          description:
            "열려 있는 Navigation Menu.Content를 닫고 포커스를 Navigation Menu.Trigger로 이동합니다.",
        },
      ],
    },
  ],
};

export default navigationMenuAPI;
