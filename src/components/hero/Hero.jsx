import { motion } from "framer-motion";
import "./hero.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const resumeFile = "http://localhost:5173/DwipannitaSen.pdf";

const textVariants = {
  initial: { x: -500, opacity: 0},
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const [text] = useTypewriter({
    words: ["Web Developer", "UI Designer"],
    loop: {},
    delaySpeed: 700,
    deleteSpeed:80
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Hello, I'm</motion.h1>
          <motion.h2 variants={textVariants}>DWIPANNITA SEN</motion.h2>
          <motion.h3 variants={textVariants}>
            {text} <Cursor cursorColor="#00ADB5" />
          </motion.h3>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              onClick={() => {
                downloadFile(resumeFile);
              }}
              variants={textVariants}
              className="resumeButton"
            >
              Download Resume
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              variants={textVariants}
              className="contactButton"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        <div className="imageContainer">
          <img src="/landingphoto1.png" alt="hero-img"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
