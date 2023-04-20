class Boat {
  #distance;
  #time;
  constructor(distance, time) {
    this.#distance = distance;
    this.#time = time;
  }

  velocity() {
    return this.#distance / this.#time;
  }
}

export default Boat;
