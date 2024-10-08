import Styles from './WelcomeText.module.css'
import { motion, useScroll, useTransform } from 'framer-motion';

export const WelcomeText = () => {
    
    const {scrollYProgress} = useScroll();
    let text1X = useTransform(scrollYProgress, [0,1], ['0px', '800px'])
    let text2X = useTransform(scrollYProgress, [0,1], ['0px', '500px'])

    return (
    <motion.div className={Styles.wrapper}>
            <motion.h1 
                className={Styles.landingMsg1} 
                initial={{
                    opacity: 0,
                    rotateX: '90deg'
                }}
                whileInView={{
                    opacity: 1,
                    rotateX: '0deg'
                }}
                transition={{duration: 1}}
                viewport={{once: true}}
            >Hi, 👋</motion.h1>
            <motion.h1 
                className={Styles.landingMsg2} 
                initial={{
                    opacity: 0,
                    rotateX: '90deg'
                }}
                whileInView={{
                    opacity: 1,
                    rotateX: '0deg'
                }}
                transition={{
                    duration: 1,
                    delay: 0.2
                }}
                viewport={{once: true}}
            >I'm Will</motion.h1>
        </motion.div>
    );
}
