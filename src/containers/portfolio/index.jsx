import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image.GIF";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.GIF";
import ImageFive from "../../images/image5.webp";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Gain",
    image: ImageOne,
    link: "https://hopet9656.github.io/weightTracker.github.io/",
  },
  {
    id: 3,
    name: "Tic-tac-toe",
    link: "https://github.com/hopet9656/Tic-Tac-Toe",
    image: ImageTwo,
  },
  {
    id: 4,
    name: "Pong Game",
    image: ImageThree,
    link: "https://github.com/hopet9656/pongGame",
  },
  {
    id: 5,
    name: "Image Converter",
    image: ImageFour,
    link: "https://github.com/hopet9656/imageConverter",
  },
  {
    id: 6,
    name: "Snake game",
    image: ImageFive,
    link: "https://github.com/hopet9656/SnakeGame.github.io",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection && filteredValue !== 1) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [filteredValue]);

  function handleFilter(currentId) {
    console.log("Current filter ID:", currentId);
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Visit</button>
                      </a>
                    ) : (
                      <button disabled>Visit</button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {filteredValue !== 1 && (
        <div className="scroll-button">
          <button onClick={() => setFilteredValue(1)}>
            <BsArrowUp size={24} />
            Back to Portfolio
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
