import React from "react";
import * as Form from "@radix-ui/react-form";
import "../../css/global.css";
import "../../css/form.css";

const FormDemo = () => (
  <div className="ComponentBox">
    <Form.Root className="FormRoot">
      <Form.Field className="FormField" name="email">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">이메일</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            이메일을 입력하세요.
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            이메일이 유효하지 않습니다.
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="FormInput" type="email" required />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="question">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">문의사항</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            내용을 입력하세요.
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea className="FormTextarea" required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="FormButton" style={{ marginTop: 10 }}>
          제출하기
        </button>
      </Form.Submit>
    </Form.Root>
  </div>
);

export default FormDemo;
