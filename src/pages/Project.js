import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden mt-16">
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={"R Shiny & Highcharts Demo"}
          image={"/project/rshiny-demo.jpg"}
          sub={'R Shiny, Highcharts, Cloud Engineering'}
          about={
            "I worked up this demo to show my skill in dashboard design using R Shiny and Highcharts. I published it on Google Cloud Platform. If you would like to build a beautiful and user-friendly R Shiny app, let me know!"
          }
          demo={"https://rshiny-demo-7bzbiothyq-uc.a.run.app/"}
        />
        <ProjectCard
          name={"This Page"}
          image={"/project/bcllc-homepage.jpg"}
          sub={'React, Tailwind CSS, Cloud Engineering'}
          about={
            "I built this website using React and Tailwind CSS! I also published it using Google Cloud Platform."
          }
          demo={"https://www.brycechamberlainllc.com/"}
        />
        <ProjectCard
          name={"Aware Chicago"}
          image={"/project/aware-chicago.jpg"}
          sub={'React, GIS (OpenLayers), Cloud Engineering'}
          about={
            "A public safety map that only shows crime that you might actually experience while walking in the city. It uses Cloud Run and Cloud Functions."
          }
          demo={"https://github.com/superchordate/aware-chicago/"}
        />
        <ProjectCard
          name={"ASEC Census Helper"}
          image={"/project/asec-census-helper.jpg"}
          sub={'R Shiny, Data Engineering, Cloud Engineering'}
          about={
            "Packages up over 700 fields from the Annual Social and Economic Supplement to the Current Population Survey (CPS-ASEC) data for easier use and provides an interface to quickly get the data you need. (Data Engineering, R Shiny)"
          }
          demo={"https://github.com/superchordate/ASEC-census-helper/"}
        />
        <ProjectCard
          name={"hcslim"}
          image={"/project/hcslim.jpg"}
          sub={'R Package Development, Highcharts'}
          about={
            "Minimal HTML-based functions for creating plots in accordance with the Highcharts API. (R Code for Data Visualization, R Package)"
          }
          demo={"https://github.com/superchordate/hcslim/"}
        />
        <ProjectCard
          name={"easyr"}
          image={"/project/easyr.jpg"}
          sub={'R, R Package Development'}
          about={
            "Helpful functions that make coding in R easier including, shorthand, type conversion, data wrangling, and workflow. (R Package)"
          }
          demo={"https://github.com/superchordate/hcslim/"}
        />
      </div>
    </div>
  );
}

export default Project;
