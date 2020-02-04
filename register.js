var config = {
  apiKey: "AIzaSyDwLKqgCXR3BXNAvQiEQPDDVIJhA4kaURk",
  authDomain: "antaragni-contact-form.firebaseapp.com",
  databaseURL: "https://antaragni-contact-form.firebaseio.com",
  projectId: "antaragni-contact-form",
  storageBucket: "antaragni-contact-form.appspot.com",
  messagingSenderId: "811481927437"
};

firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('registerForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name    = document.getElementById('name').value;
  var email   = document.getElementById('email').value;
  var number  = document.getElementById('number').value;
  var college = document.getElementById('college').value;
  var course  = document.getElementById('course').value;
  var sem     = document.getElementById('sem').value;
  var section = document.getElementById('section').value;
  var events  = document.getElementById('event').value;

  saveMessage(name, email, number, college, course, sem, section, events);

  document.getElementById("alert").style.display = 'block';

  setTimeout(function(){
    document.getElementById("alert").style.display = 'none';
  },3000);

  document.getElementById('registerForm').reset();
}

// Save message to firebase
function saveMessage(name, email, number, college, course, sem, section, events){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:number,
    college:college,
    course:course,
    sem:sem,
    section:section,
    events:events
  });
}
