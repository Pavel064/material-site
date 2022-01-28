import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Fcomponent from "./Fcomponent";
import MainContent from "./MainContent";
import TableCards from "./TableCards";

function Main() {
  return (
    <main>
      <Paper
        className="mainFeaturesPost"
        style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
      >
        <Container fixed>
          <div className="overlay" />
          <Grid Container>
            <Grid item md={6}>
              <div className="mainFeaturesPostContent">
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  Web Developer Blog
                </Typography>
                <Fcomponent />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <MainContent />
      <TableCards />
    </main>
  );
}

export default Main;
