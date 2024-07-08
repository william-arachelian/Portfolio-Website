import { useInView } from 'react-intersection-observer';  
import {motion} from 'framer-motion';
import { Header } from '../components/index.jsx';
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
        <Header offset={150}/>
        <motion.h1 
        ref={ref}
        style={titleStyles}
        initial={{rotateX: '90deg', opacity: 0}}
        animate={inView ? {rotateX: '0deg', opacity: 1} : {}}
        transition={{duration: .7}}
        >
            Iconique
        </motion.h1>
        <div 
        style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div 
                style={{
                    width: '70vw',
                    height: '70vh',
                    overflow: 'hidden',
                    top: 0,
                    backgroundImage: 'url(/IconiqueHero-full.png)',
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                }}
            />
        </div>
        <p style={{fontSize: '20px', padding: '20px'}}>
        Modern fashion is a fast-paced industry that is constantly changing. In a rapidly evolving environment, keeping up with trends can be difficult. Fashion enthusiasts often struggle to find a cohesive space to express their personal style, share ideas, and engage with like-minded individuals. Traditional social media platforms are too broad and cluttered, making it challenging for fashion-focused content to stand out. Additionally, the constant influx of new trends and the pressure to stay updated can be overwhelming, leading to a lack of inspiration and creative blockages. There is a need for a dedicated platform that addresses these challenges and provides a supportive environment for fashion enthusiasts to thrive.
        </p>
        <p style={{fontSize: '20px', padding: '20px'}}>
        Our project aims to create a social media platform specifically for fashion. Here, individuals can freely showcase their style and ideas, and communicate with others with the same interests. Through this platform, we hope to foster a community to help inspire creativity, develop new ideas, and bring people together.

        </p>
    </>);
}

export default Iconique;