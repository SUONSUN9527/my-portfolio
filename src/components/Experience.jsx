import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <article className='experience-item'>
      <time className='experience-date'>{experience.date}</time>

      <div className='experience-marker' aria-hidden='true'>
        <span>{experience.company_name.charAt(0)}</span>
      </div>

      <motion.div
        variants={fadeIn("left", "spring", index * 0.15, 0.7)}
        className='experience-card'
      >
        <div className='experience-card-arrow' aria-hidden='true' />
        <h3 className='text-ink text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold mt-1'>
          {experience.company_name}
        </p>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, pointIndex) => (
            <li
              key={`experience-point-${pointIndex}`}
              className='text-[#5C564B] text-[14px] pl-1 tracking-wide leading-[24px]'
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </article>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='w-10 h-[3px] bg-accent rounded-full mb-4 mx-auto' />
        <h2 className={`${styles.sectionHeadText} text-center`}>实习经历</h2>
      </motion.div>

      <div className='experience-timeline mt-20'>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company_name}-${experience.date}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
