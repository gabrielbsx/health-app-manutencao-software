import Gender from './vo/gender.js';

export default class Patient {
  #props = {};

  constructor(props) {
    this.#props = {
      name: props.name,
      born: props.born,
      gender: new Gender(props.gender),
    };
  }

  get name() {
    return this.#props.name;
  }

  get born() {
    return this.#props
  }

  get gender() {
    return this.gender.value;
  }
}