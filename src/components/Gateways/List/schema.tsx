import { Link } from "react-router-dom";
import { IDevice } from "../../Devices";
import { IFieldSchema } from "../../Table/Table";

export const schema: IFieldSchema[] = [
  { fieldName: "serialNumber", label: "Serial Number" },
  { fieldName: "name", label: "Name" },
  { fieldName: "ipv4", label: "IPV4" },
  {
    fieldName: "devices",
    label: "Devices",
    renderer: (list: IDevice[]) => (
      <ul>
        {list.map((d) => (
          <li key={d.uid}>
            <Link to={`/Devices/${d.uid}`}>{d.vendor}</Link>
          </li>
        ))}
      </ul>
    ),
  },
];
