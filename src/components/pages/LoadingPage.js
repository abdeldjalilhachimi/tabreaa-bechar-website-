import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="container-fuild vh-100 bg-gray ">
      <div className="row vh-100  align-items-center">
        <div className="col-sm-12 ">
          <p className="text-center h4">
            <motion.i
              animate={{
                x: -32,
                y: 21,
                scale: 0.5,
                color: "#ea476a",
              }}
              className="fa fa-heart fa-5x"
            ></motion.i>{" "}
            ...إنتطر لحظة من فضلك
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
