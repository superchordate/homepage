import React from "react";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden mt-16">
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={"This Page"}
          image={"/portfolio/bcllc-homepage.jpg"}
          sub={'React, Tailwind CSS, Cloud Engineering'}
          about={
            "I built this website using React and Tailwind CSS, and published it using Google Cloud Platform's serverless Cloud Run to reduce cost to only a few dollars a month."
          }
          demo={"https://www.brycechamberlainllc.com/"}
        />
        <ProjectCard
          name={"R Shiny & Highcharts Demo"}
          image={"/portfolio/rshiny-demo.jpg"}
          sub={'R Shiny, Highcharts, Cloud Engineering'}
          about={
            "I worked up this demo to show my skill in dashboard design using R Shiny and Highcharts. I published it on Google Cloud Platform. If you would like to build a beautiful and user-friendly data app, let me know!"
          }
          demo={"https://rshiny-demo-7bzbiothyq-uc.a.run.app/"}
        />
        <ProjectCard
          name={"Kaggle Competition"}
          image={"/portfolio/kaggle-belka.jpg"}
          sub={'Python, Pytorch, Polars, Data Science'}
          about={
            "I've shared this repo to show some of my work in the data science realm. It'll give you an idea of what my Python code is like and how I approach machine learning problems."
          }
          demo={"https://github.com/superchordate/kaggle-2024-belka/"}
        />
        {/* <ProjectCard
          name={"Aware Chicago"}
          image={"/portfolio/aware-chicago.jpg"}
          sub={'React, GIS (OpenLayers), Cloud Engineering'}
          about={
            "This is a public safety map that only shows crime that you might actually experience while walking in the city (recent, similar hour, weekday vs weekend, outdoors, etc.). I built it using data from the Chicago Data Portal. It uses Cloud Run and Cloud Functions."
          }
          demo={"https://github.com/superchordate/aware-chicago/"}
        /> */}
        <ProjectCard
          name={"ASEC Census Helper"}
          image={"/portfolio/asec-census-helper.jpg"}
          sub={'R Shiny, Data Engineering, Cloud Engineering'}
          about={
            "This project packages over 700 fields from the Annual Social and Economic Supplement to the Current Population Survey (CPS-ASEC) for easier use and provides an R Shiny interface to quickly get the data you need."
          }
          demo={"https://github.com/superchordate/ASEC-census-helper/"}
        />
        <ProjectCard
          name={"hcslim"}
          image={"/portfolio/hcslim.jpg"}
          sub={'R Package Development, Highcharts'}
          about={
            "A streamlined and flexible package for creating plots using the Highcharts API."
          }
          demo={"https://github.com/superchordate/hcslim/"}
        />
        <ProjectCard
          name={"easyr"}
          image={"/portfolio/easyr.jpg"}
          sub={'R, R Package Development'}
          about={
            "Helpful functions that make coding in R easier"
          }
          demo={"https://github.com/superchordate/hcslim/"}
        />
      </div>
    </div>
  );
}

export default Portfolio;
