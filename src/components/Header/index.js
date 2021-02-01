import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";

// function Header(props) {
  // const { children, value, index, ...other } = props;

  // return (
    // <div
    //   role="tabpanel"
    //   hidden={value !== index}
    //   id={`full-width-tabpanel-${index}`}
    //   aria-labelledby={`full-width-tab-${index}`}
    //   {...other}
    // >
      {/* {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )} */}
    // </div>
//   );
// }

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     background: "#230a2b",
//   },
// }));

export default function FullWidthTabs({value}) {

  return (
      <AppBar className="appBar" position="static" color="default">
        <Tabs
          value={value}
          // onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="centered"
          aria-label="full width tabs example"
        >
          <Tab href="/" label="About" {...a11yProps(0)} />
          <Tab href="https://gavin56.github.io/react-portfolio-deployed/portfolio" label="Portfolio" {...a11yProps(1)} />
          <Tab href="https://gavin56.github.io/react-portfolio-deployed/contact" label="Contact" {...a11yProps(2)} />
        </Tabs>
      </AppBar> 
  );
}

// <Container>
// <SwipeableViews
//   axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//   index={value}
//   onChangeIndex={handleChangeIndex}
// >
//   <Header value={value} index={0} dir={theme.direction}>
//     {/* Summon page here */}
//   </Header>
//   <Header value={value} index={1} dir={theme.direction}>
//     Portfolio
//     {/* Summon page here */}
//     <Project projects={projects}></Project>
//   </Header>
//   <Header value={value} index={2} dir={theme.direction}>
//     Contact
//     {/* Summon page here */}
//   </Header>
// </SwipeableViews>
// </Container>