import { Button } from "antd";
import React from "react";
import { Input, InputPassword } from "../ui-component/atoms";

const Login = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen flex justify-center items-center">
      <div className="flex flex-col relative w-1/4 h-auto p-2 rounded-2 bg-sky-500">
        <h1 className="m-auto">Yummin Dashboard</h1>
        <Input
          label="Email"
          name="Email"
          labelStyle={{
            padding: "2px",
          }}
          style={{
            width: "100%",
            marginTop: "8px",
            height: "70px",
          }}
          // inputStyle={{
          //   width: "100%",
          // }}
        />
        <InputPassword
          label="Password"
          name="password"
          labelStyle={{
            padding: "2px",
          }}
          style={{
            width: "100%",
            marginTop: "8px",
            height: "70px",
          }}
          // inputStyle={{
          //   width: '100%'
          // }}
        />
        <Button type="primary">Đăng nhập</Button>
      </div>
    </div>
  );
};

export default Login;
