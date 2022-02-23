import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeviceView from "../../Devices/Details/components/view";
import { IGateway, loadData } from "../../Gateways";

import s from "./Details.module.scss";

function GatewayDetails() {
  const { serialNumber: params } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState<Partial<IGateway> | undefined>(
    params ? loadData(params) : undefined
  );

  return (
    <div className="container mx-auto">
      <h1>[{state?.name}] Gateway Details</h1>
      <div className={s.wrapper}>
        <div>
          <label>Serial number:</label> {state?.serialNumber}
        </div>
        <div>
          <label>Name:</label> {state?.name}
        </div>
        <div>
          <label>IPV4:</label> {state?.ipv4}
        </div>
        <div>
          <label>Devices:</label>
          {state?.devices?.map((d) => (
            <DeviceView className="border-2 p-2 my-2" device={d} key={d.uid} />
          ))}
        </div>
        <div className="actions">
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default GatewayDetails;
