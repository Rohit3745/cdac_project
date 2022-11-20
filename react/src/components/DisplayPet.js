import * as React from "react";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";

import Typography from "@mui/material/Typography";
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

export default function Pets() {
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
  var [petid, SetPetd] = useState("");
  var [ison, setIson] = useState(true);
  useEffect(() => {
    fetch("http://localhost:9998/onlyavailblePets")
      .then((res) => res.json())
      .then((result) => {
        setPet(result);
      });
  }, []);
  function Clickedevent(pid) {
    id = pid;
    console.log(id + "id");
    if (id == pid) {
      navigate(`/one/${pid}`);
    }

    console.log(pid + "pid");
  }

  function renderSwitch(para) {
    switch (para) {
      case 10:
        return "German Shephred";
      case 11:
        return "Labrador";
      case 12:
        return "German Shephred";
      case 13:
        return "Boxer";
      case 14:
        return "Siberian Husky";
      case 15:
        return "pug";
      case 16:
        return " Maltese Dog";
      case 17:
        return "Dobermann";
      case 18:
        return "Persian";
      case 19:
        return " Maine coon";
      case 20:
        return "Bengal Cat";
      case 21:
        return "Siamese";
      case 22:
        return "Ragdoll";
      case 23:
        return "Scottish";
      default:
        return "OTHERS";
    }
  }

  return (
    <Container>
      <TableContainer sx={{ marginTop: 5 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> </TableCell>

              <TableCell>
                <Typography variant="h6" display="block" gutterBottom>
                  LOCATION
                </Typography>
              </TableCell>

              <TableCell>
                {" "}
                <Typography variant="h6" display="block" gutterBottom>
                  BREED{" "}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" display="block" gutterBottom>
                  TYPE{" "}
                </Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="h6" display="block" gutterBottom>
                  GENDER
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pet.map((pet) => (
              <TableRow
                key={pet.location}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  {" "}
                  <img
                    style={{ borderRadius: "10px" }}
                    src={`http://localhost:9998/showimage/${pet.petid}`}
                    width="190"
                    height="110"
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography variant="subtitle1" display="block" gutterBottom>
                    {" "}
                    {pet.location}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" display="block" gutterBottom>
                    {renderSwitch(pet.breedid)}{" "}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" display="block" gutterBottom>
                    {pet.pcid == 56 ? "DOG" : "CAT"}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" display="block" gutterBottom>
                    {pet.gender == "M" ? "MALE " : "FEMALE"}
                  </Typography>
                </TableCell>
                <br></br> <br></br>{" "}
                <Button
                  onClick={() => {
                    SetId(pet.userId);
                    Clickedevent(pet.userId);
                  }}
                  variant="outlined"
                >
                  {" "}
                  View Foster{" "}
                </Button>
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
    </Container>
  );
}
