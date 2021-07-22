const submitMessage = () => {
    const passcode = document.querySelector("#passcode").value;
    const message = document.querySelector("#message").value;

    let howManyUpper = 0;

    for(let i = 0; i < passcode.length; i++)
    {
        let holdPass = passcode;
        let holdChar = holdPass.charAt(i);

        if(holdChar == holdChar.toUpperCase())
        {
            howManyUpper++;
        }

    }

    if(passcode.length < 5)
    {
        document.querySelector("#passDirections").innerHTML = "Not valid password. Password must have at least 5 characters";
        document.querySelector("#passcode").value = "";
    }
    else if(passcode.length > 10)
    {
        document.querySelector("#passDirections").innerHTML = "Not valid password. Password must have less than 10 characters";
        document.querySelector("#passcode").value = "";
    }
    else if(passcode.length > 5 && passcode.length < 10 && howManyUpper == 0)
    {
        document.querySelector("#passDirections").innerHTML = "Not valid password. Password must have at least one uppercase character";
        document.querySelector("#passcode").value = "";
    }
    else
    {
        document.querySelector("#passDirections").innerHTML = "Message sent successfully! Passwords must be between 5-10 characters and have at least one capital letter.";
        document.querySelector("#passcode").value = "";
        document.querySelector("#message").value = "";

        firebase.database().ref().push({
        passcode: passcode,
        message: message
        });

    }

};
