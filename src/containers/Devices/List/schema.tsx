import cn from "classnames";
import { IFieldSchema } from "../../../components/Table/Table";

export const schema: IFieldSchema[] = [
  { fieldName: "uid", label: "UID" },
  { fieldName: "vendor", label: "Vendor" },
  {
    fieldName: "dateCreated",
    label: "Date Created",
    renderer: (d: string) => new Date(d).toLocaleString(),
  },
  {
    fieldName: "status",
    label: "Status",
    renderer: (status?: boolean) => (
      <span className={cn("status", { active: !!status })}></span>
    ),
  },
];
