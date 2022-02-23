import cn from "classnames";

import { IDevice } from "../..";
import s from "../Details.module.scss";

interface IProps {
  device: IDevice;
  className?: string;
}

function DeviceView({ device, className }: IProps) {
  return (
    <div className={cn(className)}>
      <div>
        <label>UID:</label> {device?.uid}
      </div>
      <div>
        <label>Vendor:</label> {device?.vendor}
      </div>
      <div>
        <label>Date created:</label> {device?.dateCreated?.toString()}
      </div>
      <div>
        <label>Status:</label>{" "}
        <span className={cn("status my-3", { active: device?.status })}></span>
      </div>
    </div>
  );
}

export default DeviceView;
