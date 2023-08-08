import React, { useState } from "react";
import "../styles/DemoPopup.css";

function DemoPopup() {
  const [data, setData] = useState({ name: "", phone: "", email: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(data.name);
    console.log(data);
  };

  return (
    <form method="post" onSubmit={handleSubmit} className="popupWrapper">
      <div className="popUpLogo" />
      <div className="popUpHeader">
        Request a <div>demo</div>
      </div>
      <div className="popUpDiv">Name</div>
      <input
        className="popUpIn"
        type="text"
        name="name"
        id=""
        placeholder="Enter your name"
        onChange={handleChange}
        value={data.name}
      />
      <div className="popUpDiv">Work Phone</div>
      <input
        className="popUpIn"
        type="phone"
        name="phone"
        id=""
        placeholder="+49"
        onChange={handleChange}
        value={data.phone}
      />
      <div className="popUpDiv">Work email</div>
      <input
        className="popUpIn"
        type="email"
        name="email"
        id=""
        placeholder="Enter your email"
        onChange={handleChange}
        value={data.email}
      />
      <button type="submit" className="popUpButton">
        Submit
      </button>
    </form>
  );
}

export default DemoPopup;
