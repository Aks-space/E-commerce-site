import { Grid } from "@mui/material";

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page</h1>
        <hr />
        <p>Home page content.</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
