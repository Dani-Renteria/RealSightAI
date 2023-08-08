import React, { useState } from "react";
import "../styles/Form.css";

function Form() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
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
    <form method="post" onSubmit={handleSubmit} className="formContainer">
      <div>Name</div>
      <input
        className="formIn"
        type="text"
        name="name"
        id=""
        onChange={handleChange}
        value={data.name}
        placeholder="Enter your name"
      />
      <div>Email</div>
      <input
        className="formIn"
        type="email"
        name="email"
        id=""
        onChange={handleChange}
        value={data.email}
        placeholder="Enter your email"
      />
      <div>Message</div>
      <textarea
        name="message"
        id=""
        onChange={handleChange}
        value={data.message}
        placeholder="Give us a message"
      ></textarea>
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
