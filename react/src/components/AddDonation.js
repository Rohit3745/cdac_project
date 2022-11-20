import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

export default function AddDonation() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [phone, SetPhone] = useState("");
  const [pass, SetPass] = useState("");
  const [output, SetOutput] = useState("");
  const [userId, SetuserId] = useState(id);
  const [details, setDetails] = useState("");

  const ToUser = () => {
    navigate("/user");
  };

  const Clickedevent = (e) => {
    e.preventDefault(); //

    const DonationDetails = { userId, details };
    console.log(userId + "userid");
    console.log(details + "details");
    fetch("http://localhost:9998/doantiondetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(DonationDetails),
    }).then((res) => {
      if (res.status == 200) {
        alert(" DETAILS ADDED..!");
        navigate(`/afterLogin/${localStorage.getItem("cont")}`);
      }
    });
  };

  return (
    <div>
      <br></br>
      <Container>
        <Paper elevation={3}>
          <form action="/addpet">
            <br></br>

            <TextField
              sx={{ m: 1, width: 800 }}
              id="pass"
              label="Add Donation Details"
              variant="outlined"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <br></br>
            <Button onClick={Clickedevent} variant="outlined" size="small">
              {" "}
              ADD{" "}
            </Button>
          </form>{" "}
        </Paper>
        <br></br>

        <Button
          type="button"
          color="primary"
          variant="contained"
          onClick={() => {
            navigate(`/afterLogin/${localStorage.getItem("cont")}`);
          }}
        >
          Back
        </Button>
      </Container>
    </div>
  );
}
