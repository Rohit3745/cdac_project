import { Box, Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import Select from "react-dropdown-select";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormFeedback } from "reactstrap";
import { isEmail } from "validator";

const options = [
  { value: 10002, label: "NGO" },
  { value: 10003, label: "ADOPTER" },
  { value: 10004, label: "FOSTER" },
  { value: 10005, label: "VOLUNTEER" },
];
class Register extends Component {
  state = {
    signal: "",
    categ: "",
    contacterror: "",
    passwrdcheck: "",
    passserror: "",
  };
  constructor(props) {
    super(props);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.verifynumber = this.verifynumber.bind(this);
    this.states = this.getInitialstates();
  }
  handleDropdownChange(e) {
    this.setstates({ selectValue: e.target.value });
  }

  getInitialstates = () => ({
    data: {
      fname: "",
      cat: "",
      email: "",
      pass: "",
      confirmpass: "",
      contactNumber: "",
      cities: "",
      states: "",
      pincod: "",
      addresses: "",
      selectValue: "",
    },
    errors: {
      contactNumber: "",
    },
  });

  handleSubmit = (e) => {
    e.preventDefault();

    function Call() {
      alert(" registerd ");
    }
    const ucid = this.state.categ;
    const fullname = e.target.fullN.value;
    const password = e.target.passw.value;

    const contactno = e.target.contactNum.value;
    const mail = e.target.ml.value;
    const address = e.target.addr.value;
    const city = e.target.cit.value;
    const state = e.target.st.value;
    const pincode = e.target.pinc.value;
    const user = {
      ucid,
      fullname,
      password,
      contactno,
      mail,
      address,
      mail,
      address,
      city,
      state,
      pincode,
    };

    function validate(user) {
      let errors = {};
      let i = 0;
      if (user.fullname === "") {
        errors.fname = "fname can not be blank.";
        i++;
      }
      if (!isEmail(user.mail)) {
        errors.email = "Email must be valid.";
        i++;
      }
      if (user.mail === "") {
        errors.email = "Email can not be blank.";
        i++;
      }
      if (user.password === "") {
        errors.pass = "pass must be valid.";
        i++;
      }
      if (user.contactno === "") {
        errors.contactNumber = "Contact Number can not be blank.";
        i++;
      }
      if (user.city === "") {
        errors.cities = "cities can not be blank.";
        i++;
      }
      if (user.state === "") {
        errors.states = "states can not be blank.";
        i++;
      }
      if (user.pincode === "") {
        errors.pincod = "Pincod can not be blank.";
        i++;
      }
      if (user.address === "") {
        errors.addresses = "Addresses can not be blank.";
        i++;
      }
      if (i == 0) {
        console.log("i is 0");
        return i;
      }
    }
    validate(user);
    if (0 == 0) {
      fetch("http://localhost:9998/user/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then((res) => {
        if (res.status == 200) {
          window.location.reload(false);
          Call();
        } else {
          alert("Invalid Data");
        }
      });
      console.log(" after valdn fetch");
    }
    console.log(user);
    const { data } = this.states;
  };

  takepass(e) {
    this.setState({ passwrdcheck: e.target.value });
  }
  verifpass(e) {
    this.setState({ signal: false });
    if (e.target.value != this.state.passwrdcheck) {
      this.setState({ signal: true });
      this.setState({ passserror: " Password Do Not Matches.!" });
    } else {
      this.setState({ signal: false });
    }
  }

  takeinput(e) {
    this.setState({ signal: true });
    const contact = e.target.value;

    console.log("taking input" + contact);
  }
  verifynumber(e) {
    fetch(`http://localhost:9998/verifynumber/${e.target.value}`).then(
      (res) => {
        if (res.status == 200) {
          this.setState({ signal: false });
          console.log(" avialble");

          if (e.target.value.length != 10 || e.target.value == " ") {
            this.setState({ contacterror: "Ten Digit Number" });
            this.setState({ signal: true });
          }
        } else {
          console.log("not  avialble");
          this.setState({ contacterror: "Already Used Number, Give Another" });
          this.setState({ signal: true });
        }
      }
    );
  }

  sendSignal(e) {
    return e;
  }

  handleDropdownChange(e) {
    this.setstates({ selectValue: e.target.value });
  }
  Tologin = () => {
    const navigate = useNavigate();
    console.log("reached LOGIN ");
    navigate("/");
  };
  getchanges = (e) => {
    this.setState({ categ: e[0].value });
    console.log(this.state.categ + "categ");
  };
  call = () => {
    console.log("calling " + this.cat[0].value);
  };
  submitted = (e) => {
    const user = {};
  };
  render() {
    const { selectedOption } = this.states;

    const { data, errors } = this.states;
    return (
      <div>
        <Typography variant="h4" display="block" gutterBottom>
          {" "}
          REGISTRATION{" "}
        </Typography>
        <br></br>
        <div>
          <Container>
            <br></br>
            <Paper elevation={3}>
              <Form onSubmit={this.handleSubmit}>
                <Grid container spacing={7}>
                  <Grid item xs={6}>
                    {" "}
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <TextField
                          id="fname"
                          label="Full Name"
                          /*value={data.fname}*/ invalid={
                            errors.fname ? true : false
                          }
                          name="fullN"
                          onChange={this.handleChange}
                        />
                        <FormFeedback>{errors.fname}</FormFeedback>
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <Box sx={{ width: 226, paddingLeft: 20, marginLeft: 0 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label"></InputLabel>
                          <Select
                            sx={{ m: 1, width: 250 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedOption}
                            label="CATEGORY"
                            onChange={this.getchanges}
                            options={options}
                          ></Select>
                        </FormControl>
                      </Box>
                      <br></br>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <TextField
                          id="email"
                          label="Email"
                          invalid={errors.email ? true : false}
                          name="ml"
                          onChange={this.handleChange}
                        />
                        <FormFeedback>{errors.email}</FormFeedback>
                      </div>
                    </div>
                    <br></br>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <TextField
                          id="pass"
                          label="Password"
                          type="password"
                          name="passw"
                          invalid={errors.pass ? true : false}
                          onChange={(e) => this.takepass(e)}
                        />
                        <FormFeedback>{errors.pass}</FormFeedback>
                      </div>
                    </div>
                    <br></br>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <TextField
                          id="confirmpass"
                          label="Confirm password"
                          type="password"
                          name="confirmpass"
                          invalid={errors.confirmpass ? true : false}
                          onChange={(e) => {
                            this.verifpass(e);
                          }}
                          helperText={
                            this.state.signal == true
                              ? this.state.passserror
                              : ""
                          }
                        />
                        <FormFeedback>{errors.confirmpass}</FormFeedback>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    {" "}
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <TextField
                          id="contactNumber"
                          label="Contact Number"
                          invalid={errors.contactNumber ? true : false}
                          name="contactNum"
                          onChange={(e) => {
                            this.verifynumber(e);
                            this.takeinput(e);
                          }}
                          helperText={
                            this.state.signal === true
                              ? this.state.contacterror
                              : ""
                          }
                        />
                      </div>
                    </div>
                    <br></br>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <TextField
                          id="cities"
                          label="cities"
                          invalid={errors.cities ? true : false}
                          name="cit"
                          onChange={this.handleChange}
                        />
                        <FormFeedback>{errors.cities}</FormFeedback>
                      </div>
                    </div>
                    <br></br>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <TextField
                          id="states"
                          label="state"
                          invalid={errors.states ? true : false}
                          name="st"
                          onChange={this.handleChange}
                        />
                        <FormFeedback>{errors.states}</FormFeedback>
                      </div>
                    </div>
                    <br></br>
                    <div class="form-row">
                      <TextField
                        id="pincod"
                        label="Pincode"
                        invalid={errors.pincod ? true : false}
                        name="pinc"
                        onChange={this.handleChange}
                      />
                      <FormFeedback>{errors.pincod}</FormFeedback>
                    </div>
                    <br></br>
                    <div class="form-row">
                      <TextField
                        id="addresses"
                        label="Address"
                        invalid={errors.addresses ? true : false}
                        name="addr"
                        onChange={this.handleChange}
                      />
                      <FormFeedback>{errors.addresses}</FormFeedback>
                    </div>
                  </Grid>
                </Grid>

                {this.state.signal !== true ? (
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained" /*onClick={this.putstata}*/
                  >
                    Register
                  </Button>
                ) : (
                  " "
                )}
                <Link
                  to="/"
                  style={{ paddingLeft: 13, textDecoration: "none" }}
                >
                  <Button type="button" color="primary" variant="contained">
                    Log In
                  </Button>{" "}
                </Link>
                <br></br>
              </Form>
              <br></br>
            </Paper>
          </Container>
        </div>
      </div>
    );
  }
}

export default Register;
