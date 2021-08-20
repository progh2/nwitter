import firebase from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyBRWlP-vNlLbiWySjRnJMmKENZTStu7Loo",
authDomain: "nwitter-b97aa.firebaseapp.com",
projectId: "nwitter-b97aa",
storageBucket: "nwitter-b97aa.appspot.com",
messagingSenderId: "115973244981",
appId: "1:115973244981:web:3d05b1c692bac724fa897c"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

export default firebase.initializeApp(firebaseConfig);