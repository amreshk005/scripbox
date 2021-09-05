import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 30,
    "& .MuiAppBar-root": {
      boxShadow: "none",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "Bolder",
  },
  pos: {
    marginBottom: 12,
  },
  challenge: {
    padding: 20,
  },
});

function Questions() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <AppBar position="static" className={classes.approot} color="transparent">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                Challenges
              </Typography>
            </Toolbar>
          </AppBar>
          <Divider />
          <Grid className={classes.challenge}>
            <Typography variant="h6" gutterBottom align="left" color="Primary">
              h5. Heading
            </Typography>
            <Typography variant="body1" gutterBottom align="left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, optio fuga. Recusandae, quis laboriosam. Veritatis atque ipsa quam officia amet suscipit, quia, dignissimos sunt et totam sequi, mollitia doloribus
              accusamus!
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Questions;
