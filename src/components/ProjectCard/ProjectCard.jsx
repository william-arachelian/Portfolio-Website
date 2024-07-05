import Styles from './ProjectCard.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ProjectCard = (props) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
    <motion.div 
        ref={ref}
        className={Styles.projectCard}
        initial={{clipPath: 'inset(100% 0 0 0)'}}
        animate={inView ? {clipPath: 'inset(0% 0 0 0)'}: {}}
        transition={{
            duration: 1.2, 
            scale: {duration: .3}
        }}
        whileHover={{scale: 1.05}}
        >
        <motion.img 
            className={Styles.projectImg}
            src={props.image}
         />
        <div className={Styles.projectFooter}>
            <p className={Styles.projectTitle}>{props.name}</p>
            <a className={Styles.projectButton} href={`/projects/${props.name}`}>↗</a>
        </div>
    </motion.div>);
}

