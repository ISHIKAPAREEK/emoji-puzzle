const puzzleData = {
  "2025-06-26": {
    emoji: "🧙‍♂️⚡📚",
    answer: "Harry Potter",
  },
  "2025-06-27": {
    emoji: "🌍🦍🚀",
    answer: "Planet of the Apes",
  },
  "2025-06-28": {
    emoji: "🐱👢",
    answer: "Puss in Boots",
  },
};

const today = new Date().toISOString().split("T")[0];

if (puzzleData[today]) {
  document.getElementById("emoji").innerText = puzzleData[today].emoji;
} else {
  document.getElementById("emoji").innerText = "🚫 No puzzle today";
}

function checkAnswer() {
  const input = document
    .getElementById("answerInput")
    .value.trim()
    .toLowerCase();
  const correct = puzzleData[today]?.answer.toLowerCase();

  const feedback = document.getElementById("feedback");
  if (input === correct) {
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerText = "❌ Try again!";
    feedback.style.color = "red";
  }
}
