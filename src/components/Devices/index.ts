export interface IDevice {
  uid: number;
  vendor: string;
  dateCreated: Date;
  status: boolean;
}

export { default as DevicesList } from "./List";
export { default as DeviceEdit } from "./Edit";
export { default as DeviceDetails } from "./Details";
