import LoginForm from "../Compornents/login-form";
import "./index.css";

const LoginPage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="login">
                    <div className="form-title">
                        <h2>Welcome back!</h2>
                    </div>
                    <div className="login-form">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
