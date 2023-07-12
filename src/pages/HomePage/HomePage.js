import "./HomePage.css";
import baffle from "baffle";
import { useState } from "react";
export const HomePage = () => {
  const [isExectuing, setIsExectuing] = useState(false);
  const reset = () => {
    setIsExectuing(false);
  };
  const handleMouseOver = () => {
    if (!isExectuing) {
      setIsExectuing(true);
      const text = baffle(".textToGlitch");
      text
        .start()
        .set({
          characters: "█▓▒░█▓▒░█▓▒░",
          speed: 120,
        })
        .reveal(4000);
      setTimeout(reset, 4500);
    }
  };

  return (
    <div className="HomePage">
      <section className="glitchSection">
        <h1
          className="textToGlitch text-teal-900 lg:text-9xl md:text-8xl sm:text-7xl text-4xl"
          onMouseOver={handleMouseOver}
        >
          <span>Welcome,</span> <span>I am Fabio</span>
        </h1>
      </section>
    </div>
  );
};
