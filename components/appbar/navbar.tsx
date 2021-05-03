import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./navbar.module.scss";
import { useRouter } from "next/router";

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

const ButtonAppBar = (props) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" onClick={() => router.push("/")}>
            Home
          </Typography>
          <Button color="inherit" onClick={() => router.push("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => router.push("/education")}>
            Education
          </Button>
          <Button color="inherit" onClick={() => router.push("/work")}>
            Work
          </Button>
          <Button color="inherit" onClick={() => router.push("/projects")}>
            Projects
          </Button>
          <Button color="inherit" onClick={() => router.push("/blog")}>
            Blog
          </Button>
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
