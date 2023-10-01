import p5 from "p5";

p5.prototype.setGradient = function (x, y, w, h, c1, c2, axis) {
  this.noFill();

  if (axis === "Y_AXIS") {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = this.map(i, y, y + h, 0, 1);
      let c = this.lerpColor(c1, c2, inter);
      this.stroke(c);
      this.line(x, i, x + w, i);
    }
  } else if (axis === "X_AXIS") {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = this.map(i, x, x + w, 0, 1);
      let c = this.lerpColor(c1, c2, inter);
      this.stroke(c);
      this.line(i, y, i, y + h);
    }
  }
};
