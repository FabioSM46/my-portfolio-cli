import "./Skills.css";
import { motion } from "framer-motion";
const skills = [
  { name: "HTML", rotation: 0 },
  { name: "CSS", rotation: 30 },
  { name: "JavaScript", rotation: 60 },
  { name: "Node.js", rotation: 90 },
  { name: "Express.js", rotation: 120 },
  { name: "REST API", rotation: 150 },
  { name: "MongoDB", rotation: 180 },
  { name: "Mongoose", rotation: 210 },
  { name: "React", rotation: 240 },
  { name: "Git", rotation: 270 },
  { name: "GitHub", rotation: 300 },
  { name: "Tailwind CSS", rotation: 330 },
];

export const Skills = () => {
  return (
    <div className="mt-64">
      <h2 className="font-bold text-8xl w-full text-center text-primary-800 dark:text-primary-200">
        Skills
      </h2>
      <div
        className="skills-circle w-full h-screen relative
      flex items-center justify-center rounded-full"
      >
        <div
          className="center-element p-5 text-xl font-bold bg-secondary-400 text-primary-800 
          shadow-[0px_3px_8px_4px_#1a202c,0px_15px_20px_0px_#0284c7]"
        >
          Web
        </div>
        <svg width="600" height="600">
          <motion.circle
            cx="300"
            cy="300"
            r="300"
            fill="transparent"
            stroke="black"
            strokeWidth="3"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: 360 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
        {skills.map((skill, index) => {
          return (
            <motion.div
              className="skill p-5 bg-primary-400 text-primary-800 shadow-[0px_20px_20px_10px_#1a202c,0px_3px_8px_0px_#1a202c,0px_3px_8px_0px_#1a202c]"
              key={index}
              initial={{
                width: "fit-content",
                height: "fit-content",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transform: `translate(-50%, -50%) rotate(${skill.rotation}deg) translateY(-300px) rotate(-${skill.rotation}deg)`,
                cursor: "pointer",
              }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              {skill.name}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
