import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='w-10 h-[3px] bg-accent rounded-full mb-4 mx-auto' />
        <h2 className={`${styles.sectionHeadText} text-center`}>技术栈</h2>
      </motion.div>

      <div className='mt-14 flex flex-row flex-wrap justify-center gap-4 max-w-4xl mx-auto'>
        {technologies.map((technology, index) => (
          <motion.div
            key={technology}
            variants={fadeIn("up", "spring", index * 0.08, 0.6)}
            whileHover={{ y: -6 }}
            className='px-7 py-4 bg-tertiary border border-line rounded-xl text-ink font-medium text-[16px] shadow-card cursor-default select-none hover:border-accent transition-colors'
          >
            {technology}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
