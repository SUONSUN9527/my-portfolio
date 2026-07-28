import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// 封面加载失败时的兜底：柔和渐变 + 项目名首字
const placeholderPalettes = [
  "linear-gradient(135deg, #DFEDE8 0%, #C5DED6 100%)",
  "linear-gradient(135deg, #F3E3D8 0%, #E8CDBB 100%)",
  "linear-gradient(135deg, #DFE7F0 0%, #C9D6E6 100%)",
];

// 从 repo 字段推导各项默认值，手动字段优先
const coverOf = (p) => {
  if (p.image) {
    return p.image.startsWith("http")
      ? p.image
      : import.meta.env.BASE_URL + p.image;
  }
  return p.repo ? `https://opengraph.githubassets.com/1/${p.repo}` : null;
};
const linkOf = (p) =>
  p.source_code_link || (p.repo ? `https://github.com/${p.repo}` : null);
const nameOf = (p) => p.name || (p.repo ? p.repo.split("/")[1] : "未命名项目");

const ProjectCard = ({ index, project, meta }) => {
  const [imgFailed, setImgFailed] = useState(false);

  const cover = coverOf(project);
  const link = linkOf(project);
  const name = nameOf(project);
  const description = project.description || meta?.desc || "";
  const stars = meta?.stars;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.35, 0.75)}
      className='h-full'
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary border border-line p-4 rounded-2xl w-full h-full shadow-card'
      >
        <div className='flex flex-col h-full'>
          <div className='project-cover relative w-full h-[130px] flex-shrink-0'>
            {cover && !imgFailed ? (
              <img
                src={cover}
                alt={name}
                onError={() => setImgFailed(true)}
                className='w-full h-full object-cover object-top rounded-xl bg-primary border border-line'
              />
            ) : (
              <div
                className='w-full h-full rounded-xl flex justify-center items-center'
                style={{
                  background:
                    placeholderPalettes[index % placeholderPalettes.length],
                }}
              >
                <span className='text-[48px] font-black text-white/80 select-none'>
                  {name.charAt(0)}
                </span>
              </div>
            )}

            {link && (
              <div className='absolute inset-0 flex justify-end m-2'>
                <div
                  onClick={() => window.open(link, "_blank")}
                  className='ink-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            )}
          </div>

          <div className='mt-3 flex flex-col flex-1'>
            <div className='flex justify-between items-center'>
              <p className='text-[12px] font-medium text-accent-deep'>
                {project.category}
              </p>
              {stars != null && (
                <span className='text-secondary text-[12px]'>★ {stars}</span>
              )}
            </div>
            <h3 className='project-title mt-0.5 text-ink font-bold text-[18px]'>
              {name}
            </h3>
            <p className='project-desc mt-1.5 text-secondary text-[13px] leading-[20px] clamp-2'>
              {description}
            </p>

            <div className='project-tags mt-auto pt-3 flex flex-wrap gap-2'>
              {(project.tags || []).map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[12px] font-medium ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  // 运行时向 GitHub API 补充 star 数 / 英文简介，失败则静默降级为配置数据
  const [meta, setMeta] = useState({});

  useEffect(() => {
    projects.forEach((p) => {
      if (!p.repo) return;
      fetch(`https://api.github.com/repos/${p.repo}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (!d) return;
          setMeta((m) => ({
            ...m,
            [p.repo]: {
              stars: d.stargazers_count,
              desc: d.description,
              lang: d.language,
            },
          }));
        })
        .catch(() => {});
    });
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='w-10 h-[3px] bg-accent rounded-full mb-4' />
        <h2 className={styles.sectionHeadText}>项目精选</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='project-lead mt-2 text-secondary text-[15px] max-w-3xl leading-[28px]'
        >
          GitHub 置顶项目，Star 数为仓库实时数据，点击卡片右上角图标直达源码。
        </motion.p>
      </div>

      <div className='project-grid mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
            meta={project.repo ? meta[project.repo] : null}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
