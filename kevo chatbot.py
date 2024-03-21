import random

# Define patterns and responses
patterns_responses = {
    "how does the application work": [
        "The application allows farmers to list their produce, and sellers can browse and purchase these products directly from the farmers."
    ],
    "how can i register as a farmer": [
        "To register as a farmer, visit the 'Register' page on the application, fill out the required information, and submit the form."
    ],
    "how can i register as a seller": [
        "To register as a seller, visit the 'Register' page on the application, select 'Seller' as the account type, fill out the required information, and submit the form."
    ],
    "what types of products are available": [
        "A wide range of agricultural products are available, including fruits, vegetables, grains, dairy products, and more."
    ],
    "how can i contact support": [
        "- Email: kelvinwathoni@gmail.com or our Phone: 07-152-093-42,Location is Kericho, Kabianga Unversity",
        "- Location: Kericho Center, Kabianga, Kenya"
    ],
    "how does the application ensure the quality of products from farmers?": [
        "The application ensures product quality through a rigorous verification process for farmers. Only verified farmers with high-quality produce are allowed to list their products on the platform. Additionally, user ratings and reviews help maintain quality standards."
    ],
    "what benefits do farmers get?": [
        "Farmers benefit from increased market access, better prices, and direct communication with sellers. They can also control their listings and pricing."
    ],
    "what benefits do sellers get?": [
        "Sellers benefit from a wider variety of fresh, local produce at potentially lower prices. They can also establish relationships with farmers to ensure a consistent supply."
    ],
    "is the app secure?": [
        "The Farmer-Seller Connector application prioritizes security. We implement industry-standard security measures to protect user data and transactions."
    ]
}

def print_greeting():
    print("Hi there,Welcome to the AgriSphere chatbot platform!")
    print("Feel free to ask any of the following questions:")
    for pattern in patterns_responses.keys():
        print(f"- {pattern.capitalize()}")

def chat_with_bot():
    print_greeting()
    
    while True:
        user_input = input("Do you have a question? (yes/no): ").lower()
        if user_input == "no":
            print("for more queries be free to ask ,THANK YOU. Goodbye!")
            break
        elif user_input == "yes":
            user_question = input("Enter your question: ").lower()
            if user_question in patterns_responses:
                # Randomly select one response from the list
                response = random.choice(patterns_responses[user_question])
                if isinstance(response, list):
                    for item in response:
                        print("Bot:", item)
                else:
                    print("Bot:", response)
            else:
                # Check for typing errors and suggest corrections
                words = user_question.split()
                corrected_words = [suggest_correction(word) if suggest_correction(word) else word for word in words]
                if corrected_words != words:
                    print("Bot: Typing error detected. Did you mean:", " ".join(corrected_words))
                else:
                    print("Bot: I'm sorry, I cannot provide an answer to that question or you may check if its a typo error.") 
            print("Bot: Please enter 'yes' or 'no'.")

def suggest_correction(word):
    # Implement your suggestion logic here
    return None  # Placeholder for now

if __name__ == "__main__":
    chat_with_bot()
