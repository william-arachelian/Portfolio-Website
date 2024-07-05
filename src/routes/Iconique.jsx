import { useInView } from 'react-intersection-observer';  
import {motion} from 'framer-motion';

const Iconique = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
  
    const titleStyles = {
        fontFamily: 'monospace',
        fontSize: '80px',
        padding: '40px',
        fontWeight: '500px',
        color: 'white',
        borderBottom: '1px solid',
        marginBottom: '50px',
        marginLeft: '60px',
        marginRight: '60px',
      };

    return (
    <>
        <motion.h1 
        ref={ref}
        style={titleStyles}
        initial={{rotateX: '90deg', opacity: 0}}
        animate={inView ? {rotateX: '0deg', opacity: 1} : {}}
        transition={{duration: .7}}
        >
            Iconique
        </motion.h1>

        <p>
            Modern fashion is a fast-paced industry that is constantly changing. In a rapidly evolving environment, keeping up with trends can be difficult. Our project aims to create a social media platform specifically for fashion. Here, individuals can freely showcase their style and ideas, and communicate with others with the same interests. Through this platform, we hope to foster a community to help inspire creativity, develop new ideas, and bring people together. 
        </p>
    </>);
}

export default Iconique;