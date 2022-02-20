import React from "react";
import s from "./Table.module.scss";

export interface IFieldSchema {
  fieldName: string;
  label: string;
  renderer?: Function;
}
interface IProps {
  labels: IFieldSchema[];
  data: any[];
  pKey?: string;
  actionColumn?: (d: any) => JSX.Element;
}

function Table({ data, labels, pKey, actionColumn }: IProps) {
  return (
    <table className={s.wrapper}>
      <thead>
        <tr>
          {labels.map((field) => (
            <th key={field.fieldName}>{field.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={row[pKey || rowIdx]}>
            {labels.map((column) => (
              <React.Fragment key={column.fieldName}>
                {column.renderer ? (
                  <td>{column.renderer(row[column.fieldName])}</td>
                ) : (
                  <td>{row[column.fieldName]}</td>
                )}
              </React.Fragment>
            ))}
            <td>{actionColumn && actionColumn(row)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
