import { Helmet } from "react-helmet";
import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import { Layout } from "../../components/Layout/Layout";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Transition } from "./../../components/Transition/Transition";

export const Contact = () => {
  return (
    <div className="ContactPage flex-col justify-center">
      <Helmet>
        <title>Get in Touch | Fabio Sdringola - Web Developer</title>
        <meta
          name="description"
          content="Connect with Fabio, a talented web developer passionate about creating stunning and functional websites. Contact Fabio to discuss your project requirements or collaborations."
        />
        <meta
          name="keywords"
          content="web developer, web development portfolio, contact, collaboration, project requirements, online presence, get in touch, communication, website design, coding"
        />
      </Helmet>
      <Transition />
      <main className="mb-10">
        <Layout className="pt-16">
          <AnimatedText text="Contact" className="mb-16 w-full" />
          <div className="flex justify-center items-center">
            <ContactForm />
          </div>
        </Layout>
      </main>
    </div>
  );
};
