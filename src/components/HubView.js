import React from "react";

const HubView = () => {
  return (
    <div style={{ width: "200px", height: "150px", border: "2px solid red" }}>
      <img src="/7_20241209_024613.png" alt="WSI Preview" width="100%" />
      <div
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          background: "red",
          opacity: 0.5,
          top: "50px", // Change dynamically based on zoom
          left: "80px",
        }}
      />
    </div>
  );
};

export default HubView;
