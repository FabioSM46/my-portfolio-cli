import "./Footer.css";
import { Layout } from "./../Layout/Layout";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
export const Footer = () => {
  return (
    <footer className="Footer flex justify-center items-center">
      <Layout
        className="footer-layout p-2 flex 
      items-center flex-wrap gap-6"
      >
        <div
          className="footer-copyright flex 
        items-center text-primary-400"
        >
          <span> {new Date().getFullYear()} &copy;All Rights Reserved.</span>
        </div>{" "}
        <div
          className="footer-credits flex 
        items-center text-primary-400"
        >
          Build With
          <span
            className="text-secondary-400 
          text-2xl px-1"
          >
            &#9825;
          </span>
          &nbsp;by&nbsp;
          <span
            className="underline underline-offset-2
           text-secondary-400"
          >
            Fabio Sdringola Maranga
          </span>
        </div>
        <div className="flex items-center gap-2 text-yellow-400">
          <a href="https://www.facebook.com/fopea46/" target="_blank">
            <FooterIcon icon={<TiSocialFacebook size={"30"} />} text="" />
          </a>
          <a href="https://www.instagram.com/fopea46/" target="_blank">
            <FooterIcon icon={<TiSocialInstagram size={"30"} />} text="" />
          </a>
          <a href="https://github.com/FabioSM46" target="_blank">
            <FooterIcon icon={<TiSocialGithub size={"30"} />} text="" />
          </a>
          <a
            href="https://www.linkedin.com/in/fabio-sdringola-maranga/"
            target="_blank"
          >
            <FooterIcon icon={<TiSocialLinkedin size={"30"} />} text="" />
          </a>
          <a href="https://twitter.com/fopea46" target="_blank">
            <FooterIcon icon={<TiSocialTwitter size={"30"} />} text="" />
          </a>
        </div>
      </Layout>
    </footer>
  );
};

const FooterIcon = ({ icon, text }) => (
  <div className="footer-icon group">
    {icon}
    <span className="footer-tooltip group-hover:scale-100">{text}</span>
  </div>
);
