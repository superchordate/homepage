// https://tailwindui.com/components/marketing/sections/heroes

import { useState } from 'react'
import Section from "../components/Section";

export default function FAQ() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('hero.jpg')]">
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-56 mb-4">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight text-gray-100 sm:text-6xl poppins-regular">
              Frequently Asked Questions
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            </div>
          </div>
        </div>
      </div>
        <Section
            header="I can't share data with outside contractors. What options does that leave us, and what flexibility do you offer to ensure sensitive information stays secure?"
            p1="We can build a solution on dummy data. Saving sensitive data until production is part of a best-practice secure software development life cycle. I will carefully follow requirements from your IT team, work on hardware and networks that you provide, or even come on-site to complete a project. I have experience building enterprise solutions that are accessed over the public internet and, therefore, must meet stringent security standards, including Dynamic and Static Application Security Testing (DAST, SAST)."
        />
    </div>
  )
}
