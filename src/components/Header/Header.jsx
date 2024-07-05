import Styles from './Header.module.css'

export const Header = () => {
    return (
        <>
        <div className={Styles.header}>
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
        </div>
        </>
    );
}
