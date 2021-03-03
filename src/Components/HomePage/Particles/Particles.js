import React from "react";
import Particles from "react-particles-js";

import classes from "./Particles.module.css";

const particle = (props) => {
  return (
    <Particles
      className={classes.Particles}
      params={{
        particles: {
          color: {
            value: "#70008a",
          },
          links: {
            color: "#70008a",
            distance: 120,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 10,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 150,
          },
          opacity: {
            value: 0.9,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 15,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "bubble",
            },
            onHover: {
              enable: false,
              mode: "pulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
};

export default particle;
