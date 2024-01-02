import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
// import "../css/global.css";
import "../../css/accordion.css";

const AccordionDemo = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>접근가능합니까?</AccordionTrigger>
      <AccordionContent>
        네, 이것은 WAI-ARIA 디자인 패턴을 준수합니다.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>스타일이 적용되지 않은 것입니까?</AccordionTrigger>
      <AccordionContent>
        네. 기본적으로 스타일이 적용되어 있지 않으므로 외관과 느낌에 자유로움을
        줍니다.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>애니메이션이 가능합니까?</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          네 CSS 또는 JavaScript를 이용하여 Accordion을 애니메이션화할 수
          있습니다.
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;
