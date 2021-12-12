import React from "react";
import "./Customall.css";

export const Imagesrc = (props) => {
  return (
    <div>
      <section className="brand-name-section">
        <h6 className="mtrbl">{props.top}</h6>
        <img className="wt" src={props.imgsrc} alt={props.altname} />
      </section>
    </div>
  );
};

export const CustomBgtext = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.background})` }}
      className="backgroundimg"
    >
      <div className="imagesrc">
        <h1>{props.H1}</h1>
        <h2>{props.H2}</h2>
        <h6>{props.H6}</h6>
      </div>
    </div>
  );
};

export const InputForm = (props) => {
  return (
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">
        {props.lName}
      </label>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.typeN}
        className="form-control"
        id={props.idName}
        placeholder={props.holdername}
      />
    </div>
  );
};
