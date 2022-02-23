import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Devices from "./containers/Devices";
import Gateways from "./containers/Gateways";

function App() {
  return (
    <div className="App" data-testid="main-app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/*" element={<Gateways />} />
          <Route path="/gateways/*" element={<Gateways />} />
          <Route path="/devices/*" element={<Devices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
