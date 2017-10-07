/**
 * Created by julian.bock on 2017-10-06.
 */

function signUp(email, password, passwordrepeat) {
    if (password == passwordrepeat) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            /* var errorCode = error.code;
            var errorMessage = error.message; */
            // ...
            alert("Sorry, looks like something went wrong while processing your request.");
        });
    } else alert("Sorry, but it seems like your passwords aren't matching.");
}

function signIn(email, password) {
    var success = true;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        /* var errorCode = error.code;
        var errorMessage = error.message; */
        // ...
        alert("Unfortunately, this is not how you login on this platform. :-/");
    });
}

function observeAuthStateMain() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.activeUser = user;

            var script = window.document.createElement('script');
            script.setAttribute("type","text/javascript");
            script.setAttribute("src", "./scripts/firebase_structure.js");
            window.document.head.appendChild(script);

            // User is signed in.
            /*
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData; */
            // ...

        } else {
            window.activeUser = undefined;

            // User is signed out.
            // ...

            document.body.innerHTML +=
            "<!-- Modal -->"+
            "<div id='auth' class='modal fade' role='dialog'>"+
                "<div class='modal-dialog'>"+
                    "<!-- Modal content-->"+
                    "<div class='modal-content'>"+
                        "<div class='modal-header'>"+
                            "<button id='signin' type='button' onclick='toggleAuth()' disabled>Sign In</button>"+
                            "<button id='signup' type='button' onclick='toggleAuth()'>Sign Up</button>"+
                        "</div>"+
                            "<div class='modal-body'>"+
                                "<iframe id='auth-frame' src='./signin.html' width='465' height='401' seamless=''></iframe>"+
                            "</div>"+
                    "</div>"+
                "</div>"+
            "</div>";
            $("#auth").modal("show");
        }
    });
}

function observeAuthStateChild() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) parent.location.reload();
    });
}

function toggleAuth() {
    if (document.getElementById("auth-frame").getAttribute("src") == "./signin.html") {
        document.getElementById("auth-frame").setAttribute("src", "./signup.html");
        document.getElementById("signin").disabled = false;
        document.getElementById("signup").disabled = true;
    }
    else {
        document.getElementById("auth-frame").setAttribute("src", "./signin.html");
        document.getElementById("signin").disabled = true;
        document.getElementById("signup").disabled = false;
    }
}
