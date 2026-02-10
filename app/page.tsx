import AboutMe from '@/components/home/AboutMe';
import Banner from '@/components/home/Banner';
import Experiences from '@/components/home/Experiences';
import ProjectList from '@/components/home/ProjectList';
import Skills from '@/components/home/Skills';

export default function Home() {
  return (
    <div className=''>
      <Banner />
      <AboutMe />
      <Skills />
      <Experiences />
      <ProjectList />
    </div>
  );
}
