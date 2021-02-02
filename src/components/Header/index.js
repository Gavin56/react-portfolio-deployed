import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Home from "../../pages/Home/index";
import Portfolio from "../../pages/Portfolio/index";
import Contact from "../../pages/Contact/index";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import "bootstrap/dist/css/bootstrap.min.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  tab: {
    color: "white",
  },
  nav: {
    marginLeft: "30%",
    marginTop: 10,
    color: "white",
    fontFamily: "Montserrat Alternates",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <AppBar
        style={{ background: "transparent" }}
        elevation={0}
        position="static"
        color="default"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab className={classes.tab} label="Home" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Portfolio" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Contact" {...a11yProps(2)} />

          <div className={classes.nav}>
            <h1 style={{float:"left"}}>Gavin O'Brien</h1>

            <div style={{float:"left", marginLeft:50}}>
              <IconButton
                aria-label="github"
                href="https://github.com/Gavin56"
                color="primary"
              >
                <GitHubIcon></GitHubIcon>
              </IconButton>

              <IconButton
                aria-label="linkedin"
                color="primary"
                href="https://www.linkedin.com/in/gavin-o-brien-6829a61b4/"
              >
                <LinkedInIcon></LinkedInIcon>
              </IconButton>
            </div>
          </div>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Home></Home>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Portfolio></Portfolio>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Contact></Contact>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
