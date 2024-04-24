import { ReactComponent as Group520 } from "../icons/svg/Group52.svg";
import SvgIcon from "@mui/material/SvgIcon";

const iconConfigs = {
  width: "7",
  height: "7",
  viewBox: "0 0 7 7",
};

const Icon = (props) => {
  return <SvgIcon {...iconConfigs} {...props} />;
};

export const dashboardIcon = (props) => (
  <SvgIcon component={Group520} {...props} />
);
