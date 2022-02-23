import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IDevice } from "..";
import { data } from "../../../mocks/Devices";
import { Table } from "../../../components/Table";
import s from "./List.module.scss";
import { schema } from "./schema";

function DevicesList() {
  const navigate = useNavigate();
  const renderActionColumn = (data: IDevice) => {
    return (
      <div className="table-actions">
        <button type="button" onClick={(e) => navigate(`/devices/${data.uid}`)}>
          Details
        </button>
        <button
          type="button"
          onClick={(e) => navigate(`/devices/edit/${data.uid}`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={(e) => window.confirm(`Confirm delete [${data.vendor}]?`)}
        >
          Delete
        </button>
      </div>
    );
  };
  return (
    <div className={s.wrapper}>
      <h1>Devices List</h1>
      <div className="toolbar">
        <Link to="/devices/add">Create</Link>
      </div>
      <Table
        data={data}
        labels={schema}
        pKey="uid"
        actionColumn={renderActionColumn}
      />
    </div>
  );
}

export default DevicesList;
