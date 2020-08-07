import React from "react";
import Donor from "./Donor";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";

const Donors = ({ donor }) => {
  const [searchType, setSearchType] = React.useState("");
  const [data, setData] = React.useState(donor);

  const getData = (data) => {
    return new Promise((resolve, reject) => {
      resolve(data.filter((item) => item.bloodType === searchType));
      reject(Error("Problem loading data!"));
    });
  };

  const handleSubmit = () => {
    getData(donor)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleChange = (e) => setSearchType(e.target.value);

  return (
    <div>
      <SearchBar onChange={handleChange} onClick={handleSubmit} />
      <Donor list={data} />
    </div>
  );
};

const mapStateTopProps = (state) => {
  return {
    donor: state.donor,
  };
};
export default connect(mapStateTopProps)(Donors);
