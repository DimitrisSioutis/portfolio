import React, { useEffect, useState } from "react";

const Scrollbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollPercentage(scrollPercent);
    };

    handleScroll(); // Calculate initial height
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-[4px] h-screen fixed top-0 right-0">
      <div 
        className="bg-teal-500 w-full transition-all duration-75 ease-out rounded"
        style={{ height: `${scrollPercentage}%`, transition: '0.1s height ease-in' }}
      ></div>
    </div>
  );
};

export default Scrollbar;