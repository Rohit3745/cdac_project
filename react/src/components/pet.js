import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";

export default function Pet() {
  const [pcid, SetPcid] = useState("");
  const [breedid, SetBreedid] = useState("");
  const [location, Setlocation] = useState("");
  const [owned, Setowned] = useState("");
  const [age, Setage] = useState("");
  const [vaccination, SetVaccination] = useState("");
  const [gender, Setgender] = useState("");
  const [userId, SetuserId] = useState("");
  const [one, setOne] = useState("401");

  const image = new FormData();

  const created = false;
  const choosefile = (e) => {
    let file = e.target.files[0];
    image.append("image", file);
    uploadimage();
  };
  const uploadimage = () => {
    fetch(`http://localhost:9998/addimage/${one}`, {
      method: "POST",
      body: image,
    });
  };
  const Clickedevent = (e) => {
    e.preventDefault(); //
    const pet = {
      pcid,
      breedid,
      location,
      owned,
      age,
      vaccination,
      gender,
      userId,
    };
    console.log(pet);
    console.log(gender);

    fetch("http://localhost:9998", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pet),
    });
  };
  return (
    <Container>
      <Paper elevation={3}>
        <form>
          <TextField
            id="pcid"
            label="pcid"
            variant="outlined"
            value={pcid}
            onChange={(e) => SetPcid(e.target.value)}
          />
          <br></br>
          <TextField
            id="breed"
            label="breed"
            variant="outlined"
            value={breedid}
            onChange={(e) => SetBreedid(e.target.value)}
          />
          <br></br>
          <TextField
            id="location"
            label="location"
            variant="outlined"
            value={location}
            onChange={(e) => Setlocation(e.target.value)}
          />
          <br></br>
          <TextField
            id="owned"
            label="owned"
            variant="outlined"
            value={owned}
            onChange={(e) => Setowned(e.target.value)}
          />
          <br></br>
          <TextField
            id="age"
            label="age"
            variant="outlined"
            value={age}
            onChange={(e) => Setage(e.target.value)}
          />
          <br></br>
          <TextField
            id="vaccination"
            label="vaccination"
            variant="outlined"
            value={vaccination}
            onChange={(e) => SetVaccination(e.target.value)}
          />
          <br></br>
          <TextField
            id="gender"
            label="gender"
            variant="outlined"
            value={gender}
            onChange={(e) => Setgender(e.target.value)}
          />
          <br></br>
          <TextField
            id="userId"
            label="userId"
            variant="outlined"
            value={userId}
            onChange={(e) => SetuserId(e.target.value)}
          />
          <br></br>

          <Button onClick={() => {}} variant="contained" color="success">
            {" "}
            SIGN UP{" "}
          </Button>
          <br></br>
        </form>

        <form encType="multipart/form-data">
          <input
            encType="multipart/form-data"
            className="form-control"
            type="file"
            id="petimage"
            onChange={(e) => choosefile(e)}
          />
        </form>

        <div>
          IMAGE
          <img
            src={"http://localhost:9998/showimage/352"}
            width="193"
            height="130"
          />
        </div>
      </Paper>
    </Container>
  );
}
