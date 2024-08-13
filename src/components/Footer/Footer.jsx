import Styles from "./Footer.module.css";
import { motion } from 'framer-motion';
export const Footer = () => {

    const linkVariants = {
        whileHover: {
            scale: '-20px', 
            transition: {duration: .4},
        },  
    }
    return (
        <div className={Styles.footer}>
            <div className={Styles.footerColumn} style={{marginLeft: '35px'}}>
                <h3 className={Styles.footerLogo}>Will Arachelian</h3>
                <div>
                <motion.a 
                    className={Styles.footerLink}
                    href="/William_Arachelian_Resume_24-25.pdf"
                    variants={linkVariants}
                    whileHover="whileHover"
                >Resume</motion.a   >
                 <motion.a 
                    className={Styles.footerLink} 
                    href="https://github.com/william-arachelian"
                    variants={linkVariants}
                    whileHover="whileHover"
                >GitHub</motion.a>
                <motion.a 
                    className={Styles.footerLink} 
                    href="https://www.linkedin.com/in/william-arachelian-681834251/"
                    variants={linkVariants}
                    whileHover="whileHover"
                >LinkedIn</motion.a>
                 <motion.a 
                    className={Styles.footerLink} 
                    href="mailto:warachel@stevens.edu"
                    variants={linkVariants}
                    whileHover="whileHover"
                >Email</motion.a>
                </div>

               <p className={Styles.farewell}
               
               >谢谢, shnorhakalutyun, thank you ✌️</p>
            </div>


            {/* <div className={Styles.footerColumn}>
                <h3 className={Styles.footerTitle}>Projects</h3>
                <motion.a 
                    className={Styles.footerLink} 
                    href="#"
                    variants={linkVariants}
                    whileHover="whileHover"
                >Iconique</motion.a>
                <motion.a 
                    className={Styles.footerLink} 
                    href="#"
                    variants={linkVariants}
                    whileHover="whileHover"
                >Nutrition Scanner</motion.a>
                <motion.a 
                    className={Styles.footerLink} 
                    href="#"
                    variants={linkVariants}
                    whileHover="whileHover"
                >Quiz Grader</motion.a>
            </div>
            <div className={Styles.footerColumn}>
                <h3 className={Styles.footerTitle}>Lets Connect!</h3>
                <motion.a 
                    className={Styles.footerLink} 
                    href="https://www.linkedin.com/in/william-arachelian-681834251/"
                    variants={linkVariants}
                    whileHover="whileHover"
                >LinkedIn</motion.a>
                 <motion.a 
                    className={Styles.footerLink} 
                    href="mailto:warachel@stevens.edu"
                    variants={linkVariants}
                    whileHover="whileHover"
                >Email</motion.a>
            </div> */}
        </div>
        
    );
}
