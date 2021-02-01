import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Grid from "../../components/Grid/index";
import projects from "../../utils/JSON";
import "./style.css";

function Portfolio() {
  return (
    <div>
      <Header value={1}></Header>
      <Grid projects={projects}></Grid>
      <Footer></Footer>
    </div>
  );
}

export default Portfolio;
