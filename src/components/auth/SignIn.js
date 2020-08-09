import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../store/actions/authActions";

const SignIn = ({ startLogin }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-md-6 login-section-wrapper">
          <div className="login-wrapper my-auto">
            <h1 className="login-title text-right ">
              <i className="fa fa-heartbeat" style={{ color: "#ea476a" }}></i>{" "}
              {"  "}
              Tabreaa | تبرع
            </h1>
            <br />
            <br />
            <p className="text-right h6">
              تبرع, ربما قد تكون سببا في إنقاد نفس من الموت
            </p>
            <form>
              <a
                className="btn btn-block btn-social btn-google login-btn"
                onClick={startLogin}
              >
                <img
                  src="https://img.icons8.com/officexs/30/000000/google-logo.png"
                  alt="google logo"
                />{" "}
                سجل بإستعمال قوقل{" "}
              </a>
            </form>
            <a href="/privacy" className="privacy-policy ">
              شروط الإستخدام
            </a>
          </div>
        </div>
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="https://images.unsplash.com/photo-1583267614528-c55b31cb0961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="login image"
            className="login-img"
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(SignIn);
