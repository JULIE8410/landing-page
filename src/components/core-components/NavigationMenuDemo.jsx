import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "../../css/global.css";
import "../../css/navigation-menu.css";

const NavigationMenuDemo = () => {
  return (
    <div className="ComponentBox">
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              배우기 <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List one">
                <li style={{ gridRow: "span 3" }}>
                  <NavigationMenu.Link asChild>
                    <a className="Callout" href="/">
                      <svg
                        aria-hidden
                        width="38"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="white"
                      >
                        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                        <path d="M12 0H4V8H12V0Z"></path>
                        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                      </svg>
                      <div className="CalloutHeading">Radix Primitives</div>
                      <p className="CalloutText">
                        스타일이 없고 접근 가능한 리액트 구성 요소입니다.
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>

                <ListItem href="https://stitches.dev/" title="스티치">
                  동급 최고의 개발자 경험을 갖춘 CSS-in-JS입니다.
                </ListItem>
                <ListItem href="/colors" title="컬러">
                  자동 다크 모드가 있는 아름답고 사려깊은 팔레트입니다.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="아이콘">
                  균형 잡힌 일관성 있는 15x15 아이콘의 훌륭한 세트입니다.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              개요 <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <ListItem
                  title="소개"
                  href="/primitives/docs/overview/introduction"
                >
                  고품질의 액세스 가능한 디자인 시스템과 웹 앱을 구축합니다.
                </ListItem>
                <ListItem
                  title="시작하기"
                  href="/primitives/docs/overview/getting-started"
                >
                  Radix Primitive로 실행할 수 있는 빠른 튜토리얼입니다.
                </ListItem>
                <ListItem
                  title="스타일링"
                  href="/primitives/docs/guides/styling"
                >
                  스타일리시하지 않고 모든 스타일링 솔루션과 호환됩니다.
                </ListItem>
                <ListItem
                  title="애니메이션"
                  href="/primitives/docs/guides/animation"
                >
                  CSS 키프레임 또는 원하는 애니메이션 라이브러리를 사용합니다.
                </ListItem>
                <ListItem
                  title="접근성"
                  href="/primitives/docs/overview/accessibility"
                >
                  다양한 브라우저와 보조 기술에서 테스트를 거쳤습니다.
                </ListItem>
                <ListItem
                  title="릴리즈"
                  href="/primitives/docs/overview/releases"
                >
                  Radix Primitives 릴리스 및 변경 로그.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="NavigationMenuLink"
              href="https://github.com/radix-ui"
            >
              Github
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenuDemo;
