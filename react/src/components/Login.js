import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HttpsIcon from "@mui/icons-material/Https";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PetsIcon from "@mui/icons-material/Pets";
export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("cont") != null) {
      navigate("/Home");
    }
  });

  const [phone, SetPhone] = useState("");
  const [pass, SetPass] = useState("");
  const [output, SetOutput] = useState("");

  const ToUser = () => {
    navigate("/user");
  };

  const Clickedevent = (e) => {
    e.preventDefault(); //
    const cred = [phone, pass];
    fetch("http://localhost:9998/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(cred),
    }).then((res) => {
      if (res.status == 200) {
        navigate(`/afterLogin/${phone}`);
      }
      else {
        alert("please enter log in details");
      }
    });
  };

  return (
    <div>
      <Container>
        <Typography variant="h6" display="block" gutterBottom>
          {" "}
          <h2> SIGN IN</h2>
        </Typography>
        <br></br>
        <Grid container spacing={7}>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ width: "auto" }}>
              {" "}
              <form action="/addpet">
                <br></br>
                <AccountBoxIcon sx={{ fontSize: 50 }} color="action" />{" "}
                <TextField
                  id="Phone"
                  label="Phone"
                  variant="outlined"
                  value={phone}
                  onChange={(e) => SetPhone(e.target.value)}
                />
                <br></br>
                <br></br>
                <HttpsIcon sx={{ fontSize: 50 }} color="action" />{" "}
                <TextField
                  type="Password"
                  id="Password"
                  label="Password"
                  variant="outlined"
                  value={pass}
                  onChange={(e) => SetPass(e.target.value)}
                />
                <br></br>
                <br></br>
                <Button
                  onClick={Clickedevent}
                  variant="contained"
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#2E3B55",
                    padding: "12px 30px",
                    fontSize: "16px",
                  }}
                >
                  LOGIN
                </Button>
                <br></br>
                <br></br>
                <Button onClick={ToUser} variant="outlined" size="small">
                  {" "}
                  CREATE ACCOUNT{" "}
                </Button>
                <br></br> <br></br>
              </form>
            </Paper>
          </Grid>
          <br></br>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ width: "auto" }}>
              <br></br>
              <br></br>
              <Button
                sx={{
                  width: 360,
                  paddingLeft: 10,
                  marginLeft: 0,
                  alignItems: "flex-start",
                  alignSelf: "flex-start",
                }}
                variant="outlined"
                onClick={() => navigate("/aboutus")}
              >
                {" "}
                ABOUT US &nbsp;&nbsp;{" "}
                <PetsIcon
                  sx={{ fontSize: 25 }}
                  color="action"
                  spacing={7}
                />{" "}
              </Button>{" "}
              <br></br>
              <br></br>
              <br></br>{" "}
              <Button
                sx={{
                  width: 360,
                  paddingLeft: 10,
                  marginLeft: 0,
                  alignItems: "flex-start",
                  alignSelf: "flex-start",
                }}
                variant="outlined"
                onClick={() => navigate("/blogs")}
              >
                {" "}
                BLOGS &nbsp; &nbsp;{" "}
                <ReviewsIcon sx={{ fontSize: 25 }} color="action" spacing={7} />
              </Button>{" "}
              <br></br>
              <br></br>
              <br></br>{" "}
              <Button
                sx={{
                  width: 360,
                  paddingLeft: 10,
                  marginLeft: 0,
                  alignItems: "flex-start",
                  alignSelf: "flex-start",
                }}
                variant="outlined"
                onClick={() => {
                  navigate("/showdonationdetails");
                }}
              >
                {" "}
                DONATE TO VERIFIED NGO's &nbsp;&nbsp;{" "}
                <VolunteerActivismIcon
                  sx={{ fontSize: 23 }}
                  color="action"
                  spacing={7}
                />{" "}
              </Button>
              <br></br>
              <br></br> <br></br>
              <br></br>{" "}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
