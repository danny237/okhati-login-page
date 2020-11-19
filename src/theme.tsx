import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009653",
    },
    secondary: {
      main: green[500],
    },
  },
  typography:{
      fontFamily: "Hind"
  }
});

export default theme;