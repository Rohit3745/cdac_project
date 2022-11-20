import React from "react";

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  useParams,
} from "react-router-dom";
function AfterAddingPet() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [userid, SetUserid] = useState("");
  const [ucid, SetUcid] = useState("");
  const [petid, SetPetid] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(id + "thi is id");

    alert("Please Add Image Size Below 250kb");
    fetch(`http://localhost:9998/whereToInsertImage/${id}`)
      .then((res) => res.json())
      .then((result) => {
        SetPetid(result);
      });

    console.log("ucid  " + petid);
  }, []);

  return (
    <div>
      <br></br> You Must Add A Image To Post Your Pet.
      <br></br>
      <div>
        {" "}
        <br></br>
        <Button
          onClick={() => {
            navigate(`/addImage/${petid}`);
          }}
          variant="contained"
        >
          Add Image{" "}
        </Button>
      </div>
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
    </div>
  );
}
export default AfterAddingPet;
