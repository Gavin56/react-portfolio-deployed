import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Container/index";
import Project from "../Project/index";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid({ projects }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={5}>
          {projects.map((project, index) => (
              <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: (500 * index) } : {})}
              >
            <Grid item xs>
              <Project project={project}></Project>
            </Grid>
            </Grow>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
