import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Calendly from "../components/Calendly";
import ContactMe from "../components/ContactMe";

function Home() {
  return (
    <div>
      <Hero />
      <Section
        p1="
          Bryce is an independent analytics contractor working with startups, individuals, and small teams. 
          He is a credentialed actuary with over 12 years of experience and a master's degree in applied data science.
          Before going independent, he was a Principal Consultant at Oliver Wyman, leading a team of 5 developers and supporting over $5 million in annual revenue.
        "
      />
      <Section
        p1="
          Bryce will work to understand your goals and technical ecosystem, research the available tools and latest methodologies, 
          and then leverage his comprehensive experience to develop a bespoke solution that fits nicely into your existing workflows.
        "
      />
      <ContactMe/>
      <Calendly/>
    </div>
  );
}

export default Home;
