'use strict';

class Shape {
  #name;
  #colour;

  constructor(name, colour) {
    this.#name = name;
    this.#colour = colour;
  }

  get name() {
    return this.#name;
  }

  get colour() {
    return this.#colour;
  }

  getInfo() {
    return `${this.colour} ${this.name}`;
  }
}

export default Shape;