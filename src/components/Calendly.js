import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="relative bottom-8">
      <InlineWidget url="https://calendly.com/bryce-chamberlain/free-consultation" styles={{height: '950px'}}/>
    </div>
  );
};

export default Calendly;