import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../constants";
import { DeveloperCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const contactRows = [
  {
    label: "邮箱",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
  },
  {
    label: "微信",
    value: profile.wechat,
    href: null,
  },
];

const Contact = () => {
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary border border-line p-8 rounded-2xl shadow-card'
      >
        <div className='w-10 h-[3px] bg-accent rounded-full mb-4' />
        <h3 className={styles.sectionHeadText}>联系我</h3>
        <p className='mt-4 text-secondary text-[16px] leading-[30px]'>
          如果你对我的经历或项目感兴趣，欢迎通过下面任意方式联系我，
          我会尽快回复。
        </p>

        <div className='mt-10 flex flex-col gap-7'>
          {contactRows.map((row) => (
            <div key={row.label} className='flex flex-col gap-1'>
              <span className='text-secondary text-[14px]'>{row.label}</span>
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel='noreferrer'
                  className='text-ink text-[18px] font-medium hover:text-accent-deep transition-colors break-all'
                >
                  {row.value}
                </a>
              ) : (
                <span className='text-ink text-[18px] font-medium break-all'>
                  {row.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <DeveloperCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
