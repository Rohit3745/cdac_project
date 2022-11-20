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

export default function ShowDonationDetails() {
  const navigate = useNavigate();

  const [fullname, SetFullname] = useState("");

  const [users, setUsers] = useState([]);

  const [DonationDetails, setDonationDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9998/viewdonationdetails")
      .then((res) => res.json())
      .then((result) => {
        setDonationDetails(result);
      });
  }, []);

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
        <h1> NGO's Registered With Us </h1>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>NAME</h2>
            </TableCell>
            <TableCell align="right">
              <h2>DETAILS</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DonationDetails.map((DonationDetails) => (
            <TableRow
              key={DonationDetails.userId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">
                {users.map((users, index) => (
                  <tr da ta-index={index}>
                    {users.userid == DonationDetails.userId
                      ? users.fullname
                      : " "}
                  </tr>
                ))}
              </TableCell>
              <TableCell align="right">{DonationDetails.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <br></br>
      </Table>
      <Button
        type="button"
        color="primary"
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
    </TableContainer>
  );
}
