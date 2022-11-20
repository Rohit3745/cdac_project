import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const rows = [];

export default function Volunteer() {
  const navigate = useNavigate();
  const [pet, setPet] = useState([]);
  const [pcid, SetPcid] = useState("");
  const [breedid, SetBreedid] = useState("");
  const [location, Setlocation] = useState("");
  const [owned, Setowned] = useState("");
  const [age, Setage] = useState("");
  const [vaccination, SetVaccination] = useState("");
  const [gender, Setgender] = useState("");
  const [userId, SetuserId] = useState("");

  const [users, setUsers] = useState([]);
  const [fullname, SetFullname] = useState("");
  const [city, SetCity] = useState("");
  const [contactno, SetContactno] = useState("");
  const [mail, SetMail] = useState("");
  var [id, SetId] = useState("");
  var [ison, setIson] = useState(true);
  useEffect(() => {
    fetch("http://localhost:9998/user")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <div>
        <h1> Volunteer Registered With Us </h1>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">LOACTION</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">CONTACT</TableCell>
            <TableCell align="right">MAIL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((users) => (
            <TableRow
              key={users.userId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {users.ucid == 10005 ? (
                <TableCell align="right">{users.city}</TableCell>
              ) : (
                " "
              )}

              {users.ucid == 10005 ? (
                <TableCell align="right">{users.fullname}</TableCell>
              ) : (
                " "
              )}
              {users.ucid == 10005 ? (
                <TableCell align="right">{users.contactno}</TableCell>
              ) : (
                " "
              )}
              {users.ucid == 10005 ? (
                <TableCell align="right">{users.mail}</TableCell>
              ) : (
                " "
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
    </TableContainer>
  );
}
