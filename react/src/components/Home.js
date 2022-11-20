import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Paper } from "@mui/material";

import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const drawerWidth = 240;
const toolbarStyle = {
  minHeight: "15px",
  background: "#2E3B55",
};
function Home() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [users, SetUsers] = useState("");
  const [fullname, SetFullname] = useState("");
  //ucid
  const [ucid, Setucid] = useState("");
  const [city, SetCity] = useState("");
  //contactno
  const [contactno, SetContactno] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9998/getfoster/${id}`)
      .then((res) => res.json())
      .then((result) => {
        SetUsers(result);
      });
  });
  return (
    <div>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar style={toolbarStyle}>
          <Link
            to="/logout"
            style={{ paddingLeft: 13, textDecoration: "none" }}
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
          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={() => {
              navigate(`/afterLogin/${localStorage.getItem("cont")}`);
            }}
            style={{
              borderRadius: 20,
              backgroundColor: "#2E3B55",
              padding: "12px 30px",
              fontSize: "16px",
            }}
          >
            SERVICES
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        <Paper elevation={3} sx={{ width: "auto" }}>
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            YOUR PROFILE
          </Typography>
          <br></br>
          <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
              <br></br>
              <Typography
                sx={{ fontSize: 28 }}
                color="text.secondary"
                gutterBottom
              >
                {users.fullname}
              </Typography>
              <br></br>
              <Typography variant="h5" component="div">
                Type : {users.ucid == 10002 ? "NGO" : ""}
                {users.ucid == 10003 ? "ADOPTER" : ""}
                {users.ucid == 10004 ? "FOSTER " : ""}
                {users.ucid == 10005 ? "VOLUNTEER" : ""}
              </Typography>
              <br></br>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {users.city}
              </Typography>
              <br></br>
              <Typography variant="body2">
                Contact :{users.contactno}
                <br />
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Paper>
        <br></br>
        <Button
          type="button"
          color="primary"
          variant="contained"
          onClick={() => {
            navigate(`/afterLogin/${localStorage.getItem("cont")}`);
          }}
          style={{
            borderRadius: 20,
            backgroundColor: "#2E3B55",
            padding: "12px 30px",
            fontSize: "16px",
          }}
        >
          BACK
        </Button>
      </div>{" "}
    </div>
  );
}
export default Home;
