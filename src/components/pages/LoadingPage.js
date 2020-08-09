import React from "react";

const LoadingPage = () => {  
  return (
    <div className="container-fuild vh-100  bg-leading ">
      <div className="row vh-100  align-items-center">
        <div className="col-sm-12 ">
          <div className="spinner mb-2">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
