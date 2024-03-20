function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatContainer = document.getElementById("chat-container");
    chatContainer.innerHTML += "<div>You: " + userInput + "</div>";
    document.getElementById("user-input").value = "";
}
