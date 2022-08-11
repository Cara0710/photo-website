import React from "react";

// props
const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>photographer:{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <div>
        <button>
          <a target="_blank" href={data.src.large}>
            Click
          </a>
        </button>
      </div>
    </div>
  );
};

export default Picture;
