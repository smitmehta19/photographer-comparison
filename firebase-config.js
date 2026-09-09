/* ---------------------------------------------------------------
   Firebase settings for the photographer comparison dashboard.

   This file IS committed to the public repo, and that is fine: a
   Firebase web config is public in every Firebase site by design.
   Access is enforced server-side by the Firestore security rules
   (firestore.rules) plus the authorised-domain list in the console.

   Deliberately NO email addresses here - the allow-list lives only
   in the security rules, so nobody's Gmail ends up on a public repo.
   --------------------------------------------------------------- */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBbEkW-rhRoc9-Ta6TICzoWAd9MEXgb1Wk",
  authDomain: "photographer-comparison.firebaseapp.com",
  projectId: "photographer-comparison",
  storageBucket: "photographer-comparison.firebasestorage.app",
  messagingSenderId: "660580413120",
  appId: "1:660580413120:web:7c99df3fa1281cd27a8725"
};
