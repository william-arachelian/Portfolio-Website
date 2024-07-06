import { WelcomeText, SpaceBackground, ProjectCard, Footer, Hero } from './../components/index.jsx';
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
        {/* <SpaceBackground /> */}
        {/* <WelcomeText /> */}
        <Hero />
        {/* <p style={{position: 'relative', top: '700px', fontSize: }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante lacus, laoreet sed nisl ac, iaculis laoreet turpis. Fusce id purus mollis sem scelerisque facilisis. Nulla in lacus vitae elit pharetra porttitor laoreet a dui. Suspendisse et posuere urna. Aliquam laoreet quam tincidunt arcu sagittis finibus. Aliquam placerat sit amet ligula et iaculis. In purus nulla, suscipit id efficitur quis, feugiat nec nunc. Phasellus viverra lorem eget sem fermentum, eu venenatis eros sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam at iaculis leo. Donec ac dapibus erat.</p> */}

        <div 
        style={{position: 'relative', marginTop: '2000px', background: 'black'}}
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