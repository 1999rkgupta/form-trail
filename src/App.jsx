import React from "react";
import { ToastContainer } from "react-toastify";
import Date from "./form/Date";
import Form from "./form/Form";
import Form1 from "./form/Form1";
import Form2 from "./form/Form2";
import Register from "./register/Register";

const App = () => {
  return (
    <div>
      <ToastContainer />
      {/* <Form /> */}
      {/* <Form1 />
      <Form2 /> */}
      <Register />
      {/* <Date /> */}
      {/* <Form2 /> */}
    </div>
  );
};

export default App;
