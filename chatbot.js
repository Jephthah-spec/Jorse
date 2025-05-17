// Variables holding the DOM elements
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const userForm = document.getElementById("userForm");

// Event listener for the form submission
userForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const message = userInput.value.trim();

    if(message === "" ) {
        alert("Cant send empty message")
        return;
    }else{
        addMessage('user', message);
    respond(message);
    userInput.value = '';
    }
})

// Function to add a message to the chatbox
function addMessage(sender, text) {
    const newMesage = document.createElement("div")
    newMesage.className = sender == "user" ?"user-message" :"bot"
    newMesage.innerText = text;
    chatbox.appendChild (newMesage);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to respond to the user's message
function respond(message) {
    let response;

    // Programmed responses from the chatbot
    if (message.includes("hello") || message.includes ("Hi") || message.includes("Hello") || message.includes ("hi") ) {
       response = "Hello, what can I do for you today"
    }else if (message.includes("how are you") || message.includes("How are you") || message.includes("sup") || message.includes ("Sup")) {
        response = "I am fine, thank you for asking"
    }else if (message.includes(" is your name") || message.includes(" is ur name") ) {
        response = "I am Jorse Chatbot created by Jephthah"
    }else if (message.includes("learn how to code")) {
        response = "You can check websites like W3schools, freecodecamp or learn from AI's like me"
    }else if (message.includes("good") || message.includes ("fine")) {
        response = "Good to hear"
    }
    else{
        response = "I don't have the answer to that question, you can try asking something else"
    }

    setTimeout(() => {
        addMessage("bot", response)
    }, 1000);
}

// Variables holding the DOM element housing everything
let container= document.getElementById("container");

// Event listeners for changing the background color of the container
document.getElementById("changeColor").addEventListener("click", function changeColor () {
  
        container.style.backgroundColor = "white"

})

// Event listener for changing the background color of the container on auxiliary click (middle mouse button)
document.getElementById("changeColor").addEventListener("auxclick", function changeColor(){
        container.style.backgroundColor = "black"
})
