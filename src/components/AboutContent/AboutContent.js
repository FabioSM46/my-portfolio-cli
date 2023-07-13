import "./AboutContent.css";
export const AboutContent = () => {
  const pStyle = "lg:text-lg md:text-base sm:text-sm text-xs";
  return (
    <div className="AboutContent">
      <section className="aboutSection">
        <h1>About Me</h1>
        <br />
        <section className="sectionOne">
          <h2>section one</h2>
          <p className={pStyle}>
            Hello I am Fabio! I am a passionate Full Stack Web Developer with a
            unique background in Radiology Technology. With a degree in
            Radiology Technology and four years of practical experience in the
            field, I have honed my attention to detail and problem-solving
            skills, which seamlessly translate into my work as a developer.
          </p>
        </section>
        <br />
        <section className="sectionTwo">
          <h2>section two</h2>
          <p className={pStyle}>
            My journey into the world of web development began when I completed
            the intensive Ironhack Web Development Bootcamp. There, I immersed
            myself in the MERN stack (MongoDB, Express.js, React.js, and
            Node.js), mastering the tools and technologies necessary to create
            dynamic and interactive web applications.
          </p>
        </section>
        <br />
        <section className="sectionThree">
          <h2>section three</h2>
          <p className={pStyle}>
            Combining my technical expertise and previous experience as a
            radiology technologist, I bring a multidisciplinary approach to my
            development projects. I strive to create user-friendly applications
            that not only meet functional requirements but also provide an
            intuitive and seamless experience for end-users.
          </p>
        </section>
        <br />
        <section className="section four">
          <h2>section four</h2>
          <p className={pStyle}>
            Throughout my career transition, I have developed a deep passion for
            coding, problem-solving, and continuously learning about emerging
            technologies in the ever-evolving field of web development. I thrive
            in collaborative environments and value teamwork, as I believe it
            leads to innovative and efficient solutions.
          </p>
        </section>
        <br />
        <section className="sectionFive">
          <h2>section five</h2>
          <p className={pStyle}>
            I am excited to embark on this new chapter of my career and look
            forward to connecting with like-minded professionals, potential
            clients, and collaborators. If you have a project in mind or would
            simply like to chat, feel free to reach out. Let's bring your ideas
            to life together!
          </p>
        </section>
        <br />
        <section className="sectionSix">
          <h2>section six</h2>
          <p className={pStyle}>
            Thank you for visiting my portfolio website. I hope you enjoy
            exploring my work, and I look forward to connecting with you soon.
          </p>
        </section>
        <br />
        <section className="sectionSeven">
          <p className={pStyle}>
            Sincerely, <br /> Fabio Sdringola Maranga
          </p>
        </section>
      </section>
    </div>
  );
};
