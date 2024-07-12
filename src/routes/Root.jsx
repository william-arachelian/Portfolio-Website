import {ProjectCard, LandingHero, Header } from './../components/index.jsx';
import { motion, spring } from 'framer-motion';
import { useRef } from 'react';
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
        <Header offset={2770}/>
        <LandingHero />
        <div 
          style={{
            position: 'relative', 
            marginTop: '2000px', 
            background: 'black', 
            }}
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
            </div>
            <div style={columnStyles}>
              <ProjectCard name='Nutrition Scanner' image='/nutrition_thumbnail.webp'/>
              <ProjectCard name='Canvas Quiz Grader' image='/quizgrader_thumbnail.webp'/>
            </div>
          </div>
        </div>
        </>
      );
}

export default Root;