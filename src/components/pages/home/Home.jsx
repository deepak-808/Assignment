import React from "react";
import { develper, creadBg, H1, H2, H6, brandName } from "../../../data/data";
import { Imagesrc, CustomBgtext } from "../../Ui/Customui/Customall";
import Common from "../common/Common";

const Home = (props) => {
  return (
    <div className="mttops-3">
      <Common 
        imgcng={develper}
        btname={"Get Started"}
        h1title={"Grow your business with"}
        h6title={"We are the team of talented developer making websites"}
        visit={"/services"}
      />
      <div className="mt-3">
        <CustomBgtext background={creadBg} H1={H1} H2={H2} H6={H6} />
      </div>
      <div>
        <Imagesrc imgsrc={brandName} top={"rewards from brands you love."} />
      </div>
    </div>
  );
};
export default Home;
