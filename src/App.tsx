import { Box, Grid } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Grid container>
      <Grid sx={{ background: "pink" }} item xs={12} md={12}>
        1
      </Grid>
      <Grid item xs={12} md={6}>
        2
      </Grid>
      <Grid item xs={12} md={6}>
        3
      </Grid>
    </Grid>
  );
}

export default App;
