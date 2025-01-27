import React from "react";
import "./works.scss";

const items = [
  {
    id: 1,
    title: "Travel Website",
    img: "project-TravelWebsite.png",
    desc: "Travel website offers a visually appealing homepage, easy navigation, booking options, and travel blogs. It highlights top destinations and provides travel tips, ensuring smooth, seamless planning experience across devices.",
    link: "https://dwipannitasen.github.io/travel-website/",
  },
  {
    id: 2,
    title: "Simon Game",
    img: "Project-SimonGame.png",
    desc: "Simon Game offers a digital take on the classic memory challenge with vibrant colors, sound effects, and score tracking. Players test and improve their memory skills, making it a fun and nostalgic experience for all ages.",
    link: "https://dwipannitasen.github.io/simon-game",
  },
  {
    id: 3,
    title: "Drum Kit",
    img: "project-DrumKit.png",
    desc: " An interactive online drum kit simulator where users can play sounds by clicking or tapping virtual pads. It’s a fun, engaging way for music lovers and aspiring drummers to experiment with drumming on any internet-enabled device.",
    link: "https://dwipannitasen.github.io/Drum-kit",
  },
  {
    id: 4,
    title: "Recipe Book",
    img: "project-RecipeBook.png",
    desc: "An interactive digital recipe collection with detailed instructions and categorized dishes. It’s a convenient platform for discovering new recipes, saving favorites, and enhancing culinary skills, perfect for food enthusiasts.",
    link: "https://dwipannitasen.github.io/RecipeBook_codealpha_tasks/",
  },
];


const Works = () => {
  return (
    <section>
      <div className="container">
        <h2>Projects</h2>
        <div className="wrapper">
          {items.map((item) => (
            <div className="work_container" key={item.id}>
              <div className="work_item">
                <div className="image_container">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="text-container">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button>Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
