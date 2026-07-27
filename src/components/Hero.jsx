import { styles } from "../styles";
import { profile } from "../constants";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto' data-snap=''>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-accent' />
          <div className='w-1 sm:h-80 h-40 accent-gradient' />
        </div>

        <div>
          <h1 className={styles.heroHeadText}>
            你好，我是 <span className='text-accent-deep'>{profile.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            {profile.role}
            <br className='sm:block hidden' />
            {profile.tagline}
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
