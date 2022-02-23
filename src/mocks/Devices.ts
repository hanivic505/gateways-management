import { IDevice } from "../containers/Devices";

export const data: IDevice[] = [
  {
    uid: 12,
    vendor: "CISCO",
    dateCreated: new Date("12/11/2021"),
    status: true,
  },
  {
    uid: 13,
    vendor: "TP-Link",
    dateCreated: new Date("4/23/2021"),
    status: true,
  },
  {
    uid: 14,
    vendor: "D-Link",
    dateCreated: new Date("3/4/2021"),
    status: true,
  },
  {
    uid: 15,
    vendor: "Roaster",
    dateCreated: new Date("3/26/2021"),
    status: false,
  },
  {
    uid: 16,
    vendor: "Bingo",
    dateCreated: new Date("12/1/2021"),
    status: true,
  },
  {
    uid: 17,
    vendor: "Mango",
    dateCreated: new Date("7/1/2021"),
    status: true,
  },
];
