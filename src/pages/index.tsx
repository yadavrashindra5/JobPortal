import About from "../../components/About";
import Footer from "../../components/Footer";
import JobCategories from "../../components/JobCategories";
import JobDescriptionCard from "../../components/JobDescriptionCard";
import JobFeatures from "../../components/JobFeatures";
import JobProcess from "../../components/JobProcess";

const Home = () => {
  return (
    <div>
      <About />
      <JobFeatures />
      <JobCategories />
      <JobProcess/>
      <Footer />
    </div>
  );
};
export default Home;
