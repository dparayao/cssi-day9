// Retrieve the messages from the database
const getMessages = () => {
 const messagesRef = firebase.database().ref('/messages');
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
     console.log(data);
     // Find message
     findMessage(data);
 });
}

const findMessage = (messages) => {
 const passcodeAttempt = document.querySelector('#passcode').value;
 for (message in messages) {
     const messageData = messages[message];
     if (messageData.password == passcodeAttempt) {
         // Code to hide input form, and render message as HTML
         renderMessageAsHtml(messageData.message);
     }
 }
}


const renderMessageAsHtml = (message) => {
 // Hide Input Form
 const passcodeInput = document.querySelector('#passcode');
 passcodeInput.style.display = 'none';  

 // Render messageas HTML
 const messageDiv = document.querySelector('#message');
 messageDiv.innerHTML = message;
}