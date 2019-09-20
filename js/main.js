var firebaseConfig = {
  apiKey: "AIzaSyBtEdgBS-NVPKQLzaTL-BgXnyOyG6XPgVg",
  authDomain: "c3database.firebaseapp.com",
  databaseURL: "https://c3database.firebaseio.com",
  projectId: "c3database",
  storageBucket: "",
  messagingSenderId: "1030803945221",
  appId: "1:1030803945221:web:ffdeda4cc4b30ecd0ea96c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');  

document.getElementById('contactForm').addEventListener('submit',
 submitForm);

 function submitForm(e){
   e.preventDefault();

   var name = getInputValue('userName');
   var email = getInputValue('userEmail');
   var message = getInputValue('userMessage');

   
   //save message
   saveMessage(name,email,message);
   console.log(messagesRef)

   // show alert
   document.querySelector('.alert').style.display('block');

   // Hide alert after 3 seconds
   setTimeout(function(){
    document.querySelector('.alert').style.display('none')
   }, 3000);

   // clear fields
   document.getElementById('#contactForm').reset();
 }

// Function to get form values
 function getInputValue(id){
   return document.getElementById(id).value;
 }


 function saveMessage(name,email,message){
   var newMessageRef = messagesRef.push()
   newMessageRef.set({
     name: name,
     email: email,
     message: message
   });
 }
