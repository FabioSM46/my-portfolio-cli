import "./GlitchTitle.css";
import baffle from "baffle";
import { useState } from "react";
export const GlitchTitle = () => {
  const [isExectuing, setIsExectuing] = useState(false);
  const [status, setStatus] = useState(false);
  const reset = () => {
    setIsExectuing(false);
  };
  const handleMouseOver = () => {
    if (!isExectuing) {
      setIsExectuing(true);

      const text1 = baffle(".textToGlitch1");
      const text2 = baffle(".textToGlitch2");
      text1
        .start()
        .set({
          characters: "█▓▒░█▓▒░█▓▒░",
          speed: 120,
        })
        .reveal(4000);

      !status ? text1.text((text) => "I am") : text1.text((text) => "Welcome,");

      text2
        .start()
        .set({
          characters: "█▓▒░█▓▒░█▓▒░",
          speed: 120,
        })
        .reveal(4000);
      !status
        ? text2.text((text) => "a Web Dev")
        : text2.text((text) => "I am Fabio");
      status ? setStatus(false) : setStatus(true);
      setTimeout(reset, 4500);
    }
  };

  return (
    <div className="GlitchTitle  font-ubuntu-mono">
      <section className="glitchSection flex flex-col">
        <p
          className="textToGlitch1 text-teal-700 lg:text-9xl md:text-8xl sm:text-7xl text-4xl"
          onMouseOver={handleMouseOver}
        >
          Welcome,
        </p>
        <p
          className="textToGlitch2 text-teal-700 lg:text-9xl md:text-8xl sm:text-7xl text-4xl"
          onMouseOver={handleMouseOver}
        >
          I am Fabio
        </p>
      </section>
    </div>
  );
};
