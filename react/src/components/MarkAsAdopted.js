import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function MarkasAdopted() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [signal, setSignal] = useState(false);
  const [foster, setFoster] = useState(localStorage.getItem("cont"));

  const [user, SetUser] = useState([]);
  const [userid, SetUserid] = useState("");
  const [petid, SetPetid] = useState(id);
  const [fullname, SetFullname] = useState(id);

  const takeinput = (e) => {
    const inp = e.target.value;
    console.log("taking input" + inp);
    verifynumber(e);
  };
  const verifynumber = (e) => {
    fetch(`http://localhost:9998/verifyuserid/${e.target.value}`).then(
      (res) => {
        if (res.status == 200) {
          setSignal(false);
          console.log(" avialble");

          fetch(`http://localhost:9998/getfoster/${e.target.value}`)
            .then((res) => res.json())
            .then((result) => {
              SetUser(result);
            });
          console.log(user.fullname);
        } else {
          console.log("not  avialble");
          setSignal(true);
        }
      }
    );
  };

  const Clickedevent = (e) => {
    const records = { petid, userid };
    e.preventDefault(); //

    fetch("http://localhost:9998/addRecords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(records),
    }).then((res) => {
      if (res.status == 200) {
        navigate(`/afterLogin/${localStorage.getItem("cont")}`);
      }
    });
  };

  return (
    <div>
      <br></br>
      <Container>
        <Paper elevation={3}>
          NOTE : Your Pet Will Be Removed From List.<br></br>
          <br></br>
          <form>
            <TextField
              id="text"
              label="Ask For Ucid To Adopter"
              variant="outlined"
              value={userid}
              onChange={(e) => {
                SetUserid(e.target.value);
                takeinput(e);
              }}
              helperText={
                signal
                  ? "Invalid UserId , Contact Adopter To Get Valid UserId "
                  : "NOTE : Will Be Verified From Adopter " + user.fullname
              }
            />
            <br></br>
            <input
              className="form-check-input"
              type="checkbox"
              onChange={() => SetUserid(0)}
            />
            <label className="form-check-label" for="Owned">
              OTHERS<br></br> [If You Have Given Your Pet To Adopter Outside Our
              Site.]
            </label>{" "}
            <br></br>
            {signal ? (
              " "
            ) : (
              <Button onClick={Clickedevent} variant="contained">
                {" "}
                Submit{" "}
              </Button>
            )}
            <br></br>
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
            <br></br>
          </form>{" "}
        </Paper>
      </Container>
    </div>
  );
}
