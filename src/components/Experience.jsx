import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#FFFFFF",
        color: "#2D2A26",
        border: "1px solid #E7E1D6",
        boxShadow: "0px 24px 60px -24px rgba(64, 54, 38, 0.18)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #E7E1D6" }}
      date=''
      iconStyle={{
        background: "#E4EFEA",
        color: "#2F6E63",
        boxShadow:
          "0 0 0 4px #3D8B7D, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <span className='text-[22px] font-bold' style={{ color: "#2F6E63" }}>
            {experience.company_name.charAt(0)}
          </span>
        </div>
      }
    >
      <div>
        <h3 className='text-ink text-[24px] font-bold'>{experience.title}</h3>
        <div className='flex justify-between items-center flex-wrap gap-x-4 gap-y-1'>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
          <span className='text-secondary text-[15px] font-medium'>
            {experience.date}
          </span>
        </div>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#5C564B] text-[14px] pl-1 tracking-wide leading-[24px]'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='w-10 h-[3px] bg-accent rounded-full mb-4 mx-auto' />
        <h2 className={`${styles.sectionHeadText} text-center`}>实习经历</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor='#E7E1D6' layout='1-column-left'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
