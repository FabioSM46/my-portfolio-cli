import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "./../LiIcon/LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          <span className="text-secondary-400 dark:text-primary-200">
            {position}
          </span>
          &nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary-700 dark:text-secondary-500"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize ">
          {time} | {address}
        </span>
        <p className="w-full text-primary-600 dark:text-primary-200 break-word">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center text-primary-800 dark:text-primary-200">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full origin-top bg-primary-800"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Radiology Technologist"
            company="Brugnoni Group Sanità"
            companyLink="https://www.brugnonisanita.it/"
            time="2018-2023"
            address="Perugia, Italy"
            work="As a radiographer, I performed various radiographic procedures like X-rays, CT scans, and MRIs. I operated and maintained equipment to ensure accurate imaging and adherence to safety protocols. Collaborating with radiologists, I interpreted results for accurate diagnoses. I also communicated effectively with patients, explaining procedures, addressing concerns, and ensuring their comfort throughout."
          />
          <Details
            position="Mechanic"
            company="Audi Zentrum Perugia"
            companyLink="https://www.giustozziauto.com/audi/sedi/audi-zentrum-perugia/"
            time="2012-2013"
            address="Perugia, Italy"
            work="As an Audi mechanic, my role involved overseeing the care and maintenance of new cars from the garage to client delivery. You conducted inspections, diagnosed and repaired issues, performed routine maintenance, and ensured vehicles met Audi's quality standards before handing them over to clients."
          />
        </ul>
      </div>
    </div>
  );
};
