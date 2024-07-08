import { ProjectCard, Header } from './../components/index.jsx';
import { useInView } from 'react-intersection-observer';  
import {motion} from 'framer-motion';
const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
  
      const titleStyles = {
        fontFamily: 'monospace',
        fontSize: '150px',
        padding: '40px',
        fontWeight: '500px',
        color: 'white',
        borderBottom: '1px solid',
        marginBottom: '50px',
        marginLeft: '60px',
        marginRight: '60px',
      };
      
      const containerStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      };
      
      const columnStyles = {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
      };
    return (
    <>
        <Header offset={150}/>
        <motion.h1 
          ref={ref}
          style={titleStyles}
          initial={{rotateX: '90deg', opacity: 0}}
          animate={inView ? {rotateX: '0deg', opacity: 1} : {}}
          transition={{duration: .7}}
        >
          Projects
        </motion.h1>
        <div style={containerStyles}>
        <div style={columnStyles}>
          <ProjectCard name='Iconique' image='/iconique_thumbnail.webp'/>
          <ProjectCard name='test3' image='/vite.svg'/>
        </div>
        <div style={columnStyles}>
          <ProjectCard name='Nutrition Scanner' image='/nutrition_thumbnail.webp'/>
          <ProjectCard name='Canvas Quiz Grader' image='/quizgrader_thumbnail.webp'/>
          <ProjectCard name='test4' image='/vite.svg'/>
        </div>
      </div>
    </>
    );
}

export default Projects;