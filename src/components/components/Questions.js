import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 30,
    "& .MuiAppBar-root": {
      boxShadow: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: "8px 24px",
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
  formControl: {
    margin: 5,
  },
  button: {
    marginRight: 15,
  },
});

function Questions() {
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;
  const [challenges, setChallenges] = useState([]);
  const [currentUser, setCurrentuser] = useState();
  const [state, setState] = React.useState("");

  useEffect(() => {
    setCurrentuser(JSON.parse(localStorage.getItem("LoggedIn")));
    getData();
  }, []);

  function getData() {
    let data = JSON.parse(localStorage.getItem("challenges"));
    setChallenges(data);
  }

  const handleChange = (event) => {
    let value = event.target.value;
    let ChallengesHolder = challenges;
    console.log(value);
    setState(value);
    switch (value) {
      case "createdAt":
        ChallengesHolder.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setChallenges(ChallengesHolder);
        break;
      case "votes":
        ChallengesHolder.sort((a, b) => b.votes.length - a.votes.length);
        setChallenges(ChallengesHolder);
        break;
      default:
        getData();
    }
  };
  const handlevotes = (id) => {
    let updatedData = challenges.map((e) => {
      if (e.id === id) {
        return { ...e, votes: e.votes.includes(currentUser) ? e.votes.filter((e) => e !== currentUser) : [...e.votes, currentUser] };
      }
      return e;
    });
    localStorage.setItem("challenges", JSON.stringify(updatedData));
    getData();
  };

  console.log(challenges);
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <AppBar position="static" className={classes.approot} color="transparent">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                Challenges
              </Typography>
              <Button variant="outlined" color="primary" className={classes.button} onClick={() => history.push("/addquestion")}>
                Add Challenges
              </Button>
              <Typography variant="subtitle2" noWrap display="inline">
                Sort by
              </Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"createdAt"}>Latest</option>
                  <option value={"votes"}>Votes</option>
                </Select>
              </FormControl>
            </Toolbar>
          </AppBar>
          {challenges.map((e) => (
            <>
              <Divider />
              <Grid className={classes.challenge}>
                <Typography variant="h6" gutterBottom align="left" color="Primary">
                  {e.title}
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                  {e.des}
                </Typography>
                <Typography variant="subtitle2" component="h2" align="left">
                  {e.tag.map((tag, index) => (
                    <>
                      {tag} {index !== e.tag.length - 1 && bull}
                    </>
                  ))}
                </Typography>

                <Typography variant="caption" display="block" gutterBottom align="left" onClick={() => handlevotes(e.id)} color={e.votes.includes(currentUser) ? "secondary" : "initial"} style={{ cursor: "pointer" }}>
                  {e.votes.length}
                  <Typography variant="caption" display="block" gutterBottom>
                    votes
                  </Typography>
                </Typography>
              </Grid>
            </>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Questions;
