import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import env from "../../../env.js";

export default class Firebase {
  static #instance = null;

  static getInstance() {
    if (!Firebase.#instance) {
      const app = initializeApp({
        apiKey: env.API_KEY,
        authDomain: env.AUTH_DOMAIN,
        projectId: env.PROJECT_ID,
        storageBucket: env.STORAGE_BUCKET,
        messagingSenderId: env.MESSAGING_SENDER_ID,
        appId: env.APP_ID,
        measurementId: env.MEASUREMENT_ID,
      });

      Firebase.#instance = {
        app,
        auth: getAuth(app),
        storage: getStorage(app),
        firestore: getFirestore(app),
      };
    }

    return Firebase.#instance;
  }
}
