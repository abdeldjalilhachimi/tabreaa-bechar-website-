import React from "react";

const SearchBar = ({ onChange, onClick }) => {
  return (
    <div className="container mt-5">
      <div className="form-group  ">
        <div className="row">
          <div className="col-md-9 mb-3 text-right">
            <select
              className="form-control "
              id="selectType"
              onChange={onChange}
            >
              <option value="Choose blood type"> اختر نوع الزمرة </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="col-md-3">
            <input
              type="button"
              className="btn btn-secondary btn-block"
              value="بحث"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
