import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BiDownload } from "react-icons/bi";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col relative">
      <a
        href={"Bryce Chamberlain - Expert Analytics Support.pdf"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center z-20 justify-center gap-3 px-6 py-2 rounded  shadow-md text-white bg-gray-400 transition duration-300 ease-in-out my-3"
      >
        <BiDownload fontSize={20} /> Download
      </a>
      <div className="py-[50px] justify-center flex items-center overflow-hidden z-20">
        <Document
          file="Bryce Chamberlain - Expert Analytics Support.pdf"
          className="flex justify-center shadow-md border-2 border-color-gray-400"
        >
          <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
      <a
        href={"Bryce Chamberlain - Expert Analytics Support.pdf"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center z-20 justify-center gap-3 px-6 py-2 rounded  shadow-md text-white bg-gray-400 transition duration-300 ease-in-out my-3"
      >
        <BiDownload fontSize={20} /> Download
      </a>
    </div>
  );
}

export default Resume;
