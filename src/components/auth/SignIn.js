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

            <p className="text-right">
              تبرع, ربما قد تكون سببا في إنقاد نفسا من الموت
            </p>
            <form>
              <a
                className="btn btn-block btn-social btn-google login-btn"
                onClick={startLogin}
              >
                <span className="fa fa-google"></span> {"  "} Sign in with
                Google
              </a>
            </form>
            <a href="/privacy" className="privacy-policy ">
              شروط الإستخدام
            </a>
          </div>
        </div>
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="../../app/img/loginpage.jpg"
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
