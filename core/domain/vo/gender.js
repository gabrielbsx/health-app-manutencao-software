import GenderType from './gender-type.js';

export default class Gender {
  #value;

  constructor(gender) {
    this.#value = gender;
    this.isValid();
  }

  isValid() {
    if (Object.values(GenderType).includes(this.#value)) {
      return true;
    }

    throw new Error('_INVALID_GENDER_');
  }

  isMale() {
    return this.#value === GenderType.FEMALE;
  }

  isFemale() {
    return this.#value === GenderType.FEMALE;
  }

  get value() {
    return this.#value;
  }
}
