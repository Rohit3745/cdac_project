import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const toolbarStyle = {
  minHeight: "15px",
  background: "#2E3B55",
};
function Blogs() {
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
                backgroundColor: "#2E3B55",
                padding: "12px 30px",
                fontSize: "16px",
              }}
            >
              LOUGOUT
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Typography variant="h6" display="block" gutterBottom>
        {" "}
        <h1> Stories </h1>
      </Typography>

      <Carousel itemsToShow={1}>
        <Card sx={{ minWidth: 800, minHeight: 500 }} variant="outlined">
          <CardContent>
            <br></br>
            <Typography
              sx={{ fontSize: 25 }}
              color="text.secondary"
              gutterBottom
            >
              Priyanka 
            </Typography>
            <br></br>
            <img src="cats.jpg" width="200" height="120"></img>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br></br>
              <Divider />
              <br></br>
              This First blog that gives insight of our events like successfully
              conducted adoption through our platform. <br></br>Here you will
              come to know how volunteers contributing to our online Pet
              adoption community by working with NGOs and helping pets.<br></br>{" "}
              Also you can find that how different kind of donations motivate us
              to take care of all Pets throughout the country.<br></br>
              "How donation works for number of Pets in form of desired things.
              Pet Haven provides platform where you can donate desired things
              for pets to the specific NGO.<br></br> Pet haven makes sure that
              this donation will reach to NGO who is in need to take care of
              their Pets.<br></br> Donation can be things that needs for pets
              like shelter material ,different food for pets ,<br></br> some
              medical kit specific to pets , or it can be a money which will
              donators directly transfer to that specific NGO by looking details
              of NGO on Pet Haven platform.
              <br></br>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ minWidth: 800, minHeight: 500 }} variant="outlined">
          <CardContent>
            <br></br>
            <Typography
              sx={{ fontSize: 25 }}
              color="text.secondary"
              gutterBottom
            >
              Rohit
            </Typography>
            <br></br>
            <img src="ak.jpg" width="200" height="120"></img>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br></br>
              <Divider />
              <br></br>
              "Pet Haven provides online pet adoption platform to conduct smooth
              process of adoption of pets.<br></br> Here if adopter is
              interesting in pet adoption he/she can see all available pets for
              adoption and can accordingly connect with different foster and
              NGOs.<br></br> To connect with pet owners he/she needs to register
              by providing adopter details like name, email,location etc.
              <br></br> on pet haven as Adopter. After registration adopter can
              get pet owner details to interact with pet owner for smooth
              adoption process.
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ minWidth: 800, minHeight: 500 }} variant="outlined">
          <CardContent>
            <br></br>
            <Typography
              sx={{ fontSize: 25 }}
              color="text.secondary"
              gutterBottom
            >
              Rakesh
            </Typography>
            <br></br>
            <img src="dll.jpg" width="200" height="120"></img>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br></br>
              <Divider />
              <br></br>
              "Glad to tell about our first successful pet adoption done through
              our online Pet Haven adoption platform. <br></br>One of the
              visitor Prathamesh of our platform who is looking pet for adoption
              simply register and apply for dog adoption .<br></br> After
              interaction take place between the NGO who is owner of that
              specific Pet for which adopter interested and contact for adoption
              , <br></br>with mutual conversation NGO gave their pet to adopter
              and at same time owner updated on our platform about pet get
              adopted.
              <br></br>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ minWidth: 800, minHeight: 500 }} variant="outlined">
          <CardContent>
            <br></br>
            <Typography
              sx={{ fontSize: 25 }}
              color="text.secondary"
              gutterBottom
            >
              Yogesh
            </Typography>
            <br></br>
            <img src="pratham.jpg" width="200" height="120"></img>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br></br>
              <Divider />
              <br></br>
              PET Haven provides opportunity to become a Volunteer who can take
              care of Pets and make difference in their lives.<br></br> To
              become a Volunteer he/she needs to do registration on Pet Haven
              platform by simply providing their details.<br></br> So different
              NGOs can reach to Volunteers and and can collaborate to do some
              work to helps Pets.<br></br> Volunteers can also view available
              NGOs and can contact them to fullfil any need of Volunteer work.{" "}
              <br></br>Volunteers opportunities include task like volunteer at
              adoption event,Assist at different animal shelter,Training and
              socializing dogs,etc.
              <br></br>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ minWidth: 800, minHeight: 500 }} variant="outlined">
          <CardContent>
            <br></br>
            <Typography
              sx={{ fontSize: 25 }}
              color="text.secondary"
              gutterBottom
            >
              Dhanashree
            </Typography>
            <br></br>
            <img src="pethavenOne.jpeg" width="200" height="120"></img>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br></br>
              <Divider />
              <br></br>
              Volunteers role is always important with responsibility of pet
              care.<br></br> As some of volunteers registered themselves before
              to work with NGOs now helping at different NGOs to take care of
              pets.<br></br> In this hot summer , volunteers are makes sure that
              pets will get enough amount of water to drink and no of shelters
              available for pets. <br></br>This information is shared by NGO
              with our Pet Haven Community.
              <br></br>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Carousel>
      <br></br>

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
export default Blogs;
