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

const Form = () => {
  return (
    <section id="formContainer">
      <article>
        <h1>Personal Information</h1>
        <form action="">
          <aside className="formBlock1">
            <div className="form-group1">
              <TextField
                label="Full Name"
                id="outlined-size-small"
                size="small"
              />
            </div>

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
            <div>
              <Date />
            </div>
          </aside>
          <aside className="form-group2">
            <div>
              <span>
                <AiFillPhone />
              </span>
              <TextField
                label="Contacts"
                id="outlined-size-small"
                size="small"
              />
              <br />
              <Button variant="outlined">Add Contact</Button>
            </div>
            <div>
              <span>
                <AiOutlineMail />
              </span>
              <TextField label="Emails" id="outlined-size-small" size="small" />
              <br />
              <Button variant="outlined">Add Email</Button>
            </div>
            <TextField label="Address" id="outlined-size-small" size="small" />
          </aside>
          <aside className="radioBlock">
            <div>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Have Passport?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </div>
            <div>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Have Pancard?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </div>
          </aside>
          <aside className="buttonBlock">
            <Button variant="contained" color="success">
              Success
            </Button>
          </aside>
        </form>
      </article>
    </section>
  );
};

export default Form;
