const HubView = ({ viewport }) => {
  const hubWidth = 200; // Small HubView width
  const hubHeight = 150; // Small HubView height
  const scaleFactor = 10; // Adjust based on image size

  return (
    <div
      style={{
        width: `${hubWidth}px`,
        height: `${hubHeight}px`,
        border: "2px solid red",
        position: "relative",
      }}
    >
      <img
        src="/7_20241209_024613.png"
        alt="WSI Preview"
        width="100%"
        height="100%"
      />
      <div
        style={{
          position: "absolute",
          width: `${viewport.width / scaleFactor}px`,
          height: `${viewport.height / scaleFactor}px`,
          border: "2px solid blue",
          background: "rgba(0, 0, 255, 0.2)",
          top: `${viewport.y / scaleFactor}px`,
          left: `${viewport.x / scaleFactor}px`,
        }}
      />
    </div>
  );
};

export default HubView;
