import Firebase from "./firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  where,
  doc,
  query,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

export default class FirestoreRepository {
  _firebase = Firebase.getInstance();
  _collectionName;

  constructor(collectioName) {
    this._collectionName = collectioName;
  }

  async getById(id) {
    const document = await getDoc(doc(this._firebase.firestore, `${this._collectionName}/${id}`));

    return document.data();
  }

  async getAll() {
    const { docs: documents } = await getDocs(collection(this._firebase.firestore, this._collectionName));

    return documents.map(doc => doc.data());
  }

  async create(data) {
    await this._firebase.firestore.collection(this._collectionName).add(data);
  }

  async update(id, data) {
    await this._firebase.firestore.doc(`${this._collectionName}/${id}`).update(data);
  }

  async delete(id) {
    await this._firebase.firestore.doc(`${this._collectionName}/${id}`).delete();
  }

  async query(params) {
    const docs = await query(collection(this._firebase.firestore, this._collectionName), where(params.field, params.operator, params.value));

    console.log(docs);

    return docs.docs.map(doc => doc.data());
  }
}
