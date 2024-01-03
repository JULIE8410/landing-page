import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "../../css/global.css";
import "../../css/tabs.css";

const TabsDemo = () => (
  <div className="ComponentBox">
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List className="TabsList" aria-label="Manage your account">
        <Tabs.Trigger className="TabsTrigger" value="tab1">
          계정
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab2">
          비밀번호
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="TabsContent" value="tab1">
        <p className="TabsText">사용자 계정 변경 후 저장 버튼을 클릭하세요.</p>
        <fieldset className="TabsFieldset">
          <label className="TabsLabel" htmlFor="name">
            이름
          </label>
          <input className="TabsInput" id="name" defaultValue="John Park" />
        </fieldset>
        <fieldset className="TabsFieldset">
          <label className="TabsLabel" htmlFor="username">
            사용자명
          </label>
          <input className="TabsInput" id="username" defaultValue="@jPark" />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button className="Button green">저장하기</button>
        </div>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">
        <p className="TabsText">
          여기서 비밀번호를 변경하세요. 저장 후 로그아웃됩니다.
        </p>
        <fieldset className="TabsFieldset">
          <label className="TabsLabel" htmlFor="currentPassword">
            현재 비밀번호
          </label>
          <input className="TabsInput" id="currentPassword" type="password" />
        </fieldset>
        <fieldset className="TabsFieldset">
          <label className="TabsLabel" htmlFor="newPassword">
            새 비밀번호
          </label>
          <input className="TabsInput" id="newPassword" type="password" />
        </fieldset>
        <fieldset className="TabsFieldset">
          <label className="TabsLabel" htmlFor="confirmPassword">
            새 비밀번호(확인)
          </label>
          <input className="TabsInput" id="confirmPassword" type="password" />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button className="Button green">변경하기</button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  </div>
);

export default TabsDemo;
