import SignupForm from "../Compornents/signup-form";

const SignupPage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="signup">
                    <div className="form-title">
                        <h2>Đăng ký</h2>
                    </div>
                    <div className="signup-form">
                        <SignupForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupPage;
