import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IGateway } from "..";
import { IPV4_REGEX } from "../../../helpers/constants";
import { data as Gateways } from "../../../mocks/Gateways";

function GatewayEdit() {
  const loadData = (s: string): IGateway =>
    Gateways.filter((g) => g.serialNumber === s)[0];
  const { serialNumber: params } = useParams();
  const [state, setState] = useState<Partial<IGateway> | undefined>(
    params ? loadData(params) : undefined
  );
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { validate } = e.target.dataset;
    if (validate && !new RegExp(validate).test(e.target.value)) return;

    setState((s) => ({ ...s, [e.target.id]: e.target.value }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/gateways`);
  };

  return (
    <div className="md:w-1/2 mx-auto">
      <form onSubmit={onSubmit}>
        <h1>
          {params !== undefined
            ? `Edit Gateway [${state?.name}]`
            : `Create New Gateway`}
        </h1>
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Gateway name</span>
              <input
                id="name"
                onChange={onChange}
                value={state?.name}
                type="text"
                className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                placeholder="Enter Gateway Name"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Serial number</span>
              <input
                id="serialNumber"
                onChange={onChange}
                value={state?.serialNumber}
                type="text"
                className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                placeholder="Enter Serial Number"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">IPV4</span>
              <input
                id="ipv4"
                onChange={onChange}
                data-validate={IPV4_REGEX}
                value={state?.ipv4}
                type="text"
                className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                placeholder="Enter Serial Number"
              />
            </label>
            <div className="actions">
              <button>Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GatewayEdit;
