import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const toolbarStyle = {
  minHeight: "15px",
  background: "#2E3B55",
};

var team10 = require("../images/adp.jpg");

function AfterLogin() {
  const [userid, SetUserid] = useState("");
  const [ucid, SetUcid] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    localStorage.setItem("cont", id);

    console.log(id + "this is id");
    fetch(`http://localhost:9998/getUserid/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });

    console.log("ucid  " + users.ucid);
    console.log("ucid  " + users.userid);
  }, []);
  const Clickedevent = () => {
    navigate(`/Addnewpet/${users.userid}`);
  };

  return (
    <div>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar style={toolbarStyle}>
          <Button
            onClick={() => {
              navigate(`/home/${users.userid}`);
            }}
            variant="contained"
            style={{
              borderRadius: 20,
              backgroundColor: "#2E3B55",
              padding: "12px 30px",
              fontSize: "16px",
            }}
          >
            HOME
          </Button>
          
          {users.ucid == 10003 ? (
            <Button
              onClick={() => {
                navigate("/pets");
              }}
              variant="contained"
              style={{
                borderRadius: 20,
                backgroundColor: "#2E3B55",
                padding: "12px 30px",
                fontSize: "16px",
              }}
            >
              View Availaible Pets
            </Button>
          ) : (
            " "
          )}
          {users.ucid != 10003 && users.ucid != 10005 ? (
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
              Add Pet
            </Button>
          ) : (
            ""
          )}
          {users.ucid != 10003 && users.ucid != 10005 ? (
            <Button
              onClick={() => {
                navigate(`/yourpets/${users.userid}`);
              }}
              variant="contained"
              style={{
                borderRadius: 20,
                backgroundColor: "#2E3B55",
                padding: "12px 30px",
                fontSize: "16px",
              }}
            >
              View Your Pets
            </Button>
          ) : (
            ""
          )}
          {users.ucid == 10002 ? (
            <Button
              onClick={() => {
                navigate(`/donation/${users.userid}`);
              }}
              variant="contained"
              style={{
                borderRadius: 20,
                backgroundColor: "#2E3B55",
                padding: "12px 30px",
                fontSize: "16px",
              }}
            >
              Add Donation Details
            </Button>
          ) : (
            ""
          )}
          {users.ucid == 10002 ? (
            <Button
              onClick={() => {
                navigate("/volunteer");
              }}
              variant="contained"
              style={{
                borderRadius: 20,
                backgroundColor: "#2E3B55",
                padding: "12px 30px",
                fontSize: "16px",
              }}
            >
              View Volunteer
            </Button>
          ) : (
            ""
          )}
          {users.ucid == 10005 ? (
            <Button
              onClick={() => {
                navigate("/showngo");
              }}
              variant="contained"
              style={{
                borderRadius: 20,
                backgroundColor: "#2E3B55",
                padding: "12px 30px",
                fontSize: "16px",
              }}
            >
              View NGO's
            </Button>
          ) : (
            ""
          )}
          <Link
            to="/logout"
            style={{ paddingLeft: 25, textDecoration: "none" }}
          >
            <Button
              type="button"
              color="primary"
              variant="contained"
              style={{
                borderRadius: 20,
                backgroundColor: "#2E3B55",
                padding: "12px 30px",
                fontSize: "16px",
              }}
            >
              LOUGOUT
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <br></br>
          <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
            Welcome, {users.fullname} .!
          </Typography>
          <br></br>
        </CardContent>
      </Card>
      <br></br>
      <img src={team10} width="380" height="380" />
      <br></br>
      <br></br>
      <br></br>
      <Button
        onClick={() => {
          navigate(`/home/${users.userid}`);
        }}
        variant="contained"
        style={{
          borderRadius: 20,
          backgroundColor: "#2E3B55",
          padding: "12px 30px",
          fontSize: "16px",
        }}
      >
        BACK
      </Button>
    </div>
  );
}
export default AfterLogin;
