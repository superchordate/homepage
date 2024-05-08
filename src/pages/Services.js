// https://tailwindui.com/components/marketing/sections/heroes

import { useState } from 'react'
import Section from "../components/Section";

export default function Services() {

  return (
    <div className="bg-white mt-32">
        <Section
            header="Custom Business Intelligence"
            p1="Discover the difference a custom solution can make for your business. 
            I've built and led a team supporting over a hundred R Shiny applications, giving me a deep understanding of this technology. 
            I've also gained valuable experience with React and Streamlit/Dash (Python). 
            With a custom solution, you not only increase your chances of success but may also find it a more cost-effective option than off-the-shelf alternatives like Power BI or Tableau. 
            Let's discuss how I can tailor a solution to your needs and goals."
        />
        <Section
            header="R/Python Coding & Automation"
            p1="I bring a wealth of expertise to the table, serving as the main contributor to the easyr package—a testament to my deep understanding of R and my knack for optimizing code to run efficiently. 
            But my skills extend far beyond R—I've dabbled in Python, SAS, Java, VBA, and beyond. Whether it's streamlining code, automating manual processes, 
            or seamlessly integrating into your existing projects, I'm your go-to guru. 
            Let's supercharge your development efforts and unleash the full potential of your projects together."
        />
        <Section
            header="Data Science"
            p1="Ever feel like your open-ended data science projects have a mind of their own, spiraling beyond the initial scope? Not anymore. 
            My approach is simple yet effective: start with a clear, achievable goal and methodically work towards it. 
            Drawing from my background as an actuary, precision, and value are at the forefront of everything I do. 
            Whether you're grappling with a complex problem or drowning in data, I'm here to bridge the gap and provide solutions that make sense. 
            Let's turn your challenges into opportunities."
        />
        <Section
            header="Expert Support & Leadership"
            p1="HHave you ever felt the frustration of watching a problem linger for hours, only to be swiftly solved by an expert in minutes? 
            The stark contrast in efficiency can be jarring, especially when racing against the clock. 
            That's where I come in—I offer just-in-time expertise and mentorship, ensuring you have the support of an expert precisely when you need it. 
            And that you aren't paying for it when you don't. With my guidance, you can confidently make entry-level hires, knowing expert assistance is readily available to tackle any challenges. 
            And that's not all—I bring team-building expertise to the table, helping you cultivate a skilled and cohesive team poised for success."
        />
    </div>
  )
}
