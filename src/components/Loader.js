import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BallTriangle } from 'react-loader-spinner'



const Loader = () => {
  return (
    <div className="loader">
      <BallTriangle color="#00BFFF" height={90} width={90} />
    </div>
  );
}

export default Loader;
