import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Questions from "./components/Questions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Grid>
      <AppBar position="static" className={classes.root} color="transparent">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Hack Ideas
          </Typography>
        </Toolbar>
      </AppBar>
      <Questions />
    </Grid>
  );
}

export default Home;
