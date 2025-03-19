import "./App.css";
import DetailsPanel from "./components/DetailsPanel";
import HubView from "./components/HubView";
import ImageViewer from "./components/ImageViewer";
import { useState } from "react";

function App() {
  const [viewport, setViewport] = useState({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    scale: 1,
  });

  return (
    <div className="App" style={{ display: "flex", height: "100vh" }}>
      <DetailsPanel />
      {/* Pass setViewport to ImageViewer */}
      <ImageViewer onViewportChange={setViewport} />
      {/* Pass viewport to HubView */}
      <HubView viewport={viewport} imageWidth={2000} imageHeight={1500} />
    </div>
  );
}

export default App;
