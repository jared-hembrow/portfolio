import React, { FC } from "react";
import { Cards } from "..";
import { CardProps } from "../cards/Card";
import config from "../../next.config";

const Projects: FC = () => {
  const projectList: CardProps[] = [
    {
      title: "QR workbench",
      description: `An Electron-based desktop application crafted with TypeScript and React.js, this tool simplifies the generation and storage of QR codes on your local machine. It creates a list of QR codes for various uses. Built for ease of use and flexibility while working with QR codes.`,
      imageUrl: `${config.basePath}/assets/main/qr-workbench-app.png`,
      links: [
        {
          icon: "github",
          linkUrl: "https://github.com/jared-hembrow/qr_workbench",
        },
      ],
    },
    {
      title: "Dragon Blackjack",
      description:
        "Discord bot that allows you to enter commands and it will render a game of blackjack inside the text channel",
      imageUrl: `${config.basePath}/assets/main/dragon-blackjack.jpg`,
      links: [
        {
          icon: "github",
          linkUrl: "https://github.com/jared-hembrow/dragonBlackJack",
        },
      ],
    },
    {
      title: "Rate My Software",
      description:
        "Web application using Next.js and NextAuth.js, that allows users to showcase their software projects and receive valuable feedback from other users.",
      imageUrl: `${config.basePath}/assets/main/rate-my-software-app.png`,
      links: [
        {
          icon: "github",
          linkUrl: "https://github.com/jared-hembrow/rate-my-software",
        },
      ],
    },
    {
      title: "Snakes And Ladders",
      description:
        "Multiplayer Snakes and Ladders game! This project is built using Next.js, Tailwind CSS, TypeScript, and Socket.IO to create an interactive and real-time gaming experience. Players can create games and invite others to join using a unique game ID.",
      imageUrl: `${config.basePath}/assets/main/snakes-and-ladders.png`,
      links: [
        {
          icon: "github",
          linkUrl: "https://github.com/jared-hembrow/snakes-and-ladders",
        },
        {
          icon: "tablet alternate",
          linkUrl: "https://snakes-ladders.azurewebsites.net",
        },
      ],
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <div className="projects-description-container">
        <h1>My Projects</h1>
      </div>
      <Cards cards={projectList} />
    </div>
  );
};

export default Projects;
