import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import ProblemSolution from "../components/sections/ProblemSolution";
import DffWorks from "../components/sections/DffWorks";
import ModulesGrid from "../components/sections/ModulesGrid";
// import MartPreview from "../components/sections/MartPreview";
import Transparency from "../components/sections/Transparency";
import AiLayer from "../components/sections/AiLayer";
import CallToAction from "../components/sections/CallToAction";

const LandingPage = () => {
    return (
        <Layout>
            <Hero />
            <ProblemSolution />
            <DffWorks />
            <ModulesGrid />
            {/* <MartPreview /> */}
            <Transparency />
            <AiLayer />
            <CallToAction />
        </Layout>
    );
};

export default LandingPage;
