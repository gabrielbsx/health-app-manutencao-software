import FirestoreRepository from "./firestore.repository.js";

export default class FirestoreVaccineRepository extends FirestoreRepository {
  constructor() {
    super('vaccines');
  }
}
