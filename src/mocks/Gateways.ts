import { IGateway } from "../components/Gateways";

export const data: IGateway[] = [
  {
    serialNumber: "g-123",
    name: "Main gateway",
    ipv4: "205.205.205.205",
    devices: [
      {
        uid: 12,
        vendor: "CISCO",
        dateCreated: new Date("12/11/2021"),
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
        dateCreated: new Date("23/6/2021"),
        status: false,
      },
    ],
  },
  {
    serialNumber: "g-124",
    name: "Secondary gateway",
    ipv4: "205.205.205.225",
    devices: [
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
      {
        uid: 15,
        vendor: "Roaster",
        dateCreated: new Date("23/6/2021"),
        status: false,
      },
    ],
  },
  {
    serialNumber: "g-125",
    name: "Backup gateway",
    ipv4: "225.225.205.205",
    devices: [
      {
        uid: 12,
        vendor: "CISCO",
        dateCreated: new Date("12/11/2021"),
        status: true,
      },
      {
        uid: 13,
        vendor: "TP-Link",
        dateCreated: new Date("14/3/2021"),
        status: true,
      },
      {
        uid: 14,
        vendor: "D-Link",
        dateCreated: new Date("3/4/2021"),
        status: true,
      },
    ],
  },
];
