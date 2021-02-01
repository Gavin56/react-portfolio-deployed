import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Grow from "@material-ui/core/Grow";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function Contact() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    h1: {
      marginTop: 20,
    },
    paper: {
      marginTop: 30,
      width: 500,
      height: 600,
      display: "flex",
      justifyContent: "center",
    },
    textField: {
      marginTop: 50,
    },
    button: {
      marginTop: 50,
    },
    message: {
      marginTop: 50,
    },
  }));

  const classes = useStyles();
  const checked = true;

  return (
    <div>
      <Header value={2}></Header>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Container className={classes.container}>
          <Paper elevation={7} className={classes.paper}>
            <form noValidate autoComplete="off">
              <h1 className={classes.h1}>Let's have a chat.</h1>
              <Container>
                <TextField
                  className={classes.textField}
                  id="outlined-primary"
                  label="Name"
                  variant="outlined"
                  color="primary"
                  fullWidth="true"
                />
              </Container>
              <Container>
                <TextField
                  className={classes.textField}
                  id="outlined-primary"
                  label="Email"
                  variant="outlined"
                  color="primary"
                  fullWidth="true"
                />
              </Container>
              <Container>
                <TextField
                  className={classes.message}
                  id="outlined-primary"
                  label="Message"
                  variant="outlined"
                  color="primary"
                  fullWidth="true"
                  multiline="true"
                  rows="5"
                />
              </Container>
              <Container>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  Send Message
                </Button>
              </Container>
            </form>
          </Paper>
        </Container>
      </Grow>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
