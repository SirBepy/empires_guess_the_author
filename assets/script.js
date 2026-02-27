let words = [];
let revealIndex = 0;

// Load saved words on page load
window.onload = function () {
  const saved = localStorage.getItem("empiresWords");
  if (saved) {
    words = JSON.parse(saved);
    updateWordList();
  }

  // Add Enter key listener
  document
    .getElementById("wordInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addWord();
      }
    });
};

function saveWords() {
  localStorage.setItem("empiresWords", JSON.stringify(words));
}

function addWord() {
  const input = document.getElementById("wordInput");
  const word = input.value.trim();

  if (word) {
    words.push(word);
    input.value = "";
    saveWords();
    updateWordList();
    input.focus();
  }
}

function deleteWord(index) {
  words.splice(index, 1);
  saveWords();
  updateWordList();
}

function updateWordList() {
  const container = document.getElementById("wordListContainer");
  const wordCount = document.getElementById("wordCount");

  if (words.length > 0) {
    container.classList.remove("hidden");
    wordCount.textContent =
      words.length + " word" + (words.length !== 1 ? "s" : "") + " added";
  } else {
    container.classList.add("hidden");
  }
}

function startReveal() {
  if (words.length === 0) return;

  // Shuffle words
  words = words.sort(() => Math.random() - 0.5);
  revealIndex = 0;
  saveWords();

  // Switch screens
  document.getElementById("inputScreen").classList.add("hidden");
  document.getElementById("revealScreen").classList.remove("hidden");

  updateRevealScreen();
}

function updateRevealScreen() {
  document.getElementById("currentWord").textContent = words[revealIndex];
  document.getElementById("wordCounter").textContent =
    "Word " + (revealIndex + 1) + " of " + words.length;

  // Update button states
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.disabled = revealIndex === 0;
  prevBtn.style.opacity = revealIndex === 0 ? "0.5" : "1";

  nextBtn.disabled = revealIndex === words.length - 1;
  nextBtn.style.opacity = revealIndex === words.length - 1 ? "0.5" : "1";
}

function nextWord() {
  if (revealIndex < words.length - 1) {
    revealIndex++;
    updateRevealScreen();
  }
}

function previousWord() {
  if (revealIndex > 0) {
    revealIndex--;
    updateRevealScreen();
  }
}

function resetGame() {
  words = [];
  revealIndex = 0;
  localStorage.removeItem("empiresWords");

  document.getElementById("inputScreen").classList.remove("hidden");
  document.getElementById("revealScreen").classList.add("hidden");
  document.getElementById("wordInput").value = "";

  updateWordList();
}
