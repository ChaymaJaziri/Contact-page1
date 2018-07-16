  // Initialize Firebase
var config = {
  apiKey: "AIzaSyAF1DfaaG0hKHmnxGUzqdzYJaCqn6UfISw",
  authDomain: "bizarre-bizarre.firebaseapp.com",
  databaseURL: "https://bizarre-bizarre.firebaseio.com",
  projectId: "bizarre-bizarre",
  storageBucket: "bizarre-bizarre.appspot.com",
  messagingSenderId: "541420592474"
};
firebase.initializeApp(config);
document.getElementById('contactsform').addEventListener('submit', submitF);
function getInputval(id) { 
  return document.getElementById(id).value;
}


function submitF(e){
	e.preventDefault();
	var name= getInputval('name');
	var email= getInputval('email');
  var message=getInputval('message')
	document.getElementById('contactsform').reset();
	saveMessage(name,email,message);
}
 

 
var messagesRef=firebase.database().ref('message');
function saveMessage(name,email,message){
  var newMessagesRef = messagesRef.push();
	newMessagesRef.set({
		name:name,
		email:email,
    message:message,
	})
}