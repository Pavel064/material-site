import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LayersIcon from "@mui/icons-material/Layers";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function TableCards() {
  return (
    <Container className="cardGrid" maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className="card">
              <CardMedia
                className="cardMedia"
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className="cardContent">
                <Typography variant="h5" gutterBottom>
                  Blog Post
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Blog Post. Web dev blog. Web dev blog
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <LayersIcon />
                <PlayCircleFilledWhiteIcon />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TableCards;
