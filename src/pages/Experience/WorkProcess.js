
import clsx from "clsx";
import IconData from "./IconData.json";
import IconContent from "./iconcontent";
import { Card } from "@mui/material";

const WorkProcess = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className={clsx("support-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <Card sx={{ mt: -10, mb: 2 }}>
          <div className="row feature-icon-two-wrap">
            {IconData?.map((single, key) => (
              <div className="col-md-3" key={key}>
                <IconContent
                  data={single}
                  spaceBottomClass="mb-0"
                  textAlignClass="text-center"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>

  );
};

export default WorkProcess;
