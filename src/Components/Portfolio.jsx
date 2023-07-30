/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/image2.jpg";

const imageAltText = "screen showing code";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "4 Data Structures Every New Developer Should Learn",
    description:
      "This repository contains the code for the  4 Data Structures Problems Every New Developer Should Learn.",
    url: "https://github.com/saddarudin/DSA-PBL",
  },
  {
    title: "EasyPay App (Java) basic interface",
    description: "This repository contains the code for the EasyPay App (Java) basic interface.",
    url: "https://github.com/saddarudin/EasyPay_App",
  },
  {
    title: "HackerRank Problem Solution",
    description:
      "This repository contains the code of all the problems that I have solved on HackerRank.",
    url: "https://github.com/saddarudin/HackerRank",
  },
  {
    title: "Python Projects and Problem Solving",
    description: "This repository contains the code for the Python Projects and Problem Solving.",
    url: "https://github.com/saddarudin/Python",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              animation: "1s ease-out 0s 1 slideIn",
              height: "90%",
              width: "100%",
              objectFit: "cover",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
