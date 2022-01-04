function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input =="HELLO") {
        return "Hello 👋👋! How can i help you?";
    }
    else if(input == "Hello") {
        return "Hello 👋👋 ! How can i help you?";
    }
    else if(input == "1") {
        return "For availing Scholarship you need to write the HKU entrance test and in the website you have scholarship column on the homepage Go and visit there";
    }  
    else if(input == "2") {
        return "Firstly you need to visit  the home page of the website and there you will have a ENTRANCE TEST column and provide the necessary details if you have already filled kindly check your e-mail of the given email-id you will be provided with exam date,exam time,login details,test guidelines and testlink";
    }
    else if(input == "3") {
        return "HKU is one of the youngest university to get NAAC A+ grading,We have the Best Faculty and we deal with the latest trending technologies like CloudComputing,Internet of Things,Information security,Cyber Security,Datascience,AIML,Bigdata and many more , For more details visit the courses in website.";
    }
    else if(input == "4") {
        return "Have an issue with Fee payment ? Don't worry we are there to help you.If the payment is not done then visit fee payment in the website and there enter your Bank Account Details and enter the OTP now after the transaction complete you will recieve details to email-id and incase if payment is debted but not recieved mail then give a call to +916304347146 or drop an email to saraburahul19@gmail.com  our agent will help you out.";
    }
    else if(input == "5") {
        return "Have issues with Sign Up or Login then if you are visiting first time then click on SignUp and Provide the following details and then you will recieve an e-mail for registering an account then login with your email-id and password.";
    }
    else if(input == "6") {
        return "For knowing more about courses Visit the course blog and this is the link below.";
    }
    else if(input == "7") {
        return "For anyother issues Drop an e-mail to saraburahul19@gmail.com or call +91-6304347146 our agent will contact you soon";
    }
    else if(input == "Thankyou") {
        return " You're Welcome✨✨✨ ";
    }
    else if(input == "THANKYOU") {
        return " You're Welcome✨✨✨ ";
    }
    
    else if(input == "Hi") {
        return "Hello 👋👋! How can i help you?";
    } 
    else if(input == "hiii") {
        return "Hello 👋👋! How can i help you?";
    } 
    else if (input == "goodbye") {
        return "Talk to you later👋👋!";
    } else {
        return "Try asking something else!";
    }

}