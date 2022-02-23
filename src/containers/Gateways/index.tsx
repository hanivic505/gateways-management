import { Routes, Route } from "react-router-dom";

import GatewaysList from "./List";
import GatewayEdit from "./Edit";
import GatewayDetails from "./Details";
import { IDevice } from "../Devices";
import { data } from "../../mocks/Gateways";

export interface IGateway {
  serialNumber: string;
  name: string;
  ipv4: string;
  devices: IDevice[];
}

export const loadData = (s: string): IGateway =>
  data.filter((g) => g.serialNumber === s)[0];

const Gateways = () => (
  <Routes>
    <Route path="/" element={<GatewaysList />} />
    <Route path="/:serialNumber" element={<GatewayDetails />} />
    <Route path="/add" element={<GatewayEdit />} />
    <Route path="/edit/:serialNumber" element={<GatewayEdit />} />
  </Routes>
);
export default Gateways;
