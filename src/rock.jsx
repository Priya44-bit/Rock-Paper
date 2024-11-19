import React, { useState } from "react";

function RockPaperScissors() {
  // State variables
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  
  // Choices for both player and computer
  const choices = ["✊", "✋", "✌️", "🦎", "🖖"];
  
  // Function to handle player's choice
  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const randomChoice = Math.floor(Math.random() * 5); // Random computer choice
    setComputerChoice(choices[randomChoice]);
    determineWinner(choice, choices[randomChoice]);
  };

  // Function to determine the winner
  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a tie!");
    } else if (
      (player === "✊" && (computer === "✌️" || computer === "🦎")) ||
      (player === "✋" && (computer === "✊" || computer === "🖖")) ||
      (player === "✌️" && (computer === "✋" || computer === "🦎")) ||
      (player === "🦎" && (computer === "✋" || computer === "🖖")) ||
      (player === "🖖" && (computer === "✊" || computer === "✌️"))
    ) {
      setResult("The player won!");
    } else {
      setResult("The computer won!");
    }
  };

  return (
    <div>
      <div>
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handlePlayerChoice(choice)}
            style={{ fontSize: "24px", padding: "10px" }}
          >
            {choice}
          </button>
        ))}
      </div>
      <div>
        {playerChoice && <p>You chose: {playerChoice}</p>}
        {computerChoice && <p>CPU chose: {computerChoice}</p>}
        <p>{result}</p>
      </div>
    </div>
  );
}

export default RockPaperScissors;
