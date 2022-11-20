import "./App.css";
import Bar from "./components/appbar";
import Pet from "./components/pet";
import Pets from "./components/DisplayPet";
import Login from "./components/Login";
import Register from "./components/User";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddPet from "./components/AddnewPet";
import AfterLogin from "./components/afterLogin";
import AddDonation from "./components/AddDonation";
import Volunteer from "./components/DisplayVolunteers";
import ShowNGOs from "./components/viewNgos";
import PetImage from "./components/uploadImage";
import AfterAddingPet from "./components/RedirectToAddImage";
import Home from "./components/Home";
import Logout from "./components/Logout";
import YouPets from "./components/YourPets";
import MarkasAdopted from "./components/MarkAsAdopted";
import ShowDonationDetails from "./components/showDonationDetails";
import ViewFoster from "./components/ViewFoster";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import { blue, orange } from "@mui/material/colors";
import Blogs from "./components/blogPage";
import AboutUs from "./components/AboutUs";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider muiTheme={theme}>
        <Bar style={{ background: "#2E3B55" }} />
      </MuiThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addpet" element={<Pet />} />
          <Route path="/user" element={<Register />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/yourpets/:id" element={<YouPets />} />
          <Route path="/one/:id" element={<ViewFoster />} />
          <Route path="/Addnewpet/:id" element={<AddPet />} />
          <Route path="/afterLogin/:id" element={<AfterLogin />} />
          <Route path="/donation/:id" element={<AddDonation />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/showngo" element={<ShowNGOs />} />
          <Route path="/addImage/:id" element={<PetImage />} />
          <Route path="/toaddimage/:id" element={<AfterAddingPet />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/adoptingpage/:id" element={<MarkasAdopted />} />
          <Route
            path="/showdonationdetails"
            element={<ShowDonationDetails />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          //Blogs
        </Routes>
      </Router>
    </div>
  );
}
export default App;
