import './index.css'
import { Navbar } from './components/Nav'
import { Hero_section } from './components/HeroSection';
import { Our_mission } from './components/OurMission';
import { Our_vision } from './components/OurVision';
import { Our_founders } from './components/OurFounders';
import { Awards } from './components/Awards';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-main flex flex-col font-montserrat ">
      <Navbar />
      <Hero_section />
      <div className='flex w-full h-96 relative mt-8'>
        <div className='w-1/2'></div>
        <div className='w-1/2 bg-primary_lite'></div>
        <div className='absolute container mx-auto inset-x-20'>
          <Our_mission />
        </div>
      </div>

      <div className='flex w-full h-96 relative'>
        <div className='w-1/2 bg-primary_lite'></div>
        <div className='w-1/2'></div>
        <div className='absolute container mx-auto inset-x-20'>
          <Our_vision />
        </div>
      </div>

      <Our_founders />
      <Awards />
      <Footer />

    </div>
  );
}

export default App;
