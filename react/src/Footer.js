import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

function Footer() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (

    <BottomNavigation showLabels>
    
      <div className="text-center p-3" style={{ bottom: 0 }}>
        <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
          © 2022 All Rights Reserved &nbsp; <PetsIcon sx={{ fontSize: 15 }} />{" "}
          PET HAVEN
        </Typography>
        <Button onClick={handleClick}>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            <InfoIcon sx={{ fontSize: 15 }} /> HELP CENTRE
          </Typography>
        </Button>

        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                <Card sx={{ minWidth: 80, minHeight: 50 }} variant="outlined">
                  <CardContent>
                    <br></br>

                    <Typography
                      sx={{ fontSize: 15 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Contact : 023-589977777, 028-87777777 <br></br>
                      <br></br>
                      <Divider />
                      <br></br>
                      Mail : support@pethaven.com
                    </Typography>
                    <br></br>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}
        </Popper>
      </div>

     
    </BottomNavigation>
  );
}


export default Footer;
