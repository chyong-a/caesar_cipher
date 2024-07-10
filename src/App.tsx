import { Grid } from "@mui/material";
import "./App.css";
import { ControlPanel } from "./components/control-panel/controlpanel";
import { InputContainer } from "./components/input/inputcontainer";
import { OutputContainer } from "./components/output/output";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ControlPanel />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputContainer />
      </Grid>
      <Grid item xs={12} md={6}>
        <OutputContainer />
      </Grid>
    </Grid>
  );
}

export default App;
