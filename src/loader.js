import React from 'react';

const Loader = () => {
  return (
    <div className="loading">
      <p>Loading...</p>
      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  )
}

export default Loader;
