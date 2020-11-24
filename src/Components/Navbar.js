import React, { useContext } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import navStyle from '../Theme/Nav.module.css';
import { LoginContext } from '../App';

export default function Navbar() {

    const { loginStatus, setLoginStatus } = useContext(LoginContext)

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={navStyle.toolbar}>
          <Typography variant="h6">
            Okhati
          </Typography>
            {
                loginStatus && <Button onClick={() => setLoginStatus(false)} color="inherit">LogOut</Button>
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}
