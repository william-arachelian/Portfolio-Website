import Styles from './Error.module.css';
import { SpaceBackground } from '../components';
const Error = () => {
    return (<>
    <SpaceBackground />
    <div className={Styles.errorDiv}>
        <h1>404 Not Found</h1>
        <img className={Styles.errorImg} src="/astronaut.png" alt="astronaut"></img>
    </div>
    </>);
}

export default Error;