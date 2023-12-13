import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { updateAuthenticate } from "../../slice/authsSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";

const App = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (value) => {
        axios
            .post("http://localhost:8080/api/v1/auth/signup", value)
            .then((res) => {
                const { data } = res;
                if (data.success) {
                    const { accessToken, userInfo } = data.payload;
                    localStorage.setItem("auth_token", accessToken);
                    localStorage.setItem("user_info", JSON.stringify(userInfo));
                    dispatch(updateAuthenticate(true));
                    navigate(`/`);
                }
            });
    };

    return (
        <Form
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 16,
                offset: 4,
            }}
            layout="horizontal"
            style={{
                maxWidth: 600,
                marginLeft: 500,
            }}
            onFinish={handleSubmit}
        >
            <Form.Item
                name={"email"}
                rules={[
                    {
                        required: true,
                    },
                    {
                        type: "email",
                        message: "Email không hợp lệ",
                    },
                ]}
            >
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
                name={"phone_number"}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="SDT" type="tel" />
            </Form.Item>
            <Form.Item
                name={"name"}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Họ và tên" />
            </Form.Item>
            <Form.Item
                name={"password"}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                    "The new password that you entered do not match!"
                                )
                            );
                        },
                    }),
                ]}
            >
                <Input.Password placeholder="Nhập lại mật khẩu" />
            </Form.Item>
            <Form.Item
                style={{ paddingTop: "24px" }}
                wrapperCol={{ offset: 9 }}
            >
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                        width: "128px",
                        marginLeft: "16px",
                    }}
                >
                    Đăng ký
                </Button>
            </Form.Item>
        </Form>
    );
};
export default App;
