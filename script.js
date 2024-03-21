function askQuestion() {
    var userInput = document.getElementById("user-input").value.toLowerCase(); // Convert input to lowercase
    var botResponse = document.getElementById("bot-response");
    var userInputField = document.getElementById("user-input");

    switch (userInput) {
        case "how does the application work":
            botResponse.innerText = "The application allows farmers to list their produce, and sellers can browse and purchase these products directly from the farmers.";
            break;
         case "can i track my order":
            botResponse.innerText = "Yes, you can track your order by logging into your account and accessing the order tracking feature, which provides real-time updates on your shipment's status.";
            break;
        case "what are the shipping options available":
            botResponse.innerText = "We offer standard and expedited shipping options to cater to different delivery time preferences and budgets.";
            break;
        case "how long does shipping take":
            botResponse.innerText = "Shipping times vary depending on the selected shipping option and your location, typically ranging from 3 to 7 business days for standard shipping and 1 to 3 business days for expedited shipping.";
            break;
        case "do you offer international shipping":
            botResponse.innerText = "Yes, we offer international shipping to many countries worldwide. Shipping rates and delivery times may vary based on the destination.";
            break;
        case "can i change my shipping address after placing an order":
            botResponse.innerText = "Unfortunately, we cannot change the shipping address once an order has been placed to ensure timely delivery and security. Please double-check your shipping address before completing your purchase.";
            break;
        case "what payment methods are accepted":
            botResponse.innerText = "We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and sometimes alternative methods like Apple Pay or Google Pay, providing convenience and flexibility for our customers.";
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
            case "what benefits do farmers get":
                botResponse.innerText = "Farmers benefit from increased market access, better prices, and direct communication with sellers. They can also control their listings and pricing.";
                break;
            case "what benefits do sellers get":
                botResponse.innerText = "Sellers benefit from a wider variety of fresh, local produce at potentially lower prices. They can also establish relationships with farmers to ensure a consistent supply.";
                break;
            case "is the app secure":
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
    