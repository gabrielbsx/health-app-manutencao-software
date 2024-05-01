import NotFoundException from "./not-found.exception.js";

export default class PatientNotFoundException extends NotFoundException {
  static exists(data) {
    return NotFoundException.exists(data, "Patient");
  }
}
