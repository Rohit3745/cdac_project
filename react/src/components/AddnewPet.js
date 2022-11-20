import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { Form, input, Label, FormGroup, FormFeedback } from "reactstrap";
import FormControl from "@mui/material/FormControl";
import { Alert, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

export default function AddPet() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [pcid, setPcid] = React.useState("");
  const [breedid, setBreedid] = React.useState("");
  const handleChange = (event) => {
    setPcid(event.target.value);
  };
  const handleChanged = (event) => {
    setBreedid(event.target.value);
  };

  const [location, Setlocation] = useState("");

  const [age, Setage] = useState("");

  const [petid, SetPetid] = useState("");
  const [userId, SetuserId] = useState(id);
  const [owned, setOwned] = useState(false);
  const [vaccination, SetVaccination] = useState(false);
  const [gender, setGender] = useState("M");
  const created = false;
  let i = 0;
  const getChckeboxValueowned = (event) => {
    setOwned((current) => !current);
  };
  const getChckeboxValuevacc = (event) => {
    SetVaccination((current) => !current);
  };
  const getChckeboxValuegender = (event) => {
    setGender(event.target.value);
    console.log(gender + "gender");
  };
  const Redirect = () => {
    navigate(`/toaddimage/${userId}`);
  };
  const Clickedevent = (e) => {
    let i = 0;
    console.log(owned + "owned");
    console.log(age + " age");
    console.log(vaccination + "vaccination");
    console.log(gender + "gender");
    console.log(breedid + "breedid");
    console.log(pcid + "type");
    console.log(location + "location");

    const pet = {
      pcid,
      breedid,
      location,
      owned,
      age,
      vaccination,
      gender,
      userId,
      petid,
    };

    fetch("http://localhost:9998/pet/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pet),
    }).then((res) => {
      if (res.status == 200) {
        Redirect();
      }
      else {
        alert("Invalid Data");
      }
    });
  };

  return (
    <Container>
      <br></br>
      <br></br>
      <Paper elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ width: 360, paddingLeft: 10, marginLeft: 0 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Pet Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pcid}
                  label="Pet Type"
                  onChange={handleChange}
                >
                  <MenuItem value={57}>CAT</MenuItem>
                  <MenuItem value={56}>DOG</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br></br>
            <Box sx={{ width: 360, paddingLeft: 10, marginLeft: 0 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Pet Breed</InputLabel>

                {pcid == 56 ? (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={breedid}
                    label="Pet Breed"
                    onChange={handleChanged}
                  >
                    <MenuItem value={11}>German Shephred</MenuItem>
                    <MenuItem value={12}>Labrador</MenuItem>
                    <MenuItem value={13}>Boxers</MenuItem>
                    <MenuItem value={14}>Siberian</MenuItem>
                    <MenuItem value={15}>Pug</MenuItem>
                    <MenuItem value={16}>Maltese Dog</MenuItem>
                    <MenuItem value={17}>Dobermann</MenuItem>
                    <MenuItem value={10}>Other</MenuItem>
                  </Select>
                ) : (
                  " "
                )}

                {pcid == 57 ? (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={breedid}
                    label="Pet Breed"
                    onChange={handleChanged}
                  >
                    <MenuItem value={18}> Persian</MenuItem>
                    <MenuItem value={19}>Maine coon </MenuItem>
                    <MenuItem value={20}>Bengal Cat</MenuItem>
                    <MenuItem value={21}>Siamese</MenuItem>
                    <MenuItem value={22}>Scottish</MenuItem>
                    <MenuItem value={10}>Other</MenuItem>
                  </Select>
                ) : (
                  " "
                )}
              </FormControl>{" "}
              <br></br>
              <br></br>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="Vaccinated"
                onChange={getChckeboxValuevacc}
              />
              <label className="form-check-label" for="Vaccinated">
                Vaccinated
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="Owned"
                value={true}
                onChange={getChckeboxValueowned.bind(this)}
              />
              <label className="form-check-label" for="Owned">
                Owned
              </label>
            </Box>{" "}
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: 360, paddingLeft: 0, marginLeft: 0 }}>
              {" "}
              <FormControl fullWidth>
                <TextField
                  type="text"
                  className="form-control"
                  label="Location"
                  id="inputCity"
                  onChange={(e) => {
                    Setlocation(e.target.value);
                  }}
                />
              </FormControl>
            </Box>
            <br></br>
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="M"
              onChange={getChckeboxValuegender}
              defaultChecked
            />
            <label className="form-check-label" for="inlineRadio1">
              Male
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="F"
              onChange={getChckeboxValuegender}
            />
            <label className="form-check-label" for="inlineRadio2">
              Female
            </label>
            <br></br>
            <br></br>{" "}
            <Box sx={{ width: 360, paddingLeft: 0, marginLeft: 0 }}>
              {" "}
              <FormControl fullWidth>
                <TextField
                  type="number"
                  label="Age"
                  id="age"
                  className="form-control"
                  onChange={(e) => {
                    Setage(e.target.value);
                  }}
                />
              </FormControl>
            </Box>
          </Grid>{" "}
        </Grid>

        <br></br>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={() => {
            Clickedevent();
          }}
        >
          Add Pet
        </Button>

        <div></div>
        <br></br>
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
        &nbsp; Back
      </Button>
    </Container>
  );
}
