const firebaseConfig = {
    apiKey: "AIzaSyCqt19271zSIM3oj6Y4MRYUBq9NaiRBUMQ",
    authDomain: "cyberdude-giveway.firebaseapp.com",
    projectId: "cyberdude-giveway",
    storageBucket: "cyberdude-giveway.firebasestorage.app",
    messagingSenderId: "688244426992",
    appId: "1:688244426992:web:a5eaa4579e8c4686f65a35",
    measurementId: "G-ELHSR5BTPE"
};

const COLLECTION_NAME = "request"

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const createRecord = (record) => {
    return db.collection(COLLECTION_NAME).add({ record })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

}

// login firebase
const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                resolve(user)
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;

                reject({ errorCode, errorMessage })
            });
    })
}


const getAllRequest = () => {
    return new Promise((resolve, reject) => {
        const results = db
            .collection(COLLECTION_NAME)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    return doc.data()
                })
                resolve(results)
            })
            .catch((e) => {
                console.log('error in getting.', e)
                reject(e)
            })
    })
}