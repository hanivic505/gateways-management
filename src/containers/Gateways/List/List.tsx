import { Link, useNavigate } from "react-router-dom";
import { IGateway } from "..";
import { data } from "../../../mocks/Gateways";
import { Table } from "../../../components/Table";
import s from "./List.module.scss";
import { schema } from "./schema";

function GatewaysList() {
  const navigate = useNavigate();
  const renderActionColumn = (data: IGateway) => {
    return (
      <div className="table-actions">
        <button
          type="button"
          onClick={(e) => navigate(`/gateways/${data.serialNumber}`)}
        >
          Details
        </button>
        <button
          type="button"
          onClick={(e) => navigate(`/gateways/edit/${data.serialNumber}`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={(e) => window.confirm(`Confirm delete [${data.name}]?`)}
        >
          Delete
        </button>
      </div>
    );
  };
  return (
    <div className={s.wrapper}>
      <h1>Gateways List</h1>
      <div className="toolbar">
        <Link to="/gateways/add">Create</Link>
      </div>
      <Table
        data={data}
        labels={schema}
        pKey="serialNumber"
        actionColumn={renderActionColumn}
      />
    </div>
  );
}

export default GatewaysList;
