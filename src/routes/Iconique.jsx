import { useInView } from 'react-intersection-observer';  
import {motion} from 'framer-motion';
import { Header, ProjectFooter } from '../components/index.jsx';
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

      const subTitleStyles = {
        fontFamily: 'monospace',
        fontSize: '40px',
        padding: '35px',
        fontWeight: '500px',
        color: 'white',
        margin: 0,
      };
      const textStyles = {
        fontFamily: 'monospace',
        fontSize: '20px',
        padding: '40px',
        fontWeight: '500px',
        color: 'white',
        margin: 0,
      };
    return (
    <>
        <Header offset={150}/>

        <motion.h1 
        ref={ref}
        style={titleStyles}
        initial={{rotateX: '90deg', opacity: 0}}
        animate={inView? {rotateX: '0deg', opacity: 1} : {}}
        transition={{duration: .7}}
        >
            Iconique
        </motion.h1>
        <motion.div 
                style={{margin: '20px', width: '60%'}}
                initial={{clipPath: 'inset(0% 0 100% 0)'}}
                whileInView={{clipPath: 'inset(0% 0 0 0)'}}
                transition={{
                    duration: 1.2, 
                    delay: .5
                }}
                viewport={{once: true}}
        >
            <h2 style={subTitleStyles}>
                Trouble Keeping Up?
            </h2>
            <p style={textStyles}>
                Modern fashion is a fast-paced industry that is constantly changing. In a rapidly evolving environment, keeping up with trends can be difficult. Additionally, fashion enthusiasts often struggle to find a cohesive space to express their personal style, share ideas, and engage with like-minded individuals. 
            </p>
        </motion.div>
        <motion.div 
            style={{
                display: 'flex',
                margin: '50px',
                paddingBottom: '20px',
                justifyContent: 'center'   
            }}
            initial={{opacity: '0%'}}
            whileInView={{opacity: '100%'}}
            transition={{
                duration: 1, 
                
            }}
            viewport={{once: true, amount: .3}}
        >
            <img 
                src='/Iconique-Img.png'
                alt='Iconique Home Screen'
                style={{
                    width: '90%',
                }}

            ></img>
            
        </motion.div>
        <motion.div 
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '90%',
                paddingLeft: '50px',
                paddingRight: '50px',
            }}

            initial={{opacity: '0%'}}
            whileInView={{opacity: '100%'}}
            transition={{
                duration: .5, 
                
            }}
            viewport={{once: true}}
        >
            <div 
                style={{width: '30%'}}
            >
                <p style={{     
                    fontFamily: 'monospace',
                    fontSize: '16px',
                    padding: '40px',
                    fontWeight: '500px',
                    color: 'white',
                    margin: 0,
                }}>
                    Iconique aims to create a social media platform specifically for fashion. Here, individuals can freely showcase their style and ideas, and communicate with others with the same interests. Through this platform, we hope to foster a community to help inspire creativity, develop new ideas, and bring people together.
                </p>
            </div>
            
            <div style={{paddingTop: '40px'}}>
                <div>
                <h2 style={{fontFamily: 'monospace',fontSize: '18px',}}>
                    Context:
                </h2>
                <p style={{fontFamily: 'monospace',fontSize: '12px', marginBottom: '50px',}}>
                    CS 546 Final Project
                </p>
                </div>
                <div>
                    <h2 style={{fontFamily: 'monospace',
                    fontSize: '18px',}}>Duration:</h2>
                    <p style={{fontFamily: 'monospace',
                    fontSize: '12px',}}>Feb. 2024, 4 Months</p>
                </div>
            </div>
            <div  style={{paddingTop: '40px'}}>
                <div>
                <h2 style={{fontFamily: 'monospace',fontSize: '18px',}}>
                    Technology:
                    </h2>
                <p style={{fontFamily: 'monospace',fontSize: '12px',}}>
                    Express.js
                </p>
                <p style={{fontFamily: 'monospace',fontSize: '12px',}}>
                    MongoDB
                </p>
                <p style={{fontFamily: 'monospace',fontSize: '12px',}}>
                    Handlebars
                </p>
                <p style={{fontFamily: 'monospace',fontSize: '12px',}}>
                    Tailwind CSS
                </p>
                </div>
            </div>
        </motion.div >

        <motion.div  
            style={{
                display: 'flex',
                margin: '50px',
                justifyContent: 'center',  
                padding: '0 50px 50px 50px'
            }}
            initial={{opacity: '0%'}}
            whileInView={{opacity: '100%'}}
            transition={{
                duration: .5, 
                
            }}
            viewport={{once: true}}
        >
        <div style={{
            width: '50%',
            height: '50vh',
            background: '#CECECE',
            margin: '10px',
            padding: '20px'
        }}>
            <h2 style={{color: 'black', fontFamily: 'monospace', fontSize: '30px'}}>
                Features:
            </h2>
            <ul>
                <li style={{color: 'black',fontFamily: 'monospace', fontSize: '18px', marginBottom: '10px'}}>Infinite Scroll on homepage to view new / recommended posts</li>
                <li style={{color: 'black',fontFamily: 'monospace', fontSize: '18px', marginBottom: '10px'}}>Likes, comments, and links to clothing featured in each post</li>
                <li style={{color: 'black',fontFamily: 'monospace', fontSize: '18px', marginBottom: '10px'}}>Post recommendation algorithm based on users post interactions (likes, comments, keywords)</li>
                <li style={{color: 'black',fontFamily: 'monospace', fontSize: '18px', marginBottom: '10px'}}>Search bar for both users and posts, based on keywords</li>
                <li style={{color: 'black',fontFamily: 'monospace', fontSize: '18px', marginBottom: '10px'}}>Reporting functionality and ability to review reports for admin users</li>

            </ul>
        </div>
        <div style={{
            width: '50%',
            height: '50vh',
            background: '#CECECE',
            margin: '10px',
            padding: '20px'
        }}>
            <h2 style={{color: 'black',fontFamily: 'monospace', fontSize: '30px'}}>
                My Role:
            </h2>
            <h3 style={{color: 'black',fontFamily: 'monospace', fontSize: '25px', marginBottom: '0px'}}>
                Back-End Development
            </h3>
            <p style={{color: 'black',fontFamily: 'monospace', fontSize: '18px', fontWeight:'500', marginLeft: '20px'}}>
                I worked on Iconiques' REST API, specifically routing related to our database's user and post schemas. This includes user sign-up, log-in, authentication, deletion, and editing, as well as post creation, editing, and deletion. Additionally, I worked on client-side form input handling and scripting for the routes mentioned, and developed middleware for managing site functionality and accessibility based on the authentication state of the user.
            </p>
        </div>
        </motion.div>

        <div 
            style={{
                padding: '50px',
                marginTop: '80px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >

            <motion.img 
                 initial={{opacity: '0%'}}
                 whileInView={{opacity: '100%'}}
                 transition={{
                     duration: .5, 
                     
                 }}
                 viewport={{once: true}}
                style={{display: 'relative', width:'60%', marginBottom: '150px', marginLeft: '100px'}}
                 src='/Iconique-Gallery1.png'/>
            <motion.img 
                 initial={{opacity: '0%'}}
                 whileInView={{opacity: '100%'}}
                 transition={{
                     duration: .5, 
                     
                 }}
                 viewport={{once: true}}
                style={{display: 'relative', width:'70%', marginBottom: '150px', marginLeft: '300px'}} 
                src='/Iconique-Gallery2.png'/>
            <motion.img 
                 initial={{opacity: '0%'}}
                 whileInView={{opacity: '100%'}}
                 transition={{
                     duration: .5, 
                     
                 }}
                 viewport={{once: true}}
                style={{display: 'relative', width:'65%', marginBottom: '150px', marginLeft: '200px'}} 
                src='/Iconique-Gallery3.png'/>
            <motion.img 
                 initial={{opacity: '0%'}}
                 whileInView={{opacity: '100%'}}
                 transition={{
                     duration: .5, 
                     
                 }}
                 viewport={{once: true}}
                style={{display: 'relative', width:'65%', marginBottom: '150px', marginLeft: '100px'}} 
                src='/Iconique-Gallery4.png'/>
        </div>

        <motion.div
        style={{
            display: 'grid',
            margin: '50px',
            justifyItems: 'center',  
            padding: '0 50px 50px 50px',
            borderBottom: '1px solid white'
        }}
        initial={{opacity: '0%'}}
        whileInView={{opacity: '100%'}}
        transition={{
            duration: .5, 
            
        }}
        viewport={{once: true}}>
            <h2 style={{color: 'white',fontFamily: 'monospace', fontSize: '50px', marginBottom: '70px'}}>
                External Links
            </h2>
            <a href='https://github.com/E-Silverstein/CS546-Group-11-Final-Project' style={{color: 'white',fontFamily: 'monospace', fontSize: '25px'}}>Github</a>
        </motion.div>
    </>);
}

export default Iconique;