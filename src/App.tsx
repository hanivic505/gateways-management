import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DevicesList } from "./components/Devices";
import Gateways from "./components/Gateways";

function App() {
  return (
    <div className="App" data-testid="main-app">
      <Router>
        <Routes>
          <Route path="/*" element={<Gateways />} />
          <Route path="/gateways/*" element={<Gateways />} />
          <Route path="/devices" element={<DevicesList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
