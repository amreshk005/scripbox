import React from "react";
import Grid from "@material-ui/core/Grid";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <Grid>
      <Navbar />
      <Questions />
    </Grid>
  );
}

export default Home;
