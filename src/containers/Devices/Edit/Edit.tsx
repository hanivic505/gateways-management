import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IDevice, loadData } from "..";
import s from "./Edit.module.scss";

function DeviceEdit() {
  const navigate = useNavigate();
  const { uid: params } = useParams();
  const uid = params ? parseInt(params) : undefined;
  const [state, setState] = useState<Partial<IDevice> | undefined>(
    uid ? loadData(uid) : undefined
  );
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { validate } = e.target.dataset;
    if (validate && !new RegExp(validate).test(e.target.value)) {
      setValidationErrors([...validationErrors, e.target.id]);
      e.target.classList.add("errors");
    } else {
      setValidationErrors((v) => [...v.filter((x) => x !== e.target.id)]);
      e.target.classList.remove("errors");
    }

    setState((s) => ({ ...s, [e.target.id]: e.target.value }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (validationErrors.length) return;

    navigate(`/devices`);
  };
  return (
    <div className="container mx-auto">
      <h1>
        {uid !== undefined
          ? `Edit Gateway [${state?.vendor}]`
          : `Create New Gateway`}
      </h1>
      <div className={s.wrapper}>
        <form onSubmit={onSubmit}>
          <div className="mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Vendor</span>
                <input
                  required
                  id="vendor"
                  onChange={onChange}
                  value={state?.vendor}
                  type="text"
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  placeholder="Enter Vendor"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">UID</span>
                <input
                  required
                  id="uid"
                  onChange={onChange}
                  value={state?.uid}
                  type="text"
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  placeholder="Enter UID"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Date Created</span>
                <input
                  required
                  id="dateCreated"
                  onChange={onChange}
                  value={state?.dateCreated?.toISOString().substr(0, 10)}
                  type="date"
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  placeholder="Enter Date Created"
                />
              </label>
              <div className="actions">
                <button>Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeviceEdit;
