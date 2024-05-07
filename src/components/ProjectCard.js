import React from "react";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard({ name, about, image, demo }) {
  return (
    <section className="text-gray-800 body-font rounded-lg">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="project"
            src={image}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800 poppins-semibold">
            {name}
          </h1>
          <p className="mb-8 leading-relaxed lg:pr-28 open-sans-bc">{about}</p>
          <div className="flex justify-center">
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer">
                <button className="inline-flex text-white bg-gray-400 border-0 py-2 px-5 focus:outline-none font-medium items-center justify-center gap-1 hover:bg-purple-500  rounded text-lg">
                  Check It Out <BiLinkExternal />
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
