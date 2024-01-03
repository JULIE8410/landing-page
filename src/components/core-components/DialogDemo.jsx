import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../../css/global.css";
import "../../css/dialog.css";

const DialogDemo = () => (
  <div className="ComponentBox">
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="DialogButton violet">프로필 수정</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">프로필 수정</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            프로필을 변경 후 저장 버튼을 클릭하세요.
          </Dialog.Description>
          <fieldset className="DialogFieldset">
            <label className="DialogLabel" htmlFor="name">
              이름
            </label>
            <input className="DialogInput" id="name" defaultValue="홍길동" />
          </fieldset>
          <fieldset className="DialogFieldset">
            <label className="DialogLabel" htmlFor="username">
              닉네임
            </label>
            <input
              className="DialogInput"
              id="username"
              defaultValue="@gdHong"
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="DialogButton green">저장</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="DialogIconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
);

export default DialogDemo;
