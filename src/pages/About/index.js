import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Container from "../../components/Container/index";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

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
    },
    contactInfo: {
      color: "white",
      marginTop: 40,
      marginRight: 100,
      float: "left",
    },
    fontFamily: "Chivo",
  }));

  const classes = useStyles();
  const checked = true;

  return (
    <div>
      <Header value={0} />
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <div>
          <h1 className={classes.h1}>
            Hello, I'm Gavin. Thank you for checking out my work.
          </h1>

          <img
            className={classes.image}
            src="https://lh3.googleusercontent.com/pw/ACtC-3f8UlBk_doTYMrS7x07jLtCn6D2e2I7LVeKy0j1a8px4Y_iYm8163EZsBE1sqZu8R_8v1SD0rFZv1Zn6nCa0jEbAEcwu6JOExetuQX5390qPvDC1EEE_ojFmTHia-zlyw4ipcDcm-OmCSG46-M8u0L_=w675-h899-no?authuser=0"
            alt="Me, sitting"
          ></img>

          <Container>
            <div>
              <p className={classes.about}>
                My name is Gavin O'Brien. I was born and raised in New Jersey. I
                currently have an Associate's Degree from Bergen Community
                college and I'm currently employed at Trader Joe's while I study
                from home during the Covid-19 pandemic. I am an aspiring web
                devloper and genuinely enjoy studying the anatomy and
                functionality of computers.
                <br /> <br />
                Some of my hobbies include playing video games and board games,
                drawing, biking, hiking, and weight-training. I recently
                discovered a newfound passion in coding and now I hope to make a
                career out of web development one day.
              </p>

              <div className={classes.contactInfo}>
                <strong>Find me on social media:</strong>
                <br />
                <IconButton
                  aria-label="github"
                  href="https://github.com/Gavin56"
                  color="primary"
                >
                  <GitHubIcon></GitHubIcon>
                </IconButton>
                <br />
                  <IconButton
                    aria-label="linkedin"
                    color="primary"
                    href="https://www.linkedin.com/in/gavin-o-brien-6829a61b4/"
                  >
                    <LinkedInIcon></LinkedInIcon>
                  </IconButton>
              </div>

              <p className={classes.contactInfo}>
                <strong>Contact me directly:</strong>
                <br />
                GavinOBrien56@gmail.com
                <br />
                (201) 414-6122
              </p>
            </div>
          </Container>
        </div>
      </Grow>
      <Footer></Footer>
    </div>
  );
}

export default About;
