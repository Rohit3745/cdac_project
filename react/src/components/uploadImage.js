import React, { useState } from "react";
import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import {
  useParams,
  useNavigate,
} from "react-router-dom";

export default function PetImage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [petid, setPid] = useState(id);

  const image = new FormData();

  const choosefile = (e) => {
    let file = e.target.files[0];

    image.append("image", file);

    uploadimage();
  };
  const uploadimage = () => {
    fetch(`http://localhost:9998/addimage/${petid}`, {
      method: "POST",

      body: image,
    }).then((res) => {
      if (res.status == 200) {
        alert(" IMAGE ADDED..!");
        navigate(`/afterLogin/${localStorage.getItem("cont")}`);
      }
    });
  };

  return (
    <Container>
      <Paper elevation={3}>
        <form></form>
        <br></br>
        <br></br>
        <form encType="multipart/form-data">
          <input
            encType="multipart/form-data"
            className="form-control"
            type="file"
            id="petimage"
            onChange={(e) => choosefile(e)}
          />
        </form>{" "}
        <br></br>
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
        Back
      </Button>
    </Container>
  );
}
