import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { IDevice, loadData } from "..";
import s from "./Details.module.scss";
import DeviceView from "./components/view";

function DeviceDetails() {
  const { uid: params } = useParams();
  const navigate = useNavigate();
  const uid = params ? parseInt(params) : undefined;
  const [state, setState] = useState<IDevice | undefined>(
    uid ? loadData(uid) : undefined
  );

  return (
    <div className="container mx-auto">
      <h1>[{state?.vendor}] Device Details</h1>
      <div className={s.wrapper}>
        {state && <DeviceView device={state} />}

        <div className="actions">
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default DeviceDetails;
