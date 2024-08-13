import Styles from './ProjectFooter.module.css';
export const ProjectFooter = ({bgImage, link}) => {


    return (<>
        <div 
            className={Styles.projectFooterWrapper}
        >
           <img 
                className={Styles.projectFooterImage}
                src={bgImage}
            ></img>
        </div>
    
    
    </>);

}