import FirestoreRepository from "./firestore.repository.js";

export default class FirestorePatientRepository extends FirestoreRepository {
  constructor() {
    super("profiles");
  }
}
