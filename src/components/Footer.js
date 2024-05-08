import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex items-center justify-evenly bg-gray-400 text-white flex-wrap px-3 py-4">
      <span className="flex items-center justify-center gap-7 m-2">
        <p>
          Big thanks to&nbsp; 
          <a className="text-white underline"
            href="https://github.com/riteshk-007/"
            target="_blank"
            rel="noreferrer"
          >
          Ritesh 
          </a>
          &nbsp;for sharing this web template.
        </p>
        <a
          href="https://github.com/superchordate/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/brycechamberlain/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaLinkedinIn />
        </a>
      </span>
    </div>
  );
}

export default Footer;
