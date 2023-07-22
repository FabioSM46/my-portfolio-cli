import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "./../LiIcon/LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          <span className="text-secondary-400">{type}</span>
          &nbsp;
        </h3>
        <span className="capitalize ">
          {time} | {place}
        </span>
        <p className="w-full text-primary-600 dark:text-primary-200 break-word">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

export const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center text-primary-800 dark:text-primary-200">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full origin-top bg-primary-800"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Web Development Bootcamp"
            time="May-June 2023"
            place="at Ironhack"
            info="The Web Developer Bootcamp at Ironhack is an intensive program that covers front-end and back-end development, using languages like HTML, CSS, JavaScript, Node.js, and frameworks like React and Express. Students work on projects, receive personalized feedback, and develop essential soft skills. Graduates are well prepared for roles as front-end, back-end, or full-stack developers."
          />
          <Details
            type="Radiology Technology"
            time="2014-2017"
            place="University of Perugia"
            info="Deep understanding of radiographic imaging techniques, patient care, anatomy, medical terminology, and the principles of physics relevant to radiology. They learn to operate advanced radiology equipment and utilize imaging technology to capture high-quality diagnostic images. The curriculum encompasses various imaging modalities, including X-ray, computed tomography (CT), magnetic resonance imaging (MRI), and ultrasound. Additionally, students study the principles of physics that underpin these imaging techniques, such as radiation physics, wave propagation, and imaging technology principles. This knowledge enables them to effectively utilize the equipment, optimize image quality, and ensure patient safety."
          />
          <Details
            type="ESL Program"
            time="May-July 2018"
            place="Rice University - Houston, TX"
            info="The ESL program helps non-native English speakers improve their language skills in listening, speaking, reading, and writing. It focuses on grammar, vocabulary, pronunciation, and comprehension. Students practice real-life communication and develop cultural awareness. The program promotes critical thinking and independent learning. Graduates gain confidence and proficiency in English for academic, professional, and everyday situations."
          />
        </ul>
      </div>
    </div>
  );
};
