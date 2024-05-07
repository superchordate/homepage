import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden mt-16">
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={"Aware Chicago"}
          image={"/project/img1.png"}
          about={
            "A public safety map that only shows crime that you might actually experience while walking in the city. (React, OpenLayers)"
          }
          demo={"https://github.com/superchordate/aware-chicago/"}
        />
        <ProjectCard
          name={"ASEC Census Helper"}
          image={"/project/img2.png"}
          about={
            "Packages up over 700 fields from the Annual Social and Economic Supplement to the Current Population Survey (CPS-ASEC) data for easier use and provides an interface to quickly get the data you need. (Data Engineering, R Shiny)"
          }
          demo={"https://github.com/superchordate/ASEC-census-helper/"}
        />
        <ProjectCard
          name={"hcslim"}
          image={"/project/img3.png"}
          about={
            "Minimal HTML-based functions for creating plots in accordance with the Highcharts API. (R Code for Data Visualization, R Package)"
          }
          demo={"https://github.com/superchordate/hcslim/"}
        />
        <ProjectCard
          name={"easyr"}
          image={"/project/img4.png"}
          about={
            "Helpful functions that make coding in R easier including shorthand, type conversion, data wrangling, and workflow. (R Package)"
          }
          demo={"https://github.com/superchordate/hcslim/"}
        />
      </div>
    </div>
  );
}

export default Project;
