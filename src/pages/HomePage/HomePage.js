import { BrandQuote } from "../../components/BrandQuote/BrandQuote";
import { GlitchTitle } from "../../components/GlitchTitle/GlitchTitle";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <GlitchTitle />
      <BrandQuote />
    </div>
  );
};
