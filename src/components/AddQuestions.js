import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/components/Navbar";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  Cardroot: {
    width: "50%",
  },
  formcontainer: {
    padding: 25,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function AddQuestions() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    id: undefined,
    title: "",
    des: "",
    tag: ["tech", "feature"],
    votes: [],
    createdAt: new Date().toISOString(),
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let getData = JSON.parse(localStorage.getItem("challenges"));
    let updatedState = [...getData, { ...state, id: getData.length + 1 }];
    localStorage.setItem("challenges", JSON.stringify(updatedState));
    history.push("/");
  };

  return (
    <Grid>
      <Navbar />
      <Grid container justify="center" className={classes.formcontainer}>
        <Card className={classes.Cardroot}>
          <CardContent>
            {/* <Typography className={classes.title} variant="h6" noWrap align="left">
              Challenges
            </Typography> */}
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Enter Title" variant="outlined" name="title" onChange={handleChange} />
              <TextField id="outlined-basic" label="Enter Description" variant="outlined" multiline name="des" onChange={handleChange} />
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Add Question
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddQuestions;
