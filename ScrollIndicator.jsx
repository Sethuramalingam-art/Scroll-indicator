import React, { useEffect } from "react";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = React.useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", () => updateScrollPercentage());

    return () => {
      window.removeEventListener("scroll", () => updateScrollPercentage());
    };
  }, []);
  return (
    <div className={"header"}>
      <h1>Scroll Indicator</h1>
      <div className={"progressContainer"}>
        {/* Update the width in percentage */}
        <div
          className={"progressBar"}
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
