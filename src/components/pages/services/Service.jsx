import React from "react";
import CustomCard from "../../Ui/Card/CustomCard";
import { services } from "../../../data/data";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Service = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Services</h1>
      </div>
      <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
              {services.map((serv, ind) => {
                return  <CustomCard srcimg={serv.url} title={serv.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
