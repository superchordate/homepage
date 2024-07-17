import React from "react";
import ProjectCard from "../components/ProjectCard";

function Media() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden mt-16">
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={"Easier Highcharting with Hcslim"}
          image={"/media/hcslim-pres-thumb.png"}
          about={
            "I introduce my Highcharts R wrapper and R package, hcslim, during the 2022 Appsilon R Shiny Conference."
          }
          demo={"https://youtu.be/wDGEdiyDKac?si=d2DjJ5a3VgApemms"}
        />
        <ProjectCard
          name={"Data Visualization in Business Communication"}
          image={"/media/dataviz-thumb.png"}
          about={
            "A repository I maintain for sharing Data Visualization knowledge and resources. It contains a presentation that I've given at the Risk Management Society Riskworld (RIMS), Gamma Iota Sigma (GIS), and International Association of Black Actuaries (IABA) conferences."
          }
          demo={"https://github.com/superchordate/data-viz-talk/"}
        />
        <ProjectCard
          name={"Git Guide"}
          image={"/media/gitguide-thumb.png"}
          about={
            "I wrote a guide for the Casualty Actuarial Society (CAS) to help actuaries learn to use Git."
          }
          demo={"https://github.com/casact/meta/blob/master/git-guide/git-guide.md"}
        />
        <ProjectCard
          name={"Learners to Leaders"}
          image={"/media/l2l-thumb.png"}
          about={
            "A framework for ensuring consistent employee growth and learning that I developed and implemented at Oliver Wyman."
          }
          demo={"https://medium.com/@superchordate/learners-to-leaders-a-novel-framework-for-staffing-and-development-6e9b40c89b16"}
        />
        <ProjectCard
          name={"The Open-Source Approach to Collaboration"}
          image={"/media/opensource-thumb.png"}
          about={
            "An article I wrote for Contingencies magazine (American Academy of Actuaries) about the benefits of Git."
          }
          demo={"https://contingencies.org/the-open-source-approach-to-collaboration/"}
        />
      </div>
    </div>
  );
}

export default Media;
