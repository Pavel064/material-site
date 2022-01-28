import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Ccomponent from "./Ccomponent";

function MainContent() {
  return (
    <div className="mainContent">
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          WDB
        </Typography>

        <Ccomponent />

        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          eb Developer Blog Web Developer Blog Web Developer Blog Web Developer
          Blog Web Developer Blog Web Developer Blog Web Developer Blog Web
          Developer Blog Web Developer Blog Web Developer Blog Web Developer
          Blog Web Developer Blog eb Developer Blog Web Developer Blog Web
          Developer Blog Web Developer Blog Web Developer Blog Web Developer
          Blog Web Developer Blog Web Developer Blog Web Developer Blog Web
          Developer Blog Web Developer Blog Web Developer Blog
        </Typography>
        <div className="mainButtons">
          <Grid container spacing={2} justifyContent="center" margin={2}>
            <Grid item>
              <Button variant="contained" color="primary">
                Start Now
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Learn More
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default MainContent;
