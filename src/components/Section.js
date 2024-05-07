import React from "react";

function Section({header, p1, p2}) {
  return (
    <div className="mb-10">
      <div className="text-center">
        <h1 className="text-gray-800 text-4xl mb-5 poppins-semibold">
          {header}
        </h1>
        <div className="text-left m-auto lg:w-1/2 w-3/4 text-gray-800 text-md open-sans-bc">
            <p className="mb-4">
              {p1}
            </p><p className="mb-4">
              {p2}
            </p>
        </div>
      </div>
    </div>
  );
}

export default Section;
