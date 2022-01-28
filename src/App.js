import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./App.css";
import LayersIcon from "@mui/icons-material/Layers";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import Fcomponent from "./components/Fcomponent";
import Ccomponent from "./components/Ccomponent";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Web Developer Blog{" "}
            </Typography>{" "}
            {/* sx(размер экрана)={{flexGrow: 1}} сместило кнопки вправо/*       */}
            <Box mr={3}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Log In
              </Button>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText> Log in to see videos</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

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
                 < Fcomponent />
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
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

            < Ccomponent />

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              eb Developer Blog Web Developer Blog Web Developer Blog Web
              Developer Blog Web Developer Blog Web Developer Blog Web Developer
              Blog Web Developer Blog Web Developer Blog Web Developer Blog Web
              Developer Blog Web Developer Blog eb Developer Blog Web Developer
              Blog Web Developer Blog Web Developer Blog Web Developer Blog Web
              Developer Blog Web Developer Blog Web Developer Blog Web Developer
              Blog Web Developer Blog Web Developer Blog Web Developer Blog
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
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className="root"
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="subtitle1"
        >
          Web Developer Blog React js Material Ui site
        </Typography>
      </footer>
    </>
  );
}

export default App;
