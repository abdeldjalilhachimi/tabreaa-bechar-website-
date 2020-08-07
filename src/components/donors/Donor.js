import React from "react";

const Donor = ({ list }) => {
  return (
    list &&
    list.map((donor) => (
      <React.Fragment key={donor.id}>
        <div className="container">
          <div className="card card-body mb-3">
            <h4 className="card-title text-right"> معلومات المتبرع </h4>
            <ul className="list-group list-unstyled">
              <li className="list-group-item text-right">
                {donor.bloodType} <strong> : نوع الزمرة </strong>{" "}
                <i className="fa fa-heart" style={{ color: "#ea476a" }}></i>{" "}
              </li>
              <li className="list-group-item text-right">
                {donor.phoneNumber} <strong> : رقم الهاتف</strong>{" "}
                <i className="fa fa-phone" style={{ color: "#ea476a" }}></i>{" "}
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    ))
  );
};

export default Donor;
