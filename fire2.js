const firebaseConfig = {
  apiKey: "AIzaSyD6_tJpSN2ca8L12Rm9ulaosTJfG2SKUK8",
  authDomain: "kpsyst-a5377.firebaseapp.com",
  projectId: "kpsyst-a5377",
  storageBucket: "kpsyst-a5377.firebasestorage.app",
  messagingSenderId: "738297113997",
  appId: "1:738297113997:web:1dd012a94ad77c981461c4",
  measurementId: "G-H60ZMZ6LV6"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
window.db = db; // important!
