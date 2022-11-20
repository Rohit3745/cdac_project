import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import {
  useParams,
} from "react-router-dom";
import { Container } from "@mui/material";
const toolbarStyle = {
  minHeight: "15px",
  background: "#2E3B55",
};

function AboutUs() {
  const [autoPlay, setAutoPlay] = useState(true);
  const navigate = useNavigate();
  let { id } = useParams();
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
                backgroundColor: "orange",
                padding: "12px 30px",
                fontSize: "16px",
              }}
            >
              LOUGOUT
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Typography variant="h4" display="block" gutterBottom>
        {" "}
        ABOUT US
      </Typography>
      <Carousel pause={true} enableAutoPlay autoPlaySpeed={2500}>
        <Card sx={{ minWidth: 700, minHeight: 300 }} variant="outlined">
          <CardContent>
            <br></br>
            <img src="team5.jpeg" width="700" height="350"></img>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ minWidth: 700, minHeight: 300 }} variant="outlined">
          <CardContent>
            <br></br>

            <img src="team2.jpeg" width="700" height="350"></img>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ minWidth: 700, minHeight: 300 }} variant="outlined">
          <CardContent>
            <br></br>

            <img src="team3.jpeg" width="700" height="350"></img>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ minWidth: 700, minHeight: 300 }} variant="outlined">
          <CardContent>
            <br></br>

            <img src="team.jpeg" width="700" height="350"></img>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 700, minHeight: 300 }} variant="outlined">
          <CardContent>
            <br></br>

            <img src="team6.jpeg" width="700" height="350"></img>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ minWidth: 700, minHeight: 300 }} variant="outlined">
          <CardContent>
            <br></br>

            <img src="team7.jpg" width="700" height="350"></img>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card sx={{ minWidth: 700, minHeight: 300 }} variant="outlined">
          <CardContent>
            <br></br>

            <img src="team0.jpeg" width="700" height="350"></img>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card sx={{ minWidth: 700, minHeight: 300 }} variant="outlined">
          <CardContent>
            <br></br>

            <img src="team9.jpeg" width="700" height="350"></img>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card sx={{ minWidth: 700, minHeight: 300 }} variant="outlined">
          <CardContent>
            <br></br>

            <img src="team10.jpeg" width="700" height="350"></img>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Carousel>
      <Container>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography paragraph>
            We are a group of absolutely dedicated animal lover, who wants to do
            something which help animals so we have devoted our time, energy,
            love to the cause of saving the lives of Dogs and cats. We have
            hundreds of animals waiting eagerly to find their forever homes.
            Many of them have been rescued from the streets and each of them is
            deserving of a loving, caring family they can call their own. We
            have NGOs who taking care of animals and they are waiting for the
            peoples who are keen to adopt a pet as well as those who wants to do
            something for animals by helping them. And the best thing is that,
            we are overcome the barrier of geographical location and time
            constraints because pet haven is a web based platform so aopter from
            anywhere can contact with their pet at any time, they need not to
            wait for physical camp to happen to connect with each other.
          </Typography>
          <Typography paragraph>
            Pet Haven offers various services like connecting Foster with
            Adoptor, promoting peoples to work for pets <br></br>and we give
            them opportunity to become volunteer, provide volunteers to NGOs,
            also we are promoting people to donate something to NGOs so that NGO
            can provide better faclities to Pets. Our website provides easy way
            to enroll your pet for adoption, you need to register as foster by
            filling registration form, then you have to register your pet by
            providing some information about your pet, and we will display your
            pet on our website so that those who want to adopt your pet can
            connect with you. Even you find any pet on street you can enroll
            that pet on our website. It’s a lot easier to adopt than you think.
            You need to register as adopter by filling registration form and you
            can choose your pet. You will get all the details of pet on website
            as well as you will get details of foster of that respective pet so
            that you can contact with respective foster and adopt your pet.
          </Typography>

          <Typography paragraph>
            We are always looking for good people who are keen to provide their
            service as volunteer. If you want to become volunteer, you need to
            register as a volunteer on our website. we will provide your details
            to NGOs so that whenever they need you, the can contact with you We
            are also provide registration for NGOs, they can also enroll their
            pets for adoption. We will display their details on our website so
            those who wanted to help the NGOs by providing donations can contact
            with NGO and donation. We also provide details of voluenteers to
            NGOs which are registerd on our website so that if NGO required
            volunteer the can contact with the people who registered as a
            volunteer on our website.
          </Typography>
        </Box>
      </Container>

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
    </div>
  );
}
export default AboutUs;
