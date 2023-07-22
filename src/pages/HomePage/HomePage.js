import "./HomePage.css";
import { TiMail, TiBusinessCard } from "react-icons/ti";
import { Layout } from "../../components/Layout/Layout";
import profilePic from "../../images/profile/profile.png";
import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import Resume from "../../pdf/Resume.pdf";
import { Helmet } from "react-helmet";
import { Transition } from "../../components/Transition/Transition";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Helmet>
        <title>Home | Fabio Sdringola - Web Developer</title>
        <meta
          name="description"
          content="Welcome to Fabio Sdringola's web developer portfolio. Explore a collection of my projects and discover how I create exceptional web experiences. With expertise in front-end and back-end development and a passion for user-centered design, I specialize in crafting visually stunning and highly functional websites. Take a look at my work and let's collaborate on bringing your digital vision to life."
        />
        <meta
          name="keywords"
          content="web developer, portfolio, front-end development, back-end development, user-centered design, web experiences, projects, visual design, functional websites, collaboration, digital vision"
        />
      </Helmet>
      <Transition />
      <Layout className="pt-16">
        <div className={`home-page-container flex items-center justify-center`}>
          <div className="profile-container">
            <img className="profile-image" src={profilePic} alt="profile" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <AnimatedText
              text="Welcome, I Am Fabio. Your Web Dev."
              className="py-2"
            />
            <p className="font-perm-marker py-2 xl:text-xl lg:text-lg md:text-md sm:text-base text-base text-primary-800 dark:text-primary-200 text-center break-normal max-w-2xl">
              Fueled by a strong passion for technology, I specialize in
              transforming complex ideas into smooth and user-friendly websites
              that empower businesses to succeed in the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={Resume} target="_blank">
                <ButtonLeft
                  icon={<TiBusinessCard className="icon" />}
                  text="Resume"
                />
              </a>
              <a href="mailto:fabio.sdringola@gmail.com" target="_blank">
                <ButtonRight
                  icon={<TiMail className="icon" />}
                  text="Contact"
                />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

const ButtonRight = ({ icon, text }) => (
  <div className="button-right group">
    {icon}
    <span className="button-tooltip-right group-hover:scale-100">{text}</span>
  </div>
);
const ButtonLeft = ({ icon, text }) => (
  <div className="button-left group">
    {icon}
    <span className="button-tooltip-left group-hover:scale-100">{text}</span>
  </div>
);
