const FirestoreInit = (function () {
    let instance;
    // Initialize Firebase
    let config = {
        apiKey: "AIzaSyCXw12HuDoWlcvBt8wJJWSRJnWt0FWGi2w",
        authDomain: "news-app-932cc.firebaseapp.com",
        databaseURL: "https://news-app-932cc.firebaseio.com",
        projectId: "news-app-932cc",
        storageBucket: "news-app-932cc.appspot.com",
        messagingSenderId: "436984692386"
    };
    firebase.initializeApp(config);


// Initialize Cloud Firestore through Firebase
    let db = firebase.firestore();

    function getDb() {
        return db;
    }

    function createInstance() {
        return {
            getDb
        }
    }

    return {
        getInstance() {
            return instance || (instance = createInstance());
        }
    }

})();