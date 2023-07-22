import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "./../../components/Layout/Layout";
import { AnimatedText } from "./../../components/AnimatedText/AnimatedText";
import { TiSocialGithub } from "react-icons/ti";
import bingewatchrImg from "../../images/projects/bingewatchr/bingewatchr.png";
import ironnotesImg from "../../images/projects/ironnotes/ironnotes.png";
import sudokuImg from "../../images/projects/sudoku/sudoku.png";
import portfolioImg from "../../images/projects/portfolio/portfolio.png";
import { Transition } from "../../components/Transition/Transition";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between 
    rounded-3xl border border-solid border-primary-800
     bg-primary-50 dark:bg-secondary-700 shadow-2xl relative rounded-br-2xl"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
       bg-primary-800 rounded-br-3xl"
      />

      <a
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto rounded-3xl" />
      </a>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-secondary-500 dark:text-primary-200 font-medium text-xl">
          {type}
        </span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </a>
        <p className="my-2 font-medium dark:text-primary-200">{summary}</p>
        <div className="mt-2 flex items-center">
          <a href={github} target="_blank">
            <TiSocialGithub className="h-20 w-20" />
          </a>
          <a
            href={link}
            target="_blank"
            className="ml-4 rounded-lg
           bg-primary-800 text-primary-50 p-2 px-6 text-lg font-semibold"
          >
            Visit the Project
          </a>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, details, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center 
  rounded-2xl border border-solid border-primary-800 bg-primary-50 dark:bg-secondary-700 p-6
  relative"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem]
   bg-primary-800 rounded-br-3xl"
      />
      <a
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto rounded-3xl" />
      </a>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-secondary-500 dark:text-primary-200 font-medium text-xl">
          {type}
        </span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </a>
        <p className="my-2 font-medium dark:text-primary-200">{details}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </a>
          <a href={github} target="_blank">
            <TiSocialGithub className="h-14 w-14" />
          </a>
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  return (
    <div className="ProjectsPage">
      <Helmet>
        <title>Projects | Fabio Sdringola - Web Developer</title>
        <meta
          name="description"
          content="Welcome to my web development portfolio! Explore a collection of my projects showcasing my skills and expertise as a web developer. From responsive designs to interactive web applications, I have worked on various projects using cutting-edge technologies. Browse through my portfolio to see my work and get in touch if you're interested in collaborating or have any inquiries."
        />
        <meta
          name="keywords"
          content="web developer, web development, portfolio, projects, responsive designs, interactive web applications, skills, expertise, cutting-edge technologies, collaboration, inquiries"
        />
      </Helmet>
      <Transition />
      <main
        className="w-full mb-16 flex flex-col 
      items-center justify-center"
      >
        <Layout className="pt-16">
          <AnimatedText text="Progress in Pixels" className="mb-16" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12 z-0">
              <FeaturedProject
                title="TV Series Browser | BingeWatchr"
                img={bingewatchrImg}
                summary="Client-server web app built using React, Node.js, MongoDB, and Mongoose. It allows users to browse, review, and rate TV shows. User authentication enables personalized experiences, and users can create their own show lists. The app supports CRUD functionalities for writing, editing, and deleting reviews, and a star-based rating system allows users to express their opinions. It integrates with an external API to provide comprehensive TV show data, including titles, genres, cast, release dates, and episode lists."
                link="https://bingewatchr.netlify.app/"
                type="Featured Project"
                github="https://github.com/BingWatchr/bingwatchr-cli"
              />
            </div>

            <div className="col-span-6 z-0">
              <Project
                title="Game | Sudoku"
                details="Vanilla JavaScript game built using HTML, CSS. It features an awesome algorithm to always generate new games at various difficulties, error counter and timer to track the user's progress."
                img={sudokuImg}
                link="https://fabiosm46.github.io/sudoku/"
                type="Project"
                github="https://github.com/FabioSM46/sudoku"
              />
            </div>

            <div className="col-span-6 z-0">
              <Project
                title="Website | My Portfolio"
                details="Personal portfolio website made using React and Tailwind CSS. The main objective of this project was to create an online platform to showcase my skills, projects, and experience."
                img={portfolioImg}
                link="https://fabiosdringola.pages.dev/"
                type="Project"
                github="https://github.com/FabioSM46/my-portfolio-cli"
              />
            </div>

            <div className="col-span-12 z-0">
              <FeaturedProject
                title="Note Taking App | Iron-Notes"
                img={ironnotesImg}
                summary="A personal note-taking web application using Express.js, Node.js, MongoDB, and Mongoose. Inspired by popular applications like Google Keep and Apple Notes, this web app provides a user-friendly interface for organizing and managing personal thoughts and information. By the use of Express.js and Node.js, We implemented a robust backend that handles user interactions and data storage. MongoDB and Mongoose were utilized as the database solutions. With full CRUD capabilities, users can easily create new notes, retrieve existing ones, update their content, and delete unwanted entries."
                link="https://iron-notes.adaptable.app/"
                type="Featured Project"
                github="https://github.com/Iron-Notes/iron-notes-mvp"
              />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};
