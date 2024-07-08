import { useEffect, useState } from 'react';
import Styles from './Header.module.css'
import { motion, useScroll, useMotionValueEvent} from 'framer-motion';
export const Header = ({ offset }) => {

    const [hidden, setHidden] = useState(false);
    const {scrollY} = useScroll();
    const headerVariants = {
        visible: {y: 0},
        hidden: {y: '-100%'},
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > previous && latest > offset) 
            setHidden(true);
        else 
            setHidden(false);
    })
   
    return (
        <>
        <motion.div 
            className={Styles.header}
            variants={headerVariants}
            animate= {hidden ? 'hidden' : 'visible'}
            transition={{duration: .3, ease: 'easeInOut'}}
        >
            <a 
                className={Styles.logo}
                href="/">
                William Arachelian
            </a>
            <div className={Styles.nav}>
                <a 
                    className={Styles.navButton}
                    href="/projects">
                    Projects
                </a>
                <a 
                    className={Styles.navButton}
                    href="/about">
                    About
                </a>
            </div>
        </motion.div>
        </>
    );
};
