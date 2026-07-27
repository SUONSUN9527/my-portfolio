import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import useSectionSnap from "./hooks/useSectionSnap";

const App = () => {
  useSectionSnap();

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-paper'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
