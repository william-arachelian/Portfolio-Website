import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Styles from './SpaceBackground.module.css';
import { motion, useScroll } from 'framer-motion';
import { WelcomeText } from '../WelcomeText/WelcomeText';
export const SpaceBackground = () => {

    const backgroundRef = useRef(null);
    const { scrollYProgress } = useScroll({
        
    });

    useEffect(
        ()=>{
            const background = backgroundRef.current;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera( 75,  window.innerWidth / window.innerHeight, 0.1, 1000 );
            const renderer = new THREE.WebGLRenderer({
                canvas: background
            });
            renderer.setSize(window.innerWidth - 16, 780);

            const addStar = () => {
                const geometry = new THREE.SphereGeometry(0.25, 24, 24);
                const material = new THREE.MeshBasicMaterial({ color: 0xffffff});
                const star = new THREE.Mesh(geometry, material);
                const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(250));
            
                star.position.set(x, y, z);
                scene.add(star);
            };
            
            Array(1000).fill().forEach(addStar);

            camera.position.z = 5;
            
            const animate = () => {
                renderer.render( scene, camera );
                camera.rotation.x += 0.0005;
                camera.rotation.y += 0.0005;

                if (scrollYProgress.current > scrollYProgress.prev && scrollYProgress.current < .35)
                    camera.position.z -= scrollYProgress.current/2;
                else if (scrollYProgress.current < scrollYProgress.prev && scrollYProgress.current < .35)
                    camera.position.z += scrollYProgress.current;
              
            }

            renderer.setAnimationLoop( animate );
            
            // const handleResize = () => {
            //     camera.aspect =  window.innerWidth / window.innerHeight;
            //     camera.updateProjectionMatrix();
            //     renderer.setSize( window.innerWidth - 16, 780);
            // };
    
            // window.addEventListener('resize', handleResize);
    
            return () => {
                renderer.setAnimationLoop(null);
                //window.removeEventListener('resize', handleResize);
                renderer.dispose();
            };
        }, 
        []
    );

    return (
        <motion.canvas className={Styles.canvas} ref={backgroundRef}></motion.canvas>
    );
}

