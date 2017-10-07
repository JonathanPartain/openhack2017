/**
 * Created by julian.bock on 2017-10-06.
 */

function signUp(email, password, passwordrepeat) {
    if (password == passwordrepeat) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });//.then(window.location.replace("index.html"));
    } else alert("Oi! There seems to be a mismatch with the given passwords.");
}

function signIn(email, password) {
    var success = true;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });//.then(window.location.replace("index.html"));
}

function fetchUser() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            // ...
        }
    });
}