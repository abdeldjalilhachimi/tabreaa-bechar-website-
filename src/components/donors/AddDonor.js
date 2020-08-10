import React, { useReducer, useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import DonorCard from "./DonorCard";
import { startAddDonor } from "../../store/actions/donorActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
toast.configure();

const AddDonor = () => {
  const [submitDisabled, setSubmitDisabled] = useState(
    JSON.parse(localStorage.getItem("submitDisabled"))
  );

  const [checkIsFull, setCheckIsFull] = useState(
    JSON.parse(localStorage.getItem("checkIsFull"))
  );

  const dispatch = useDispatch();

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      bloodType: "",
      phoneNumber: "",
    },
    () => {
      const localData = localStorage.getItem("userInput");
      return localData ? JSON.parse(localData) : {};
    }
  );
  // userInput localStorage
  useEffect(() => {
    localStorage.setItem("userInput", JSON.stringify(userInput));
  }, [userInput]);

  // disbaling the button localStorage
  useEffect(() => {
    localStorage.setItem("submitDisabled", submitDisabled);
  }, [submitDisabled]);

  // checking the weidget  localStorage
  useEffect(() => {
    localStorage.setItem("checkIsFull", checkIsFull);
  }, [checkIsFull]);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    if (name === "phoneNumber") {
      if (newValue.match(/^0(5|6|7)(\d{8})$/)) {
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
      toast.error(`  من فضلك  إملئ   بياناتك   بالطريقة  الصحيحة `, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 900,
      });
    } else {
      dispatch(startAddDonor(userInput));
      toast.success("شكرا, لقد سجلت كمتبرع", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
      setSubmitDisabled(true);
      setCheckIsFull(true);
    }
  };

  return (
    <div className="container mt-4">
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    donor: state.donor,
  };
};
const mapDispatchToProps = (dispatch) => ({
  startAddDonor: (donor) => dispatch(startAddDonor(donor)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddDonor);
