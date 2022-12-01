import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Date from "./Date";
import Button from "@mui/material/Button";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai"; 

const Form2 = () => {
  return (
    <section className="formBlock2">
      <h2>Personal Information</h2>
      <article>
        <form action="">
          <div>
            <TextField
              label="Enter First Name"
              id="outlined-size-small"
              size="small"
            />
            <TextField
              label="Enter Last Name"
              id="outlined-size-small"
              size="small"
            />
          </div>

          <aside className="leftBlock">
            <div className="cInfo">
              <Date />
              <TextField
                label="Mobile Number"
                id="outlined-size-small"
                size="small"
              />
              <TextField
                label="Enter Email"
                id="outlined-size-small"
                size="small"
              />
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </aside>
        </form>
      </article>
    </section>
  );
};

export default Form2;
