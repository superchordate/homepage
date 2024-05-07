import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Calendly from "../components/Calendly";

function Home() {
  return (
    <div>
      <Hero />
      <Section
        header="Your New Secret Weapon"
        p1="You know what your business needs to thrive, but finding the resources to bridge those gaps and outpace your competitors can feel impossible. Between hiring freezes and layoffs, it's easy to slip into survival mode, focusing on keeping the lights on rather than pushing boundaries and innovating. But the status quo isn't an option if you want to stay ahead. That's where a trusted partner comes in—who understands your vision, anticipates your needs, and has the expertise and capacity to bring it to life swiftly, without compromising on quality or cutting corners."
      />
      <Section
        header="Bespoke is Better"
        p1="Off-the-shelf solutions work well for basic needs, but often fall short of addressing the intricate and individualized challenges that businesses face. You end up with too little of what you need and too much of what you don't. Here's a secret that industry giants like Microsoft and Salesforce might not want you to know: custom-built tools tailored precisely to your requirements can be developed at a comparable cost to off-the-shelf software. By investing in solutions crafted specifically for your unique business ecosystem, you unlock the potential for streamlined processes, enhanced efficiency, and a competitive edge in your market."
      />
      <Section
        header="Put Experience To Work For Your Business"
        p1="Elevate your business now by transforming those long-cherished ideas from concepts into tangible assets. Working with Bryce, you're not just tapping into a wealth of experience but embarking on a journey towards innovation and growth. With a track record of developing custom analytical solutions at scale, Bryce's tenure as a Principal Consultant at Oliver Wyman underscores his ability to deliver tailored solutions that meet the demands of even the most discerning clients. Spearheading the creation of a custom analytics platform supporting over 100 R Shiny applications, Bryce has demonstrated a mastery of both web and data technologies, blending skills in HTML, JavaScript, CSS, React, R Shiny, Highcharts, and Google Cloud Platform, as well as in R, Python, SQL, and Spark, with a proven ability to quickly learn and implement new technology."
        p2="As an Associate of the Society of Actuaries (ASA) and a Master of Science in Applied Data Science (MS-ADS) from the University of Chicago, Bryce brings a unique blend of analytical rigor, strategic insight, and professionalism to every project. Recognized for his excellence with a 'Best in Show' award for his capstone project, Bryce's expertise spans the gamut of data science methods, from exploratory data analysis to the seamless integration of models into production environments. With Bryce on your team, you're not just gaining a consultant and developer - you're partnering with a professional committed to transforming your business with innovative and tailored solutions."
      />
      <Calendly/>
    </div>
  );
}

export default Home;
