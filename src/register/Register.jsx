import React from "react";
import RegForm from "./RegForm";
import RegImage from "./RegImage";
import Styles from "./register.module.css";

const Register = () => {
  return (
    <section id={Styles.registerBlock}>
      <article>
        <RegImage />
        <RegForm />
      </article>
    </section>
  );
};

export default Register;
