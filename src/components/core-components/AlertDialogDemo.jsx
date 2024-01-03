import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "../../css/global.css";
import "../../css/alert-dialog.css";

const AlertDialogDemo = () => (
  <div className="ComponentBox">
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          className="AlertDialogButton violet"
          style={{ width: "fit-content" }}
        >
          계정 삭제
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            계정을 삭제할까요?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            계정이 삭제되면 되돌릴 수 없습니다. '확인' 버튼을 누르면 계정이
            영구적으로 삭제되고 서버에서 데이터가 제거됩니다.
          </AlertDialog.Description>
          <div
            style={{
              display: "flex",
              gap: 25,
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <AlertDialog.Cancel asChild>
              <button className="AlertDialogButton mauve">취소</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button className="AlertDialogButton red">삭제</button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  </div>
);

export default AlertDialogDemo;
