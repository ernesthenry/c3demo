var firebaseConfig = {
    apiKey: "AIzaSyBtEdgBS-NVPKQLzaTL-BgXnyOyG6XPgVg",
    authDomain: "c3database.firebaseapp.com",
    databaseURL: "https://c3database.firebaseio.com",
    projectId: "c3database",
    storageBucket: "",
    messagingSenderId: "1030803945221",
    appId: "1:1030803945221:web:ffdeda4cc4b30ecd0ea96c"
  };
  
firebase.initializeApp(firebaseConfig);

    
var messagesRef = firebase.database().ref('messages');  
$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Name: $('.name').val(),
        Email: $('.email').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});
