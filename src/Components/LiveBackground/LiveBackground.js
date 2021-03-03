import React, { useEffect } from "react";

import classes from "./LiveBackground.module.css";

var livePatern = {
  canvas: null,
  context: null,
  cols: 0,
  rows: 0,
  // colors: [20, 180, 80, 200, 100, 140],
  colors: [252, 251, 249, 248, 241, 240],
  triangleColors: [],
  destColors: [],

  init: function (id) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext("2d");
    this.cols = Math.floor(document.body.clientWidth / 6);
    this.rows = Math.floor(document.body.clientHeight / 6) + 1;

    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;

    this.drawBackground();
    this.animate();
  },

  drawTriangle: function (x, y, color, inverted) {
    inverted = inverted === undefined ? false : inverted;

    this.context.beginPath();
    this.context.moveTo(x, y);
    // this.context.lineTo(inverted ? x - 88 : x + 88, y + 44);
    this.context.lineTo(inverted ? x - 22 : x + 22, y + 11);
    this.context.lineTo(x, y + 11);
    this.context.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
    this.context.fill();
    this.context.closePath();
  },

  getColor: function () {
    return this.colors[Math.floor(Math.random() * 6)];
  },

  drawBackground: function () {
    var eq = null;
    var x = this.cols;
    var destY = 0;
    var y;

    while (x--) {
      eq = x % 2;
      y = this.rows;

      while (y--) {
        destY = Math.round((y - 0.5) * 6);

        this.drawTriangle(x * 6 + 2, eq === 1 ? destY : y * 6, this.getColor());
        this.drawTriangle(
          x * 6,
          eq === 1 ? destY : y * 6,
          this.getColor(),
          true
        );
      }
    }
  },

  animate: function () {
    var me = this;

    var x = Math.floor(Math.random() * this.cols);
    var y = Math.floor(Math.random() * this.rows);
    var eq = x % 2;

    if (eq === 1) {
      me.drawTriangle(x * 6, Math.round((y - 0.5) * 6), this.getColor(), true);
    } else {
      me.drawTriangle(x * 6 + 2, y * 6, this.getColor());
    }

    setTimeout(function () {
      me.animate.call(me);
    }, 10);
  },
};

const LiveBackground = (props) => {
  useEffect(
    () =>
      !(function () {
        livePatern.init("canvas");
      })(),
    []
  );

  return <canvas id="canvas" className={classes.Canvas}></canvas>;
};

export default LiveBackground;
