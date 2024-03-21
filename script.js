function askQuestion() {
    var userInput = document.getElementById("user-input").value.toLowerCase(); // Convert input to lowercase
    var botResponse = document.getElementById("bot-response");
    var userInputField = document.getElementById("user-input");

    switch (userInput) {
        case "how does the application work":
            botResponse.innerText = "The application allows farmers to list their produce, and sellers can browse and purchase these products directly from the farmers.";
            break;
        case "how can i register as a farmer":
            botResponse.innerText = "To register as a farmer, visit the 'Register' page on the application, fill out the required information, and submit the form.";
            break;
        case "how can i register as a seller":
            botResponse.innerText = "To register as a seller, visit the 'Register' page on the application, select 'Seller' as the account type, fill out the required information, and submit the form.";
            break;
        case "what types of products are available":
            botResponse.innerText = "A wide range of agricultural products are available, including fruits, vegetables, grains, dairy products, and more.";
            break;
        case "how can i contact support":
            botResponse.innerText = "You can contact our support team via:\n- Email: kelvinwathoni@gmail.com\n- Phone: 07-152-093-42\n- Location: Kericho Center, Kabianga, Kenya";
            break;
        case "how does the application ensure the quality of products from farmers?":
            botResponse.innerText = "The application ensures product quality through a rigorous verification process for farmers. Only verified farmers with high-quality produce are allowed to list their products on the platform. Additionally, user ratings and reviews help maintain quality standards.";
            break;
        case "what benefits do farmers get?":
            botResponse.innerText = "Farmers benefit from increased market access, better prices, and direct communication with sellers. They can also control their listings and pricing.";
            break;
        case "what benefits do sellers get?":
            botResponse.innerText = "Sellers benefit from a wider variety of fresh, local produce at potentially lower prices. They can also establish relationships with farmers to ensure a consistent supply.";
            break;
        case "is the app secure?":
            botResponse.innerText = "The Farmer-Seller Connector application prioritizes security. We implement industry-standard security measures to protect user data and transactions.";
            break;
        default:
            if (userInput === userInput.toUpperCase()) {
                botResponse.innerText = ""; // Clear bot response for all uppercase inputs
            } else {
                botResponse.innerText = "I am a simple chatbot. I cannot provide answers to specific questions.";
            }
    }

    // Clear the input field
    userInputField.value = "";
}
