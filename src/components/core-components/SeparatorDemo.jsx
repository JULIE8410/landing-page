import React from "react";
import * as Separator from "@radix-ui/react-separator";
import "../../css/global.css";
import "../../css/separator.css";

const SeparatorDemo = () => (
  <div className="ComponentBox">
    <div style={{ width: "100%", maxWidth: 300, margin: "0 15px" }}>
      <div className="SeparatorText" style={{ fontWeight: 500 }}>
        Radix Primitives
      </div>
      <div className="SeparatorText">
        오픈 소스 UI 구성 요소 라이브러리입니다.
      </div>
      <Separator.Root className="SeparatorRoot" style={{ margin: "15px 0" }} />
      <div style={{ display: "flex", height: 20, alignItems: "center" }}>
        <div className="SeparatorText">블로그</div>
        <Separator.Root
          className="SeparatorRoot"
          decorative
          orientation="vertical"
          style={{ margin: "0 15px" }}
        />
        <div className="SeparatorText">공식문서</div>
        <Separator.Root
          className="SeparatorRoot"
          decorative
          orientation="vertical"
          style={{ margin: "0 15px" }}
        />
        <div className="SeparatorText">소스코드</div>
      </div>
    </div>
  </div>
);

export default SeparatorDemo;
