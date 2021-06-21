import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAvQGQvTTJrfymuTuQVhR3_ytZ8suBbo5U",
    authDomain: "itpec-app-85091.firebaseapp.com",
    projectId: "itpec-app-85091",
    storageBucket: "itpec-app-85091.appspot.com",
    messagingSenderId: "818999407156",
    appId: "1:818999407156:web:847af46811a485d9a19061",
    measurementId: "G-X877SZTW92"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default firebase