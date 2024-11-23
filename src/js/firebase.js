const firebaseConfig = {
    apiKey: "AIzaSyCqt19271zSIM3oj6Y4MRYUBq9NaiRBUMQ",
    authDomain: "cyberdude-giveway.firebaseapp.com",
    projectId: "cyberdude-giveway",
    storageBucket: "cyberdude-giveway.firebasestorage.app",
    messagingSenderId: "688244426992",
    appId: "1:688244426992:web:a5eaa4579e8c4686f65a35",
    measurementId: "G-ELHSR5BTPE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const createRecord = (record) => {
    return db.collection("request").add({ record })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

}