import { Route, Routes } from "react-router-dom";

import DevicesList from "./List";
import DeviceEdit from "./Edit";
import DeviceDetails from "./Details";
import { data } from "../../mocks/Devices";

export interface IDevice {
  uid: number;
  vendor: string;
  dateCreated: Date;
  status: boolean;
}

export const loadData = (s: number): IDevice =>
  data.filter((g) => g.uid === s)[0];

const Devices = () => (
  <Routes>
    <Route path="/" element={<DevicesList />} />
    <Route path="/:uid" element={<DeviceDetails />} />
    <Route path="/add" element={<DeviceEdit />} />
    <Route path="/edit/:uid" element={<DeviceEdit />} />
  </Routes>
);

export default Devices;
