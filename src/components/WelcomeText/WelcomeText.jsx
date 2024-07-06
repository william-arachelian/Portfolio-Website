import Styles from './WelcomeText.module.css'
import { motion, useScroll, useTransform } from 'framer-motion';

export const WelcomeText = () => {
    
    const {scrollYProgress} = useScroll();
    const text1X = useTransform(scrollYProgress, [0,.4], ['700px','0px'])
    const text2X = useTransform(scrollYProgress, [0,.4], ['600px','0px'])
    const textColor = useTransform(scrollYProgress, [0,.3], ["#fff", "#000"]);
    const overlayWidth = useTransform(scrollYProgress, [0,.4], ["0%","100%"]);

    return (
    <motion.div className={Styles.wrapper}>
            <motion.div 
                className={Styles.overlay}
                style={{width: overlayWidth}}
            >
                <motion.h1 
                className={Styles.landingMsg1} 
                style={{x: text1X,  color: textColor}}
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
                    style={{x: text2X, color: textColor}}
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

                <motion.h1
                    className={Styles.subText}
                >
                    CS + Math Student @ Stevens IT</motion.h1>
            </motion.div>
        </motion.div>
    );
}
