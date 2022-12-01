import React, { useState } from "react";
import Styles from "./register.module.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";

import { Link, useNavigate } from "react-router-dom";

const RegForm = () => {
  // let navigate = useNavigate();

  // storing the data in state
  let [state, setState] = useState({
    email: "",
    mob: "",
    branch: "",
    organization: "",
    password: "",
    confirmPassword: "",
  });

  // destructuring state
  let { email, mob, branch, organization, password, confirmPassword } = state;

  // change event for input boxes
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // form submit event
  let handleSubmit = e => {
    e.preventDefault();
    if (email !== "" && mob !== "" && organization !== "" && password !== "") {
      try {
        if (password !== confirmPassword) {
          console.log("Password is not matched");
          toast.error("Password is not matched");
        } else {
          // storing in session storage
          window.sessionStorage.setItem("email", email);
          window.sessionStorage.setItem("password", password);
          window.sessionStorage.setItem("organization", organization);
          window.sessionStorage.setItem("branch", branch);
          window.sessionStorage.setItem("password", password);

          toast.success("User Successfully Registered");
          // navigate("/login");
        }
      } catch (error) {
        console.error(error.code);
      }
      //resetting form fields
      setState({
        password: "",
        email: "",
        branch: "",
        confirmPassword: "",
        organization: "",
      });
    } else {
      toast.error("All Fields are Mandatory");
    }
  };

  return (
    <aside className={Styles.formBlock}>
      <h2>Register</h2>
      <Box component="form" autoComplete="on" onSubmit={handleSubmit}>
        <div className="form-group">
          <TextField
            id="input-with-sx"
            label="Enter Email"
            variant="standard"
            color="secondary"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <TextField
            id="input-with-sx"
            label="Contact Number"
            variant="standard"
            color="secondary"
            name="mob"
            value={mob}
            onChange={handleChange}
          />
        </div>
        <FormControl
          className="selectBlock"
          variant="standard"
          color="secondary"
          sx={{ m: 1, width: 350, textAlign: "left", margin: "0px" }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Organization
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Organization"
            name="organization"
            value={organization}
            onChange={handleChange}
          >
            <MenuItem value="jspiders">J Spiders</MenuItem>
            <MenuItem value="qspiders">Q Spiders</MenuItem>
            <MenuItem value="pyspiders">Py Spiders</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          color="secondary"
          sx={{ m: 0, width: 350, textAlign: "left", margin: "0px" }}
        >
          <InputLabel id="demo-simple-select-standard-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Organization"
            name="branch"
            value={branch}
            onChange={handleChange}
          >
            <MenuItem value="jspiders">J Spiders</MenuItem>
            <MenuItem value="qspiders">Q Spiders</MenuItem>
            <MenuItem value="pyspiders">Py Spiders</MenuItem>
          </Select>
        </FormControl>
        <div className="form-group">
          <TextField
            id="input-with-sx"
            label="Password"
            color="secondary"
            variant="standard"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <TextField
            id="input-with-sx"
            label="Confirm Password"
            variant="standard"
            color="secondary"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Button variant="contained">Submit</Button>
        </div>
      </Box>
    </aside>
  );
};

export default RegForm;
