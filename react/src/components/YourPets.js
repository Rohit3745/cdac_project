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
import { useNavigate, useParams } from "react-router-dom";

export default function YouPets() {
  let { id } = useParams();
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

  var [petid, SetPetd] = useState("");
  var [ison, setIson] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:9998/findYourPets/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setPet(result);
      });
  }, []);
  useEffect(() => {
    console.log(id + "thi is id");
    fetch(`http://localhost:9998/getfoster/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>LOCATION</TableCell>

            <TableCell align="right">Breed</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Mark Adopted</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pet.map((pet) => (
            <TableRow
              key={pet.location}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pet.location}
              </TableCell>
              <TableCell align="right">{renderSwitch(pet.breedid)}</TableCell>
              <TableCell align="right">
                {pet.pcid == 56 ? "DOG" : "CAT"}
              </TableCell>
              <TableCell align="right">
                {pet.gender == "M" ? "MALE " : "FEMALE"}
              </TableCell>
              <TableCell align="right">
                {" "}
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate(`/adoptingpage/${pet.petid}`);
                  }}
                >
                  {" "}
                  Adopted
                </Button>{" "}
              </TableCell>
              <TableCell align="right">
                {" "}
                <img
                  src={`http://localhost:9998/showimage/${pet.petid}`}
                  width="190"
                  height="110"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {pet.petid}
      </Table>{" "}
      <br></br>
      <Button
        onClick={() => {
          navigate(`/home/${id}`);
        }}
        variant="contained"
      >
        HOME
      </Button>{" "}
      <br></br>
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
    </TableContainer>
  );
}
