import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Container from "../../components/Container/index";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

function About() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100%",
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        paddingBottom: 50,
      },
    },
    h1: {
      marginLeft: 50,
      marginTop: 50,
      color: "white",
      fontFamily: "Mukta",
    },
    image: {
      height: 450,
      borderRadius: 50,
      float: "left",
      marginRight: 50,
      marginLeft: 50,
      marginTop: 50,
    },
    about: {
      marginTop: 100,
      color: "white",
      fontSize: 20,
      fontFamily: "Mukta",
    },
    contactInfo: {
      color: "white",
      marginTop: 40,
      marginRight: 100,
      float: "left",
      fontFamily: "Mukta",
    },
    fontFamily: "Chivo",
    paper: {
      height: 670,
      paddingTop: 15,
      background: "rgba(0,0,0,.3)",
    },
  }));

  const classes = useStyles();
  const checked = true;

  return (
    <div>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Paper className={classes.paper}>
          <div>
            <h1 className={classes.h1}>
              Welcome. Thank you for checking out my work.
            </h1>

            <img
              className={classes.image}
              src="https://lh3.googleusercontent.com/pw/ACtC-3f8UlBk_doTYMrS7x07jLtCn6D2e2I7LVeKy0j1a8px4Y_iYm8163EZsBE1sqZu8R_8v1SD0rFZv1Zn6nCa0jEbAEcwu6JOExetuQX5390qPvDC1EEE_ojFmTHia-zlyw4ipcDcm-OmCSG46-M8u0L_=w675-h899-no?authuser=0"
              alt="Me, sitting"
            ></img>

            <Container>
              <div>
                <p className={classes.about}>
                  My name is Gavin O'Brien. I was born and raised in New Jersey.
                  I currently have an Associate's Degree from Bergen Community
                  college and will be attending the New Jersey Institute of
                  Technology in the Fall. I am an aspiring web developer with
                  great interest in developing apps that are equally aesthetic
                  as they are functional.
                  <br />
                  <br /> <br />
                  {/* Check out some of my applications over here:
                <IconButton>
                  <DoubleArrowIcon
                  color="primary"
                  fontSize="large"
                  >
                  </DoubleArrowIcon>
                </IconButton> */}
                </p>

                <p className={classes.contactInfo}>
                  <strong style={{ fontStyle: "italic", fontSize: 20 }}>
                    Contact me:
                  </strong>
                  <br />
                  GavinOBrien56@gmail.com
                  <br />
                  (201) 414-6122
                </p>
              </div>
            </Container>
          </div>
        </Paper>
      </Grow>
    </div>
  );
}

export default About;
