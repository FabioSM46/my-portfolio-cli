import "./AboutPage.css";
import { Reveal } from "./../../components/Reveal/Reveal";

export const AboutPage = () => {
  const hOneStyle = "lg:text-8xl md:text-7xl sm:text-6xl text-4xl";
  const pStyle = "lg:text-4xl md:text-3xl sm:text-2xl text-xl";
  const sectionStyle = "snapSection";

  return (
    <div className="AboutPage container font-ubuntu-mono text-primary-300 mt-56">
      <Reveal>
        <section className={sectionStyle}>
          <h1 className={hOneStyle}>section one</h1>
          <br />
          <p className={pStyle}>
            Hello I am Fabio! I am a passionate Full Stack Web Developer with a
            unique background in Radiology Technology. With a degree in
            Radiology Technology and four years of practical experience in the
            field, I have honed my attention to detail and problem-solving
            skills, which seamlessly translate into my work as a developer.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className={sectionStyle}>
          <h1 className={hOneStyle}>section two</h1>
          <br />
          <p className={pStyle}>
            My journey into the world of web development began when I completed
            the intensive Ironhack Web Development Bootcamp. There, I immersed
            myself in the MERN stack (MongoDB, Express.js, React.js, and
            Node.js), mastering the tools and technologies necessary to create
            dynamic and interactive web applications.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className={sectionStyle}>
          <h1 className={hOneStyle}>section three</h1>
          <br />
          <p className={pStyle}>
            Combining my technical expertise and previous experience as a
            radiology technologist, I bring a multidisciplinary approach to my
            development projects. I strive to create user-friendly applications
            that not only meet functional requirements but also provide an
            intuitive and seamless experience for end-users.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className={sectionStyle}>
          <h1 className={hOneStyle}>section four</h1>
          <br />
          <p className={pStyle}>
            Throughout my career transition, I have developed a deep passion for
            coding, problem-solving, and continuously learning about emerging
            technologies in the ever-evolving field of web development. I thrive
            in collaborative environments and value teamwork, as I believe it
            leads to innovative and efficient solutions.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className={sectionStyle}>
          <h1 className={hOneStyle}>section five</h1>
          <br />
          <p className={pStyle}>
            I am excited to embark on this new chapter of my career and look
            forward to connecting with like-minded professionals, potential
            clients, and collaborators. If you have a project in mind or would
            simply like to chat, feel free to reach out. Let's bring your ideas
            to life together!
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className={sectionStyle}>
          <h1 className={hOneStyle}>section six</h1>
          <br />
          <p className={pStyle}>
            Thank you for visiting my portfolio website. I hope you enjoy
            exploring my work, and I look forward to connecting with you soon.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className={sectionStyle}>
          <p className={pStyle}>
            Sincerely, <br /> Fabio Sdringola Maranga
          </p>
        </section>
      </Reveal>
    </div>
  );
};
