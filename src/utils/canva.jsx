import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

export default function Canva() {
  function distanceBetween(x1, y1, x2, y2) {
    let difX = x2 - x1;
    let difY = y2 - y1;
    return Math.sqrt(difX * difX + difY * difY);
  }
  class Particle {
    constructor(p5, x, y, radius, color, index, maxSpeed) {
      this.index = index;
      this.p5 = p5;
      this.pos = p5.createVector(x, y);
      this.vel = p5.constructor.Vector.random2D();
      this.vel.mult(maxSpeed);
      this.acc = p5.createVector(0, 0);
      this.mColor = [255, 210, 2];
      this.radius = radius;
      this.maxSpeed = maxSpeed;
      this.maxSteer = 0.7;
      this.distance = [];
    }
    // edges() {
    //   if (this.pos.x <= 0) {
    //     this.pos.x = 0;
    //     this.vel.x *= -1;
    //   }
    //   if (this.pos.y <= 0) {
    //     this.pos.y = 0;
    //     this.vel.y *= -1;
    //   }
    //   if (this.pos.x >=screenSize.width) {
    //     this.pos.x =screenSize.width;
    //     this.vel.x *= -1;
    //   }
    //   if (this.pos.y >=screenSize.height) {
    //     this.pos.y =screenSize.height;
    //     this.vel.y *= -1;
    //   }
    // }
    avoidWall() {
      let desire = this.p5.createVector(0, 0);
      let range = 20;
      if (this.pos.x <= range) {
        desire = this.p5.createVector(this.maxSpeed, this.vel.y);
      }
      if (this.pos.y <= range) {
        desire = this.p5.createVector(this.vel.x, this.maxSpeed);
      }
      if (this.pos.x >= screenSize.width - range) {
        desire = this.p5.createVector(-this.maxSpeed, this.vel.y);
      }
      if (this.pos.y >= screenSize.height - range) {
        desire = this.p5.createVector(this.vel.x, -this.maxSpeed);
      }
      if (desire.x != 0 || desire.y != 0) {
        let steer = this.p5.constructor.Vector.sub(desire, this.vel);
        steer.limit(this.maxSteer);
        this.applyForce(steer);
      }
    }
    repel() {
      let target = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
      let dis = distanceBetween(this.pos.x, this.pos.y, target.x, target.y);
      if (dis < 100) {
        let desire = this.p5.constructor.Vector.sub(target, this.pos);
        desire.mult(-this.maxSpeed);
        let steer = this.p5.constructor.Vector.sub(desire, this.vel);
        steer.limit(this.maxSteer);
        this.applyForce(steer);
      }
    }
    wander() {
      let angle = this.vel.heading();
      let randomness = this.p5.PI / 32;
      angle += this.p5.random(-randomness, randomness);
      let x = Math.cos(angle);
      let y = Math.sin(angle);
      let desire = this.p5.createVector(x, y);
      desire.mult(this.maxSpeed);
      let steer = this.p5.constructor.Vector.sub(desire, this.vel);
      steer.limit(this.maxSteer);
      this.applyForce(steer);
    }
    applyForce(force) {
      let f = force;
      this.acc.add(f);
    }
    changeColor() {
      let a = Math.floor(this.p5.random(0, 3));
      if (a < 1) {
        if (this.mColor[0] < 50) {
          this.mColor[0] = 255;
        } else {
          this.mColor[0] -= 10;
        }
      } else if (a < 2) {
        if (this.mColor[1] < 50) {
          this.mColor[1] = 255;
        } else {
          this.mColor[1] -= 10;
        }
      } else if (a < 3) {
        if (this.mColor[2] < 50) {
          this.mColor[2] = 255;
        } else {
          this.mColor[2] -= 10;
        }
      }
    }
    findDistance() {
      for (let i = 0; i < particles.length; i++) {
        if (this.index != i) {
          let dis = distanceBetween(
            this.pos.x,
            this.pos.y,
            particles[i].pos.x,
            particles[i].pos.y
          );
          if (dis < 150) {
            let color = this.p5.map(dis, 0, 150, 100, 0);
            let width = this.p5.map(dis, 0, 150, 4, 1);
            this.p5.stroke(
              this.mColor[0],
              this.mColor[1],
              this.mColor[2],
              color
            );
            this.p5.strokeWeight(width);
            this.p5.line(
              this.pos.x,
              this.pos.y,
              particles[i].pos.x,
              particles[i].pos.y
            );
          }
        }
      }
    }
    draw() {
      this.p5.noStroke();
      this.p5.fill(this.mColor[0], this.mColor[1], this.mColor[2]);
      this.p5.circle(this.pos.x, this.pos.y, this.radius * 2);
    }
    update() {
      //this.edges()
      this.repel();
      this.wander();
      this.avoidWall();
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      //this.changeColor()
      this.draw();
      this.acc.set(0, 0);
    }
  }

  var particles = [];
  // let distance;
  function setGradient(p5, x, y, w, h, c1, c2, axis) {
    p5.noFill();

    if (axis === 1) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = p5.map(i, y, y + h, 0, 1);
        let c = p5.lerpColor(c1, c2, inter);
        p5.stroke(c);
        p5.line(x, i, x + w, i);
      }
    } else if (axis === 0) {
      // Left to right gradient
      let middleX = p5.width / 2; // Middle of screen width

      // First loop for c1 to c2
      for (let i = 0; i <= middleX; i++) {
        let inter = p5.map(i, 0, middleX, 0, 1);
        let c = p5.lerpColor(c1, c2, inter);
        p5.stroke(c);
        p5.line(i, 0, i, p5.height);
      }

      // Second loop for c2 to c1
      for (let i = middleX; i <= p5.width; i++) {
        let inter = p5.map(i, middleX, p5.width, 0, 1);
        let c = p5.lerpColor(c2, c1, inter);
        p5.stroke(c);
        p5.line(i, 0, i, p5.height);
      }
    }
  }
  function setup(p5, canvasParentRef) {
    p5.createCanvas(screenSize.width, screenSize.height).parent(
      canvasParentRef
    );
    let max =
      screenSize.width > screenSize.height
        ? screenSize.width
        : screenSize.height;
    for (let i = 0; i < Math.floor(max / 35); i++) {
      let x = p5.random(0, screenSize.width);
      let y = p5.random(0, screenSize.height);
      let radius = p5.random(2, 6);
      let maxSpeed = p5.random(0.4, 3);
      particles.push(new Particle(p5, x, y, radius, 0, i, maxSpeed));
    }
    // distance = [];
    setGradient(
      p5,
      0,
      0,
      screenSize.width,
      screenSize.height,
      p5.color(9, 21, 63),
      p5.color(28, 74, 159),
      1
    );
    // p5.background(0);
  }

  function draw(p5) {
    setGradient(
      p5,
      0,
      0,
      screenSize.width,
      screenSize.height,
      p5.color(9, 21, 63),
      p5.color(28, 74, 159),
      0
    );
    // p5.background(5);
    for (let particle of particles) {
      particle.findDistance();
      particle.update();
    }
    // console.log(screenSize.width, screenSize.height);
    // console.log(particles[0]);
  }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  // window.addEventListener("resize", (p5) => {
  //   p5.noLoop();
  //   particles = [];
  //   p5.setup();
  //   p5.loop();
  // });

  return <Sketch setup={setup} draw={draw} />;
}
