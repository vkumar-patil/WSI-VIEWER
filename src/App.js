import "./App.css";
import DetailsPanel from "./components/DetailsPanel";
import HubView from "./components/HubView";
import ImageViewer from "./components/ImageViewer";

function App() {
  return (
    <div className="App " style={{ display: "flex", height: "100vh" }}>
      <DetailsPanel />
      <ImageViewer />
      <HubView />
    </div>
  );
}

export default App;
