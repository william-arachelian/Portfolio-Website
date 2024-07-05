import { WelcomeText, SpaceBackground, ProjectCard, Footer } from './../components/index.jsx';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Root = () => {

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    const titleStyles = {
      fontFamily: 'monospace',
      fontSize: '50px',
      padding: '40px',
      fontWeight: '500px',
      color: 'white',
      borderTop: '1px solid',
      margin: 0,
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
        <SpaceBackground />
        <WelcomeText />
        <div 
        // style={{marginTop: '800px'}}
        >
          <motion.h2 
            ref={ref}
            style={titleStyles}
            initial={{rotateX: '90deg', opacity: 0}}
            animate={inView ? {rotateX: '0deg', opacity: 1} : {}}
            transition={{duration: .7}}
          >
            What I've Been working on!
          </motion.h2>
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
        </div>
        </>
      );
}

export default Root;