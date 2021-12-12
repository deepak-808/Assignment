import React from "react";
import { NavLink } from "react-router-dom";
import "./Common.css";
const Common = (props) => {
  return (
    <div>
      <section id="home" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto mttops-3">
              <div className="row">
                <div className="col-md-6 pt-lg-0 order-lg-1">
                  <h1>
                    {props.h1title}
                    <strong className="brand-name"> Deepak</strong>
                  </h1>
                  <h6 className="mt-3">
                      {props.h6title}
                  </h6>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgcng} className="img-fluid animation" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Common;