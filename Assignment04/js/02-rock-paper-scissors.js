function playGame() {
    // 1. Begin by prompting the user for their choice.
    let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

    // 6. What if the user enters something other than rock, paper, or scissors into the prompt?
    //    Figure out how to handle that as well.
    if (!["rock", "paper", "scissors"].includes(userChoice)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return; // Exit the function if input is invalid
    }

    // 2. Create the computer’s choice.
    //    This will be generated similarly to the coin flip that you did in the last assignment.
    //    Remember though, rather than 2 options, there will be 3 here.
    let randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    // 3. Depending on what the numeric value of the computer’s choice is, 
    //    reset it to a string value of rock, paper, or scissors instead.
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[randomNumber];

    // Display the computer’s choice
    alert(`Computer chose: ${computerChoice}`);

    // 4. Create a conditional statement that checks the user’s choice in relation to the computer’s choice.
    //    Once a winner is defined, display a message within an alert box indicating who the winner is.
    if (userChoice === computerChoice) {
        // 5. What if the result ends in a tie? Figure out how to handle that as well.
        alert("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") || // Rock crushes scissors
        (userChoice === "scissors" && computerChoice === "paper") || // Scissors cut paper
        (userChoice === "paper" && computerChoice === "rock") // Paper covers rock
    ) {
        alert("You win!");
    } else {
        alert("Computer wins!");
    }
}

// Start the game
playGame();
