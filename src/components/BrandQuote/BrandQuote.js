import "./BrandQuote.css";
import { useState } from "react";
import Typewriter from "typewriter-effect";
export const BrandQuote = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="BrandQuote font-caveat">
      <section
        className={`text-lg mt-24 ${
          isZoomed ? "animate-zoom" : ""
        } text-primary-300`}
      >
        <Typewriter
          options={{
            delay: 80,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Fueled by a strong passion for technology, I specialize in transforming complex ideas into smooth and user-friendly websites that empower businesses to succeed in the digital world."
              )
              .start()
              .callFunction(() => {
                setIsZoomed(true);
              });
          }}
        />
      </section>
    </div>
  );
};
