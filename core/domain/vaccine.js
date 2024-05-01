export default class Vaccine {
  #props = {};

  constructor(props) {
    this.#props = {
      name: props.name,
      hasMultipleDoses: props.hasMultipleDoses,
      doses: props.doses,
      intervalBetweenDoses: props.intervalBetweenDoses,
      isExpired: props.isExpired,
      timeToExpire: props.timeToExpire,
      availableDoses: props.availableDoses,
    };
  }

  isAvailable() {
    return this.#props.availableDoses > 0;
  }

  isExpired() {
    return this.#props.isExpired;
  }

  getAvailableDoses() {
    return this.#props.availableDoses;
  }

  getName() {
    return this.#props.name;
  }

  getDoses() {
    return this.#props.doses;
  }

  getIntervalBetweenDoses() {
    return this.#props.intervalBetweenDoses;
  }
}
