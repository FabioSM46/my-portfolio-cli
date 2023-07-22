import profilePic from "../../images/profile/profile-pic.png";
import { Helmet } from "react-helmet";
import { Layout } from "./../../components/Layout/Layout";
import { AnimatedText } from "./../../components/AnimatedText/AnimatedText";
import { Skills } from "../../components/Skills/Skills";
import { Experience } from "../../components/Experience/Experience";
import { Education } from "./../../components/Education/Education";
import { Transition } from "../../components/Transition/Transition";
export const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Helmet>
        <title>About | Fabio Sdringola - Web Developer</title>
        <meta
          name="description"
          content="Experienced web developer passionate about creating engaging and user-friendly websites. Specializing in front-end development and proficient in HTML, CSS, and JavaScript."
        />
        <meta
          name="keywords"
          content="web developer, front-end development, HTML, CSS, JavaScript, user-friendly websites, engaging websites"
        />
      </Helmet>
      <Transition />
      <main
        className="felx w-full flex-col items-center 
      justify-center"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Fueling Passion in Every Line of Code"
            className="mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div
              className="col-span-4 flex flex-col items-start
             justify-start"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-primary-800/75 dark:text-primary-900/75">
                About Me
              </h2>

              <p className="text-primary-600 dark:text-primary-300 font-medium break-word">
                Hello, I'm Fabio, a passionate Full Stack Web Developer with a
                unique background in Radiology Technology and practical
                experience in the field, which has sharpened my attention to
                detail and problem-solving skills.
              </p>
              <p className="my-4 text-primary-600 dark:text-primary-300 font-medium break-word">
                My journey into web development began with the intensive
                Ironhack Web Development Bootcamp. During the bootcamp, I
                immersed myself in learning and mastering the MERN stack.
              </p>
              <p className="text-primary-600 dark:text-primary-300 font-medium break-word">
                Through the bootcamp, I gained the skills to create dynamic and
                interactive web applications. This experience has fueled my
                passion for web development and equipped me with the necessary
                tools to tackle various challenges in the field.
              </p>
            </div>
            <div
              className="col-span-4 relative h-max max-w-[450px] 
              min-w-[300px] rounded-2xl border-2 border-solid
             border-primary-800 bg-primary-50 dark:bg-primary-800 p-8"
            >
              <div
                className="absolute top-0 -right-5
              w-[103%] h-[103%] rounded-[2rem]
               bg-primary-800 -z-10"
              />
              <img
                className="w-full h-auto rounded-2xl"
                src={profilePic}
                alt="Fabio"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </div>
  );
};
