import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Travel Website",
    img: "/project-TravelWebsite.png",
    desc: "Paradise Travel website is a responsive web application designed for an enhanced travel planning experience. It features a visually appealing homepage, easy navigation to destinations, booking options, travel blogs, and contact information. The site highlights various travel spots, offers streamlined booking, and provides travel tips, all with a responsive design for seamless use across devices.",
    link: "https://dwipannitasen.github.io/travel-website/",
  },
  {
    id: 2,
    title: "Simon Game",
    img: "/Project-SimonGame.png",
    desc: "Simon game website provides an interactive digital version of the beloved memory challenge. Users engage with sequences of colored buttons, testing and improving their memory skills. With a vibrant interface, sound effects, and score tracking, the site offers an engaging and nostalgic gaming experience, perfect for players of all ages looking for a fun and challenging diversion online.",
    link: "https://dwipannitasen.github.io/simon-game",
  },
  {
    id: 3,
    title: "Drum Kit",
    img: "/project-DrumKit.png",
    desc: "Drum Kit website is an interactive online drum kit simulator. Users can play different drum sounds by clicking on virtual drum pads or tapping them on a touchscreen. It offers a fun and engaging way for music lovers to experiment with drumming, providing a virtual drumming experience accessible through any device with internet access.",
    link: "https://dwipannitasen.github.io/Drum-kit",
  },
  {
    id: 4,
    title: "Recipe Book",
    img: "/project-RecipeBook.png",
    desc: "Recipe Book is an interactive recipe book featuring a diverse collection of recipes. Users can explore various dishes with detailed ingredient lists and cooking instructions organized into categories. It provides a convenient platform for food enthusiasts to discover new recipes, save favorites, and enhance their culinary skills.",
    link: "https://dwipannitasen.github.io/RecipeBook_codealpha_tasks/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-450, 300]);

  const handelClick = () => {
    window.open(item.link);
  }

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handelClick}>Live Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default projects;
