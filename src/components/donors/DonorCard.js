import React, { useEffect, useState, useReducer } from "react";
import { connect } from "react-redux";

const DonorCard = ({ phoneNumber, bloodType, isfull }) => {
  return (
    <div className="container">
      {isfull ? (
        <div className="card card-body mb-3">
          <h4 className="card-title text-right"> معلومات المتبرع </h4>
          <ul className="list-group list-unstyled">
            <li className="list-group-item text-right">
              {bloodType} <strong> : نوع الزمرة </strong>{" "}
              <i className="fa fa-heart" style={{ color: "#ea476a" }}></i>{" "}
            </li>
            <li className="list-group-item text-right">
              {phoneNumber} <strong> : رقم الهاتف</strong>{" "}
              <i className="fa fa-phone" style={{ color: "#ea476a" }}></i>{" "}
            </li>
          </ul>
        </div>
      ) : (
        <p className=" text-right  "> !لا يوجد أي تبرع حد الأن</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    donor: state.donor,
  };
};

export default connect(mapStateToProps)(DonorCard);
