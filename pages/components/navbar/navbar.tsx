import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./navbar.module.scss";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

let props = {
  darkState: Boolean,
  handleThemeChange: Function,
};

const ButtonAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6">Home</Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Education</Button>
          <Button color="inherit">Work</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Blog</Button>
          <ToggleButton
            value="check"
            selected={props.handleThemeChange}
            onChange={() => {
              props.onChange();
            }}
          >
            <CheckIcon />
          </ToggleButton>

          {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ButtonAppBar;
