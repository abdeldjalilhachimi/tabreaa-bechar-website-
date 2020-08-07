import React from "react";
import { connect } from "react-redux";
import DonorCard from "./DonorCard";
import { addDonor } from "../../store/actions/donorActions";
import store from "../../store/store";
import { history } from "../history";

const EditDonor = (props) => {
  const [submitDisabled, setSubmitDisabled] = React.useState("");
  const [checkIsFull, setCheckIsFull] = React.useState(null);
  const [errors, setErros] = React.useState(" ");
  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      bloodType: "",
      phoneNumber: "",
    }
  );

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    if (name === "phoneNumber") {
      if (newValue.match(/^0(5|6|7)(\d{8})$/)) {
        console.log("phone", newValue);
        setUserInput({ [name]: newValue });
      }
    }
    if (name === "bloodType") {
      setUserInput({ [name]: newValue });
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!userInput["phoneNumber"] || !userInput["bloodType"]) {
      setErros("من فضلك إملئ  بياناتك بطريقة صحيحة ");
      setSubmitDisabled(false);
      setCheckIsFull(false);
    } else {
      store.dispatch(addDonor(userInput));
      setErros("شكرا, لقد سجلت كمتبرع");
      setSubmitDisabled(true);
      setCheckIsFull(true);
      history.push("/home");
      window.location.reload(false);
    }
  };

  return (
    <div className="container mt-4">
      {checkIsFull ? (
        <div
          className="alert alert-info alert-dismissible fade show"
          role="alert"
        >
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <strong className="text-right btn-block">{errors}</strong>
        </div>
      ) : (
        <div className="text-wrong text-right btn-block alert-wrong">
          {errors}
        </div>
      )}
      <form onSubmit={handelSubmit} className="">
        <div className="form-group text-right">
          <label htmlFor=""> رقم الهاتف</label>
          <input
            type="tel"
            className="form-control"
            name="phoneNumber"
            placeholder="06xxxxxxxx | 05xxxxxxxx | 07xxxxxx "
            onChange={handleChange}
            disabled={submitDisabled}
            maxLength="10"
            data-validate="required"
          />
        </div>
        <div className="form-group text-right">
          <label htmlFor="">اختر نوع الزمرة </label>
          <select
            className="form-control"
            name="bloodType"
            id=""
            onChange={handleChange}
            disabled={submitDisabled}
            data-validate="required"
          >
            <option value=" "> اختر نوع الزمرة </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="B-">B-</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <button
          className="form-control btn-block btn-primary"
          disabled={submitDisabled}
        >
          تبرع
        </button>
      </form>
      <br />
      <br />
      <br />
      <DonorCard
        phoneNumber={userInput["phoneNumber"]}
        bloodType={userInput["bloodType"]}
        isfull={checkIsFull}
      />
      {props.match.param.id}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    donor: state.donor.find((donor) => donor.id == props.match.params.id),
  };
};

export default connect(mapStateToProps)(EditDonor);
