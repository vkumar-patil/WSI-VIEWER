// export default ImageViewer;
import React, { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageViewer = ({ onViewportChange }) => {
  const [detectionResults, setDetectionResults] = useState([]);

  useEffect(() => {
    fetch("/output.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.inference_results) {
          try {
            setDetectionResults(
              data.inference_results.output.detection_results
            );
            console.log(data.inference_results.output.detection_results);
          } catch (error) {
            console.error("Error parsing 'inference_results':", error);
          }
        }
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "80vh" }}>
      <TransformWrapper
        onZoomStop={({ state }) => {
          onViewportChange((prev) => ({
            ...prev,
            scale: state.scale,
          }));
        }}
        onPanningStop={({ state }) => {
          onViewportChange((prev) => ({
            ...prev,
            x: -state.positionX,
            y: -state.positionY,
          }));
        }}
      >
        <TransformComponent>
          <div style={{ position: "relative" }}>
            <img
              src="/7_20241209_024613.png"
              alt="WSI"
              width="100%"
              height="100%"
            />
            {detectionResults.map((box, index) => {
              const [x1, y1, x2, y2] = box;
              return (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    left: `${x1}px`,
                    top: `${y1}px`,
                    width: `${x2 - x1}px`,
                    height: `${y2 - y1}px`,
                    border: "2px solid red",
                    background: "rgba(255,0,0,0.3)",
                  }}
                />
              );
            })}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ImageViewer;
