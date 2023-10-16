import React, { useState } from "react";

function StateSample() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const [inputWidth, setInputWidth] = useState();
  const [inputHeight, setInputHeight] = useState();

  const change = () => {
    setWidth(inputWidth);
    setHeight(inputHeight);
  };
  return (
    <>
      <div>
        <label htmlFor="">Width : </label>
        <input
          type="number"
          value={inputWidth}
          onChange={(e) => setInputWidth(parseInt(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="">Height :</label>
        <input
          type="number"
          value={inputHeight}
          onChange={(e) => setInputHeight(parseInt(e.target.value))}
        />
      </div>

      <div>
        <button style={{marginTop:20}} onClick={change}>Change</button>
      </div>
      <div
        style={{
          marginTop: 20,
          border: "solid",
          width,
          height,
        }}
      ></div>
    </>
  );
}

export default StateSample;
