import {Header} from './../components/index.jsx';
import {easeOut, motion, useScroll, useTransform} from 'framer-motion';

const About = () => {

    const containerStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
  
      };
      
      const columnStyles = {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
      };

    return (<>
    <Header offset={150}/>

    <div 
        style={{
            height: '800px',
            position: 'relative',
            padding: '50px 50px 10px 50px',
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: '#CECECE'
        }}
    >
        <div 
            style={{
                width: '45%',
            }}
        >
        <motion.img 
            src='/about_img.jpg'
            style={{
                width: '100%',
                height: 'auto',
                margin: 0,
            }}
            
        />
        </div>

        <div 
            style={{
                width: '45%',
                margin: 0,
                padding: '20px'
            }}
        >
            <h2
                style={{
                    margin: '0px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '50px',
                    color: 'black'

                }}
            >Who I Am</h2>
        
            <p
                style={{
                    marginTop: '70px',
                    fontFamily: 'monospace',
                    fontSize: '16px',
                    color: 'black',
                    fontWeight: '800'

                }}
            >
            
            I'm a computer science major at Stevens Institute of Technology, aspiring to become a software engineer. 
            My interest in computer science comes from my dad, and my love for it came from creating and designing minecraft mods and servers for my cousins and I to play on.
            I love learning and keeping up with the latest technology, and currently have my hands full developing full-stack applications and training machine learning models.
            While im not coding, you can find me strumming the guitar, playing basketball, practicing kickflips, or losing sleep from video games.

            </p>

            <h2
                style={{
                    marginTop: '50px',
                    marginBottom: '50px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '40px',
                    color: 'black'

                }}
            >My Background</h2>
            <ul 
            style={{
                fontFamily: 'monospace',
                fontSize: '16px',
                paddingLeft: '20px',
                color: 'black',
                fontWeight: '800'

            }}>
                <li>Bachelors of Science, Major in Computer Science, Minor in Pure and Applied Mathmatics</li>
                <p>Stevens Institute of Technology</p>
                <li>FreeCodeCamp Certifications</li>
                <p>Data Analysis With Python</p>
                <p>Back End Development and APIs</p>
            </ul>
        </div>
    </div>
    <motion.h2
            style={{
                marginBottom: '50px',
                marginLeft: '90px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '50px',
            }}
        >Gallery</motion.h2>

    <div style={containerStyles}>
        <div style={columnStyles}>
            <motion.div
                style={{
                    marginBottom:'55px'
                }}

                initial={{opacity: '0%'}}
                whileInView={{opacity: '100%'}}
                transition={{duration: .6}}
                viewport={{once: true, amount: .3}}
            >
            <img 
                    src='/IMG_5127.jpg' 
                    style={{
                        width: '100%',
                    }}
                />
            </motion.div>
            <motion.div
                style={{
                    marginBottom:'50px'
                }}
                initial={{opacity: '0%'}}
                whileInView={{opacity: '100%'}}
                transition={{duration: .6}}
                viewport={{once: true, amount: .3}}
            >
            <img 
                    src='/IMG_5142.JPG' 
                    style={{
                        width: '100%',
                    }}
                />
            </motion.div>
            <motion.div
                style={{
                        marginBottom:'55px'
                }}
                initial={{opacity: '0%'}}
                whileInView={{opacity: '100%'}}
                transition={{duration: .6}}
                viewport={{once: true, amount: .3}}
            >
            <img 
                    src='/20230812_164359.JPG' 
                    style={{
                        width: '100%'
                    }}
                />
            </motion.div>
        </div>
       
        <div style={columnStyles}>
            <motion.div
                style={{
                        marginBottom:'70px'
                }}
                initial={{opacity: '0%'}}
                whileInView={{opacity: '100%'}}
                transition={{duration: .6}}
                viewport={{once: true, amount: .3}}
            >
                <img 
                    src='/GPTempDownload 5-min.JPG' 
                    style={{
                        width: '100%'
                    }}
                />
                
            </motion.div>
            
            <motion.div
                style={{
                        marginBottom:'70px'
                }}
                initial={{opacity: '0%'}}
                whileInView={{opacity: '100%'}}
                transition={{duration: .6}}
                viewport={{once: true, amount: .3}}
            >
            <img 
                    src='/IMG_7650 2.JPG' 
                    style={{
                        width: '100%'
                    }}
                />
            </motion.div>
            
            <motion.div
                style={{
                    marginBottom:'70px'
                }}
                initial={{opacity: '0%'}}
                whileInView={{opacity: '100%'}}
                transition={{duration: .6,}}
                viewport={{once: true, amount: .3}}
            >
            <img 
                    src='/cachedImage.PNG' 
                    style={{
                        width: '100%',
                    }}
                />
            </motion.div>
            <motion.div
                style={{
                    marginBottom:'70px'
                }}
                initial={{opacity: '0%'}}
                whileInView={{opacity: '100%'}}
                transition={{duration: .6}}
                viewport={{once: true, amount: .3}}
            >
            <img 
                    src='/20230812_140733.JPG' 
                    style={{
                        width: '100%',
                    }}
                />
            </motion.div>
        </div>
       
    </div>
    </>);
}

export default About;