import React, { useState } from "react";
import { InputForm } from "../Ui/Customui/Customall";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const inputChangeValue = (event) => {
    const { name, value } = event.target;
    setData((prvvalu) => {
      return {
        ...prvvalu,
        [name]: value,
      };
    });
  };
  const submit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My phone Number is ${data.phone} and email ${data.email}`
    );
  };
  return (
    <div>
      <div>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={submit}>
                <InputForm
                  lName="Full name"
                  typeN="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputChangeValue}
                  holdername="Enter your fullname"
                />
                <InputForm
                  lName="Phone Number"
                  typeN="number"
                  name="phone"
                  value={data.phone}
                  onChange={inputChangeValue}
                  holdername="Enter your Mobile Number"
                />
                <InputForm
                  lName="Enter Email Address"
                  typeN="text"
                  name="email"
                  value={data.email}
                  onChange={inputChangeValue}
                  holdername="example@gmail.com"
                />
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={data.message}
                    onChange={inputChangeValue}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary mb-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
